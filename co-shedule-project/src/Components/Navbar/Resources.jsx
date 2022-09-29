import { Menu, MenuButton, Link, MenuItem, MenuList, VStack, Button, Badge, useDisclosure, Flex, Image, Heading, Text, Box } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'

const Resources = ({ name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Menu isOpen={isOpen} onClose={onClose}>
        <MenuButton as={Button} onMouseOver={onOpen} variant='link' _hover={{ color: '#d4765d' }} >
          {name}
        </MenuButton>
        <MenuList boxShadow='dark-lg' onMouseLeave={onClose}>
          <Flex >
            <VStack p={4}>
              <Heading as='h6' color='gray' alignContent='left' size='xs'>TOOLS
                <Badge variant='subtle' ml='1' fontSize='1em' colorScheme='red'>FREE
                </Badge>
              </Heading>
              <MenuItem>
                <Link as={ReactLink} to='/login' display='flex' gap={2}>
                  <Image h='30px' w='30px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUVVWQMK0s4TON9pRhPvH2FeoU_uIylHVW-Q&usqp=CAU" />
                  <Box maxW={200}>
                    <Heading as='h6' size='xs'>Headline Analyzer</Heading>
                    <Text fontSize='xs'>Write headline that derive trafic, sheres & search results.</Text>
                  </Box>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link as={ReactLink} to='/login' display='flex' gap={2}>
                  <Image h='30px' w='30px' src="https://image.shutterstock.com/image-vector/email-icon-envelope-message-illustration-260nw-1722876658.jpg" />
                  <Box maxW={200}>
                    <Heading as='h6' size='xs'>Email Subject Line Tester</Heading>
                    <Text fontSize='xs'>Write email subject line that drives more opens, clicks and conversions.</Text>
                  </Box>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link as={ReactLink} to='/login' display='flex' gap={2}>
                  <Image h='30px' w='30px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAEB6Fa72EYZTDIyyra2v_hFQWd2CDp1WkQ&usqp=CAU" />
                  <Box maxW={200}>
                    <Heading as='h6' size='xs'>Social Massage Optimizer</Heading>
                    <Text fontSize='xs'>Create powerful social massages that convert.</Text>
                  </Box>
                </Link>
              </MenuItem>
            </VStack>
            <VStack p={4} maxW={250} borderLeft='0.1px solid teal'>
              <Heading as='h6' color='gray' alignContent='left' size='xs'>LEARN
              </Heading>
              <MenuItem>
                <Link as={ReactLink} to='/login' display='flex' gap={2}>
                <Heading as='h6' alignContent='left' size='xs'>Marketing Blog</Heading>
                </Link>
              </MenuItem>
              <MenuItem>
              <Link as={ReactLink} to='/login' display='flex' gap={2}>
                <Heading as='h6' alignContent='left' size='xs'>CoSchedule Guide</Heading>
                </Link>
              </MenuItem>
              <MenuItem>
              <Link as={ReactLink} to='/login' display='flex' gap={2}>
                <Heading as='h6' alignContent='left' size='xs'>Agile Marketing Guide</Heading>
                </Link>
              </MenuItem>
              <MenuItem>
              <Link as={ReactLink} to='/login' display='flex' gap={2}>
                <Heading as='h6' alignContent='left' size='xs'>Marketing Dictionary</Heading>
                </Link>
              </MenuItem>
              <Heading as='h6' color='gray' alignContent='left' size='xs'>BOOKS </Heading>
              <MenuItem>
              <Link as={ReactLink} to='/login' display='flex' gap={2}>
                <Heading as='h6' alignContent='left' size='xs'>10X Marketing Dictionary</Heading>
                </Link>
              </MenuItem>
              <MenuItem>
              <Link as={ReactLink} to='/login' display='flex' gap={2}>
                <Heading as='h6' alignContent='left' size='xs'>Get Started with Agile Marketing</Heading>
                </Link>
              </MenuItem>
            </VStack>
          </Flex>
        </MenuList>
      </Menu>
    </div>
  )
}

export default Resources