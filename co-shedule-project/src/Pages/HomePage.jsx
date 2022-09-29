import React from 'react'
import { Box, Container, Heading, Text, Link, Button, Image, SimpleGrid, List, ListItem, ListIcon } from '@chakra-ui/react'
import { FaAccessibleIcon, FaCheck, CheckIcon } from '@chakra-ui/icons'
import { Link as ReactLink } from 'react-router-dom'
const HomePage = () => {
  return (
    <Container maxW='80%'>
      <Box maxW='70%' m='auto' mt={20} >
        <Heading as='h1'>Organize All Of Your Marketing In One Place. From Any Place.</Heading>
        <Text fontSize='md'>Get more done in less time with the only work management software for marketers.</Text>
        <Button colorScheme='red' mt={10}>
          <Link as={ReactLink} to='/login' display='flex' gap={2}>Get Started Free</Link>
        </Button>
      </Box>
      <Box>
        <Image src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=1200&q=75' alt='' />
      </Box>
      <Box mt={10}>
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
      <Box mt={20}>
        <Heading>
          Our Porducts
        </Heading>
        <SimpleGrid mt={10} columns={{ base: 1, sm: 1, md: 2 }} gap={4} p={2}>
          <Box borderRadius={5} boxShadow='dark-lg' minW={340} >
            <Box>
              <Image w='100%' h='120px' src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100' alt='' />
            </Box>
            <Box m='-30px 20px 20px'>
              <Image h='60px' boxShadow='dark-lg' w='60px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HqEoGA6PY3dWvni8a0Oll3Eef0dQkwvH5ufNOtHo3g&s' alt='' />
              <Heading  mt={5} as='h3'>Marketing Calendar</Heading>
              <Text fontSize='sm'>
                A calendar that helps you see, schedule, and share your marketing.
              </Text>
              <List mt={5} spacing={2}>
                <ListItem>
                  <ListIcon as={CheckIcon} color='green.500' />
                  See everything together in one place
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='green.500' />
                  Share your progress with higher-ups
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='green.500' />
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
            <Box m='-30px 20px 20px'>
              <Image h='60px' boxShadow='dark-lg' w='60px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkmWGsib0scgc9BFQ97Ivm2kueGxP39YI00TyF0Xgdg&s' alt='' />
              <Heading  mt={5} as='h3'>Marketing Suite</Heading>
              <Text fontSize='sm'>
              A family of agile marketing products to coordinate your team, projects, and process.
              </Text>
              <List mt={5} spacing={2}>
                <ListItem>
                  <ListIcon as={CheckIcon} color='green.500' />
                  Manage marketing requests
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='green.500' />
                  Eliminate content bottlenecks
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color='green.500' />
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
            <Box m='-30px 20px 20px'>
              <Image h='60px' boxShadow='dark-lg' w='60px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFf4vYwRJ8HfLpbQzQ6k4sYBBDOfbPMWr-r7Qf6Aj3A&s' alt='' />
              <Heading  mt={5} as='h3'>Headline Studio</Heading>
              <Text fontSize='sm'>
              Write better headlines that will boost your traffic.
              </Text>
              <List mt={5} spacing={2}>
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
              <Image w='100%' h='120px' src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100' alt='' />
            </Box>
            <Box m='-30px 20px 20px'>
              <Image h='60px' boxShadow='dark-lg' w='60px' src='https://coschedule.com/img/academy/ami-logo-color.svg' alt='' />
              <Heading  mt={5} as='h3'>Actionable Marketing Institute</Heading>
              <Text fontSize='sm'>
              Develop new marketing skills in 30 minutes (or less).
              </Text>
              <List mt={5} spacing={2}>
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
    </Container>
  )
}

export default HomePage