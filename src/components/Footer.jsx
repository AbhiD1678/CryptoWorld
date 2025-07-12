import { Avatar, Box, Stack, VStack, Text, HStack, Link, Icon, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import avatarSrc from '../Assets/pp3.jpeg'

const Footer = () => {
  const bgColor = useColorModeValue('blackAlpha.900', 'gray.900')
  const textColor = useColorModeValue('whiteAlpha.700', 'whiteAlpha.800')
  const accentColor = useColorModeValue('yellow.400', 'yellow.300')

  return (
    <Box 
      bgColor={bgColor} 
      color={textColor} 
    minH={'48'}
    px={'16'}
    py={['16','8']}
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Stack direction={['column','row']} h={'full'} alignItems={'center'} spacing={8}>
        <VStack w={'full'} alignItems={['center','flex-start']} spacing={4}>
          <Text fontWeight={'bold'} fontSize="lg" color={accentColor}>
            About CryptoWorld
          </Text>
                <Text fontSize={'sm'} letterSpacing={'widest'} 
            textAlign={['center','left']} maxW="400px">
            Your trusted platform for real-time cryptocurrency tracking, market analysis, and blockchain insights. 
            Stay informed with accurate data and comprehensive market coverage.
          </Text>
          <HStack spacing={4} mt={4}>
            <Text fontSize="xs" color="whiteAlpha.500">
              Data powered by CoinGecko API
            </Text>
            <Text fontSize="xs" color="whiteAlpha.500">
              • Real-time updates
            </Text>
            <Text fontSize="xs" color="whiteAlpha.500">
              • 1000+ cryptocurrencies
            </Text>
          </HStack>
                </VStack>
        
        <VStack spacing={4}>
          <Avatar boxSize={'20'} src={avatarSrc} border="2px solid" borderColor={accentColor} />
          <VStack spacing={1}>
            <Text fontWeight="bold" color={accentColor}>
              Developed By
            </Text>
            <Text fontSize="sm">
              Abhishek Dubey
            </Text>
            <Text fontSize="xs" color="whiteAlpha.500">
              Full Stack Developer
            </Text>
          </VStack>
            </VStack>
        </Stack>

      <Box mt={8} pt={4} borderTop="1px solid" borderColor="whiteAlpha.200">
        <Text fontSize="xs" textAlign="center" color="whiteAlpha.500">
          © 2024 CryptoWorld. All rights reserved. | 
          <Link href="#" color={accentColor} _hover={{ textDecoration: 'underline' }}> Privacy Policy</Link> | 
          <Link href="#" color={accentColor} _hover={{ textDecoration: 'underline' }}> Terms of Service</Link>
        </Text>
      </Box>
    </Box>
  )
}

export default Footer