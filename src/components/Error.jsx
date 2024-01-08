import { Alert } from '@chakra-ui/react'
import React from 'react'

const Error = ({message}) => {
  return (
    <Alert  status='error' postion={'fixed'} bottom={'4'} left={'50%'}
    transform={'translateX(-50%)'}
    w={'conntainer.lg'}
    >
      <AlertIcon/>
      {message}
    </Alert>
  )
}

export default Error