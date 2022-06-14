import { VStack, Box, StackDivider, Text, Link, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

export default function ContainerLogin() {

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
      
        <FormControl bg='white' w={400} h='50vh' p={5}>
          <FormLabel htmlFor='email' fontSize={14}>Email</FormLabel>
          <Input id='email' type='email'></Input>
          <FormLabel htmlFor='password' mt={4} fontSize={14}>Password</FormLabel>
          <Input id='password' type='password' ></Input>
          <Button mt={10} colorScheme='teal'type='submit' w='100%'>
            Sign in
          </Button>
        </FormControl>
      
    </VStack>
      )
}
