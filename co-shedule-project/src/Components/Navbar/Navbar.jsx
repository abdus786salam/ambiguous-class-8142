import { Box, Button, Flex, Link, Spacer, HStack } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import MenuButtons from './MenuButtons'
import { Link as ReactLink } from 'react-router-dom'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import WhyCoSchedule from './WhyCoSchedule'
import Resources from './Resources'

const Navbar = () => {
  return (
    <Flex p={2}>
      <HStack spacing='24px'>
      <Logo/>
      <MenuButtons name='Product'/>
      <WhyCoSchedule  name='Why CoSchedule'/>
      <Resources name='Resources' />
      <Button variant='link' _hover={{ color: '#d4765d' }}>
        <Link textDecoration='none' as={ReactLink} to='/pricing'>Pricing</Link>
        </Button>
      </HStack>
      <Spacer/>
      <HStack spacing='24px'>
        <Button variant='link' _hover={{ color: '#d4765d' }}>
        <Link textDecoration='none' as={ReactLink} to='/login'>Sign In</Link>
        </Button>
        <Button as={Button} colorScheme='red'  variant='solid'>
        <Link as={ReactLink} to='/product-demo'>Get A Demo</Link>
        </Button>
        <ColorModeSwitcher justifySelf="flex-end" />
      </HStack>
    </Flex>
  )
}

export default Navbar