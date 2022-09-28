import { Menu, MenuButton, Link, MenuItem, MenuList, VStack, Button, useDisclosure, Flex, Image, Heading, Text, Box } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'

const Resources = ({ name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Menu isOpen={isOpen} onClose={onClose}>
        <MenuButton as={Button}  onMouseOver={onOpen} variant='link' _hover={{ color: '#d4765d' }} >
          {name}
        </MenuButton>
        <MenuList boxShadow='dark-lg' onMouseLeave={onClose}>
          <Flex >
            <VStack p={4}>
              <MenuItem>
                <Link as={ReactLink} to='/login' display='flex' gap={2}>
                  <Image h='30px' w='30px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HqEoGA6PY3dWvni8a0Oll3Eef0dQkwvH5ufNOtHo3g&s" />
                  <Box maxW={300}>
                    <Heading as='h6' size='xs'>Marketing Calendar</Heading>
                    <Text fontSize='xs'>A calendar that helps you to see, schedule and share your marketing.</Text>
                  </Box>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link as={ReactLink} to='/login' display='flex' gap={2}>
                  <Image h='30px' w='30px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkmWGsib0scgc9BFQ97Ivm2kueGxP39YI00TyF0Xgdg&s" />
                  <Box maxW={300}>
                    <Heading as='h6' size='xs'>Marketing Suite</Heading>
                    <Text fontSize='xs'>A family of agile marketing products to coordinate your team, projects and process</Text>
                  </Box>
                </Link>
              </MenuItem>
            </VStack>
            <VStack p={4}  maxW={250} borderLeft='0.1px solid teal'>
              <MenuItem>
              <Link as={ReactLink} to='/login' display='flex'  gap={2}>
                  <Image h='30px' w='30px' src="https://coschedule.com/img/headline-studio/hs-icon-blue.svg" />
                  <Box maxW={200}>
                    <Heading as='h6' size='xs'>Headline Studio</Heading>
                   
                  </Box>
                </Link>
              </MenuItem>
              <MenuItem>
              <Link as={ReactLink} to='/login' display='flex'   gap={2}>
                  <Image h='30px' w='30px' src="https://coschedule.com/img/academy/ami-logo-color.svg" />
                  <Box maxW={200}>
                    <Heading as='h6' size='xs'>Actionable Marketing Institute</Heading>
                 
                  </Box>
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