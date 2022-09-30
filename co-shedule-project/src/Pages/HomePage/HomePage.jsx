import React from 'react'
import { Box, Container, Heading, Text, Link, Button, Image, SimpleGrid, List, ListItem, ListIcon, Center, Divider } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { Link as ReactLink } from 'react-router-dom'
import Footer from './Footer'
const HomePage = () => {
  return (
    <Container maxW='100%'>
      <Box maxW='70%' m='auto' mt={20} >
        <Heading as='h1' fontSize="5xl">Organize All Of Your Marketing In One Place. From Any Place.</Heading>
        <Text fontSize='lg'>Get more done in less time with the only work management software for marketers.</Text>
        <Button colorScheme='red' mt={10}>
          <Link as={ReactLink} to='/login' display='flex' gap={2}>Get Started Free</Link>
        </Button>
      </Box>
      <Box>
        <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=1200&q=75' alt='' />
      </Box>
      <Box p={20} mt={10}>
        <Heading as='h2'>3000 marketers start their day with CoSchedule</Heading>
        <SimpleGrid columns={[1, 2, 3, 5]} mt={10} spacing='20px'>
          <Box p={2} height='80px'>
            <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=256&q=75' alt='' />
          </Box>
          <Box p={2} height='80px'>
            <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=256&q=75' alt='' />
          </Box>
          <Box p={2} height='80px'>
            <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=256&q=75' alt='' />
          </Box>
          <Box p={2} height='80px'>
            <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fvericast-logo2.webp&w=256&q=75' alt='' />
          </Box>
          <Box p={2} height='80px'>
            <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=256&q=75' alt='' />
          </Box>
          <Box p={2} height='80px'>
            <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=256&q=75' alt='' />
          </Box>
          <Box p={2} height='80px'>
            <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=384&q=75' alt='' />
          </Box>
          <Box p={2} height='80px'>
            <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=384&q=75' alt='' />
          </Box>

        </SimpleGrid>
      </Box>
      <Box p={20} m={10}>
        <Heading>
          Our Porducts
        </Heading>
        <SimpleGrid mt={10} columns={{ base: 1, md: 2 }} gap={4} p={2}>
          <Box borderRadius={5} boxShadow='dark-lg' minW={340} >
            <Box>
              <Image w='100%' h='120px' src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100' alt='' />
            </Box>
            <Box m='-70px 20px 20px' textAlign='left' p={10}>
              <Image h='60px' boxShadow='dark-lg' w='60px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HqEoGA6PY3dWvni8a0Oll3Eef0dQkwvH5ufNOtHo3g&s' alt='' />
              <Heading mt={10} as='h3' fontSize='2xl'>Marketing Calendar</Heading>
              <Text fontSize='sm'>
                A calendar that helps you see, schedule, and share your marketing.
              </Text>
              <List mt={5} spacing={2} fontSize='md'>
                <ListItem>
                  <ListIcon as={CheckIcon} color='orange.500' />
                  See everything together in one place
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='orange.500' />
                  Share your progress with higher-ups
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='orange.500' />
                  Show what your marketing is doing
                </ListItem>
              </List>
              <Button mt={5} as={Button} colorScheme='red' variant='solid'>
                <Link as={ReactLink} to='/'>Explore More</Link>
              </Button>
            </Box>
          </Box>
          <Box borderRadius={5} boxShadow='dark-lg' minW={340} >
            <Box>
              <Image w='100%' h='120px' src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fsuite-product-background.png&w=1920&q=100' alt='' />
            </Box>
            <Box  m='-70px 20px 20px' textAlign='left' p={10}>
              <Image h='60px' boxShadow='dark-lg' w='60px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkmWGsib0scgc9BFQ97Ivm2kueGxP39YI00TyF0Xgdg&s' alt='' />
              <Heading mt={10} as='h3' fontSize='2xl'>Marketing Suite</Heading>
              <Text fontSize='sm'>
                A family of agile marketing products to coordinate your team, projects, and process.
              </Text>
              <List mt={5} spacing={2} fontSize='md' >
                <ListItem>
                  <ListIcon as={CheckIcon} color='orange.500' />
                  Manage marketing requests
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='orange.500' />
                  Eliminate content bottlenecks
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='orange.500' />
                  Maximize resources to increase output
                </ListItem>
              </List>
              <Button mt={5} as={Button} colorScheme='red' variant='solid'>
                <Link as={ReactLink} to='/'>Explore More</Link>
              </Button>
            </Box>
          </Box>
          <Box borderRadius={5} boxShadow='dark-lg' minW={340} >
            <Box>
              <Image w='100%' h='120px' src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhs-product-background.png&w=1920&q=100' alt='' />
            </Box>
            <Box  m='-70px 20px 20px' textAlign='left' p={10}>
              <Image h='60px' boxShadow='dark-lg' w='60px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFf4vYwRJ8HfLpbQzQ6k4sYBBDOfbPMWr-r7Qf6Aj3A&s' alt='' />
              <Heading mt={10} as='h3' fontSize='2xl'>Headline Studio</Heading>
              <Text fontSize='sm'>
                Write better headlines that will boost your traffic.
              </Text>
              <List mt={5} spacing={2} fontSize='md'>
                <ListItem>
                  <ListIcon as={CheckIcon} color='blue.500' />
                  Score your headlines based on proven data
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='blue.500' />
                  Improve headlines with smart suggestions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='blue.500' />
                  Find the high-scoring words instantly
                </ListItem>
              </List>
              <Button mt={5} as={Button} colorScheme='blue' variant='solid'>
                <Link as={ReactLink} to='/'>Explore More</Link>
              </Button>
            </Box>
          </Box>
          <Box borderRadius={5} boxShadow='dark-lg' minW={340} >
            <Box>
              <Image w='100%' h='120px' src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fami-product-background.png&w=1920&q=100' alt='' />
            </Box>
            <Box m='-70px 20px 20px' textAlign='left' p={10}>
              <Image h='60px' boxShadow='dark-lg' w='60px' src='https://coschedule.com/img/academy/ami-logo-color.svg' alt='' />
              <Heading mt={10} as='h3' fontSize='2xl'>Actionable Marketing Institute</Heading>
              <Text fontSize='sm'>
                Develop new marketing skills in 30 minutes (or less).
              </Text>
              <List mt={5} spacing={2} fontSize='md'>
                <ListItem>
                  <ListIcon as={CheckIcon} color='purple' />
                  Improve your marketing with fluff-free training
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='purple' />
                  Spend less time learning & more time doing
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='purple' />
                  Learn from industry pros you trust
                </ListItem>
              </List>
              <Button mt={5} as={Button} colorScheme='purple' variant='solid'>
                <Link as={ReactLink} to='/'>Explore More</Link>
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box mt={20}>
        <Heading as='h2' fontSize='4xl'>
          <Center>
            The fastest growing marketing work management software
          </Center>
        </Heading>
        <Text fontSize='lg'>CoSchedule is trusted by 30,000 marketers in 100+ countries.</Text>
        <SimpleGrid  p={20} templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={4}>
          <Box _hover={{ boxShadow: 'dark-lg' }} p={10}>
            <Link as={ReactLink} to='/'>
              <Heading as='h2' fontSize='6xl' >Gartner</Heading>
              <Heading fontSize='lg' as='h4'>Magic Quadrant</Heading>
              <Center>
              <Divider borderWidth='2px' w={20} m={4} />
              </Center>
              <Text fontSize='md'>
              The Gartner Magic Quadrant™ for Content Marketing Platforms 2022
              </Text>
            </Link>
          </Box>
          <Box _hover={{ boxShadow: 'dark-lg' }} p={10}>
            <Link as={ReactLink} to='/'>
              <Center>
             <Image h='85px' w='147px' src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Finc-5000-logo.png&w=384&q=75' alt=''/>
              </Center>
              <Text pt={10} fontSize='md'>
              One Of The Fastest-Growing Marketing Platforms 3 Years In a Row
              </Text>
            </Link>
          </Box>
          <Box _hover={{ boxShadow: 'dark-lg' }} p={10}>
            <Link as={ReactLink} to='/'>
              <Center>
             <Image h='110px' w='84px' src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fg2crowd-badge.png&w=256&q=75' alt=''/>
              </Center>
              <Text pt={10} fontSize='md'>
              Awarded High Performer in 7 Product Categories
              </Text>
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
      <Box bg='red.300' p='70px 20px'  color='white'>
        <Heading as='h2'>Organize all of your marketing in one place</Heading>
        <Button mt={10} as={Button} colorScheme='white' color={'red.300'} variant='solid'>
        <Link as={ReactLink} to='/product-demo'>Get Started Free</Link>
        </Button>
      </Box>
      <Footer />
    </Container>
  )
}

export default HomePage