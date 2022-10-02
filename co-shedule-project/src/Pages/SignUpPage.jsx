import React from 'react'
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Image, Input, Stack, Link, Text, Center } from '@chakra-ui/react'


const SignUpPage = () => {
  return (
    <Container maxW='100%' bg='blackAlpha.200' >
      <Center>
      <Box p={10} m='auto' alignContent='center' >
        <Box p={10}>
          <Heading as='h1'>Create My Marketing Calendar</Heading>
          <Text mt={5} fontSize='md'>Free for life. No credit card required.</Text>
        </Box>
        <form style={{ maxWidth: '550px'}}>
          <Stack bg='white' direction='column' p={10} spacing={4} >
            <FormControl >
              <FormLabel fontSize='sm'>Full Name</FormLabel>
              <Input size='lg' type='text' placeholder='Full Name' />
            </FormControl>
            <FormControl >
              <FormLabel fontSize='sm'>EMAIL ADDRESS</FormLabel>
              <Input size='lg' type='email' placeholder='Email Address' />
            </FormControl>
            <FormControl >
              <FormLabel fontSize='sm'>PASSWORD</FormLabel>
              <Input size='lg' type='password' placeholder='Password' />
            </FormControl>
            <FormControl >
              <Button
                type='submit'
                height='48px'
                width='100%'
                colorScheme='red'
              >
                Get Started Now
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
            <Box fontSize='sm' mt='50px'>
              <Text textAlign='left'>
                By clicking "Get Started Now", you agree to CoSchedule’s {" "}
                <Link >terms of service,
                  end user agreement, and privacy policy; </Link>you are 16 years or older;
                and you will receive information from CoSchedule from which you can opt out at any time.
              </Text>
            </Box>
          </Stack>
        </form>
      </Box>
        </Center>  
      

    </Container>
  )
}

export default SignUpPage