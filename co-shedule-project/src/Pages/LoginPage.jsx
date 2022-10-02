import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Image, Input, Stack, Link} from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'


const LoginPage = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChangeFormData = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post(`https://reqres.in/api/login`,{
      ...formData
    })
    .then(res=>{
     alert(`Hi! your token is ${res.data.token}`)
    })
  }
  return (
    <Container maxW='100vw' h='100vh' >
      <Flex h='100%'>
        <Box flex='2'
          backgroundImage="url('https://image.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          bgSize='100%'
        ></Box>
        <Box overflowY='scroll' flex='1' p={10}>
          <Box p={10}>
            <Image src="https://accounts.coschedule.com/img/cos-logo-horz.svg" />
          </Box>
          <form onSubmit={handleSubmit}>
            <Stack direction='column' spacing={4} align='center'>
              <FormControl >
                <FormLabel fontSize='sm'>EMAIL ADDRESS</FormLabel>
                <Input size='lg' type='email' name='email' value={formData.email} onChange={handleChangeFormData} placeholder='Email Address' />
              </FormControl>
              <FormControl >
                <FormLabel fontSize='sm'>PASSWORD</FormLabel>
                <Input size='lg' type='password' name='password' value={formData.password} onChange={handleChangeFormData} placeholder='Password' />
              </FormControl>
              <FormControl >
                <Button
                  type='submit'
                  height='48px'
                  width='100%'
                  colorScheme='red'
                >
                  Sign In
                </Button>
              </FormControl>
              <FormControl >
                <Heading fontSize='md' as='h5'>OR</Heading>
              </FormControl>
              <FormControl >
                <Button
                  type='submit'
                  height='48px'
                  width='100%'
                  variant='outline'
                  fontSize='md'
                >
                  <Flex>
                    <Image mr='10px' h='20px' w='20px' src='https://accounts.coschedule.com/img/sso-providers/Google.svg' />
                    <span>Continue with google</span>
                  </Flex>
                </Button>
              </FormControl>
              <FormControl >
                <Button
                  type='submit'
                  height='48px'
                  width='100%'
                  variant='outline'
                  fontSize='md'
                >
                  <Flex>
                    <Image mr='10px' h='20px' w='20px' src='https://accounts.coschedule.com/img/sso-providers/Facebook.svg' />
                    <span>Continue with Facebook</span>
                  </Flex>
                </Button>
              </FormControl>
              <FormControl >
                <Button
                  type='submit'
                  height='48px'
                  width='100%'
                  variant='outline'
                  fontSize='md'
                >
                  <Flex>
                    <Image mr='10px' h='20px' w='20px' src='https://accounts.coschedule.com/img/sso-providers/apple.svg' />
                    <span>Continue with Apple</span>
                  </Flex>
                </Button>
              </FormControl>
            </Stack>
          </form>
          <Box fontSize='sm' mt='50px'>
            <Link as={ReactLink} mr='10px'>Need an account?</Link>
            <span>|</span>
            <Link as={ReactLink} ml='10px'>Forgot your password?</Link>

          </Box>
        </Box>
      </Flex>
    </Container>
  )
}

export default LoginPage