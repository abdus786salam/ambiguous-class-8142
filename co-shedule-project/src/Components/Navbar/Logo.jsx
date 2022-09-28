import React from 'react'
import { Image , Link} from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

const Logo = () => {
  return (
    <Link as={ReactLink} to='/'>
        <Image w='180px' h='50px' src="https://coschedule.com/img/cos-logo-full-color.svg"/>
    </Link>
  )
}

export default Logo