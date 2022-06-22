import { VStack, Text, Link, FormLabel, Input, Button, Box, Tag } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import { useState } from 'react';

export default function ContainerLogin() {

  const [logueado, setLogueado] = useState({});

  const clickSign = (e) => {
    e.preventDefault();
    const user =  JSON.stringify({
      email: e.target.email.value,
      password: e.target.password.value
    });

    fetch("https://reqres.in/api/login", {
      method: 'POST', 
      body: user,
      headers: {
        "content-type": "application/json"
      }
    })
    .then(res => res.json())
    .then(result => 
      setLogueado(result)
    )
  }

  return (
    <VStack
      bg='whitesmoke'
      p={5}
    > 
      <MoonIcon w={40} h={10} color='blue'/>
      <Text fontSize='3xl'>Log in to your account</Text>
      <Text fontSize='1xl'>Don't have an account?{' '} 
        <Link color='teal.500'>Sign up</Link> 
      </Text>
      <Box bg='gray.100' p={10}>
        <form onSubmit={(e) => clickSign(e)}>
          <FormLabel htmlFor='email' fontSize={14}>Email</FormLabel>
          <Input id='email' type='email'></Input>
          <FormLabel htmlFor='password' mt={4} fontSize={14}>Password</FormLabel>
          <Input id='password' type='password'></Input> 
          <Button mt={10} colorScheme='teal'type='submit' w='100%'>
            Sign in
          </Button>
        </form>
        <Box 
          textTransform='uppercase'
          display='flex'
          justifyContent='center'
          mt={10}>
          { logueado.token && <Tag height='80px' fontSize='24px' colorScheme='green' variant='solid' size= 'lg'>Login exitoso</Tag> }
          { logueado.error && <Tag colorScheme='red' variant='solid' size= 'lg'>{ logueado.error}</Tag> }
        </Box>
      </Box>
    </VStack>
      )
}


