import React from 'react'
import { Box, Flex, SimpleGrid, List, Heading, ListItem, Link, Image, Divider,VStack } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom"

const Footer = () => {
    return (
        <Box>
            <SimpleGrid mt={10} columns={{ base: 1, md: 2 }} templateColumns={{ base: '1fr', md: '1fr 2fr' }} gap={4} p={2}>
                <VStack order={{ base: 2, md: 1 }}>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07cEZ5wJoqGfCPJ1t0MDVSTRBagFtQssIabCrGxA&s' alt=''/>
                    <Link fontSize='sm' as={ReactLink} to='/login'>Sign Up</Link>
                    <Link fontSize='sm' as={ReactLink} to='/product-demo'>Request A Demo</Link>
                    <Link fontSize='sm' as={ReactLink} to='/login'>Sign In</Link>
                    <SimpleGrid columns={3} gap={2}>
                        <Image  h='50px' w='50px' src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fg2crowd-badge.png&w=96&q=75' alt=''/>
                        <Image  h='50px' w='50px' src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fgartner-badge.png&w=128&q=75' alt=''/>
                        <Image  h='50px' w='50px' src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-badge.png&w=96&q=75' alt=''/>
                    </SimpleGrid>
                </VStack>
                <SimpleGrid order={{ base: 1, md: 2 }} columns={{ base: 2, lg: 3 }} spacing={8} justifyContent='left'>
                    <Box textAlign='left'>
                        <Heading as='h4' pb={3} fontSize='lg'>PRODUCTS</Heading>
                        <List spacing={3} fontSize='sm'>
                            <ListItem>
                                <Link as={ReactLink}>
                                    <Flex gap={1} alignItems="center">
                                        <Image h='13px' w='13px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HqEoGA6PY3dWvni8a0Oll3Eef0dQkwvH5ufNOtHo3g&s" alt="" />
                                        Marketing Calendar
                                    </Flex>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    <Flex gap={1} alignItems="center">
                                        <Image h='13px' w='13px' src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=48&q=75" alt="" />
                                        Marketing Suite
                                    </Flex>
                                </Link>
                            </ListItem>
                            <Divider w={40} />
                            <ListItem>
                                <Link as={ReactLink}>
                                    <Flex gap={1} alignItems="center">
                                        <Image h='13px' w='13px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFf4vYwRJ8HfLpbQzQ6k4sYBBDOfbPMWr-r7Qf6Aj3A&s" alt="" />
                                        Headline Studio
                                    </Flex>
                                </Link>
                            </ListItem>
                            <Divider w={40} />
                            <ListItem>
                                <Link as={ReactLink}>
                                    <Flex gap={1} alignItems="center">
                                        <Image h='13px' w='13px' src="https://coschedule.com/img/academy/ami-logo-color.svg" alt="" />
                                        Actionable Marketing Institute
                                    </Flex>
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                    <Box textAlign='left'>
                        <Heading as='h4' pb={3} fontSize='lg'>WHY COSCHEDULE</Heading>
                        <List spacing={3} fontSize='sm'>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Customer Stories
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Support
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Product Announcements
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Pricing
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                    <Box textAlign='left'>
                        <Heading as='h4' pb={3} fontSize='lg'>COMPANY</Heading>
                        <List spacing={3} fontSize='sm'>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Customer Stories
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Support
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Product Announcements
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Pricing
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                    <Box textAlign='left'>
                        <Heading as='h4' pb={3} fontSize='lg'>RESOURCES</Heading>
                        <List spacing={3} fontSize='sm'>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Marketing Blog
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    CoSchedule Guide
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Marketing Strategy Report
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Actionable Marketing Podcast
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Agile Marketing Guide
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    10x Marketing Formula Book
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Get Started With Agile Marketing Book
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                    <Box textAlign='left'>
                        <Heading as='h4' pb={3} fontSize='lg'>TOPIC LIBRARIES</Heading>
                        <List spacing={3} fontSize='sm'>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Marketing
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Marketing Ideas
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Marketing Strategy
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Content Marketing
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                    <Box textAlign='left'>
                        <Heading as='h4' pb={3} fontSize='lg'>TOOLS</Heading>
                        <List spacing={3} fontSize='sm'>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Headline Analyzer
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Email Subject Line Tester
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Social Message Optimizer
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link as={ReactLink}>
                                    Marketing Dictionary
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                </SimpleGrid>
            </SimpleGrid>
        </Box>
    )
}

export default Footer