import { Text,Box,Image } from '@chakra-ui/react'
import React from 'react'
import bg from '../Assets/cryptocurrency-3409656_1280.jpg'


const Home = () => {
  return (
    <Box bgColor={'#000000'} w={'full'} h={'85vh'}>
      <Image w={'full'} h={'full'} objectFit={'contain'} src={bg} filter={'blackAlpha.800'} />

      <Text fontSize={'6xl'}
      textAlign={'center'}
      fontWeight={'thin'}
      color={'whiteAlpha.700'}
      mt={'-20'}
    >
      CryptoWorld
    </Text>
    </Box>
  )
}

export default Home