import { VStack, Text, Link, FormLabel, Input, Button, Box } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

export default function ContainerLogin() {
  const user = {
    usuario: 'john.doe@gmail.com', 
    contraseña: 12345678
  }

  const clickSign = (e) => {
    e.preventDefault();
    if ((user.usuario == e.target.email.value) && (user.contraseña == e.target.password.value)) {
      console.log('Usuario logueado correctamente')
    } else {
      console.log('Usuario o contraseña incorrecta')
    }
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
      </Box>
    </VStack>
      )
}
