import { Menu, MenuButton, Link, MenuItem, MenuList, VStack, Button, useDisclosure, Flex, Image, Heading, Text, Box } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'

const WhyCoSchedule = ({ name }) => {
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
                            <MenuItem>
                                <Link as={ReactLink} to='/login' display='flex' gap={2}>
                                    <Box maxW={200}>
                                        <Heading as='h6' size='xs'>Customer Stories</Heading>
                                        <Text fontSize='xs'>See how CoSchedule customers have found success.</Text>
                                    </Box>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link as={ReactLink} to='/login' display='flex' gap={2}>
                                    <Box maxW={200}>
                                        <Heading as='h6' size='xs'>Build your case for CoSchedule</Heading>
                                        <Text fontSize='xs'>Get your customer ROI report & see what your team could save by swiching to CoSchedule</Text>
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

export default WhyCoSchedule