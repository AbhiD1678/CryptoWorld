import React from 'react'
import { Link } from 'react-router-dom'
import { VStack, Image, Heading, Text, Box, Badge, HStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹", priceChange24h, marketCapRank }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'white')
  const priceColor = priceChange24h > 0 ? 'green.500' : priceChange24h < 0 ? 'red.500' : 'gray.500'

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/coin/${id}`}>
        <Box
          w={'64'}
          bg={bgColor}
          shadow={'xl'}
          p={'6'}
          borderRadius={'xl'}
          border="1px solid"
          borderColor={borderColor}
          transition={'all 0.3s'}
          m={'4'}
          _hover={{
            shadow: '2xl',
            borderColor: 'yellow.400'
          }}
          position="relative"
          overflow="hidden"
        >
          {/* Background gradient effect */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            height="2px"
            bgGradient="linear(to-r, yellow.400, orange.400)"
            opacity="0"
            _groupHover={{ opacity: 1 }}
            transition="opacity 0.3s"
          />

          <VStack spacing={4} align="stretch">
            <HStack justify="space-between" align="center">
              <Image 
                src={img} 
                w={'12'} 
                h={'12'} 
                objectFit={'contain'}
                alt={`${name} logo`}
                fallbackSrc="https://via.placeholder.com/48x48?text=?"
              />
              {marketCapRank && (
                <Badge 
                  colorScheme="yellow" 
                  variant="solid" 
                  fontSize="xs"
                  px={2}
                  py={1}
                  borderRadius="full"
                >
                  #{marketCapRank}
                </Badge>
              )}
            </HStack>

            <VStack spacing={2} align="stretch">
              <Heading size={'md'} noOfLines={1} color={textColor}>
                {symbol?.toUpperCase()}
              </Heading>
              <Text 
                fontSize="sm" 
                color="gray.500" 
                noOfLines={1}
                fontWeight="medium"
              >
                {name}
              </Text>
            </VStack>

            <VStack spacing={1} align="stretch">
              <Heading size={'lg'} noOfLines={1} color={textColor}>
                {price ? `${currencySymbol}${price.toLocaleString()}` : "N/A"}
              </Heading>
              {priceChange24h !== undefined && (
                <Text 
                  fontSize="sm" 
                  color={priceColor}
                  fontWeight="bold"
                >
                  {priceChange24h > 0 ? '+' : ''}{priceChange24h?.toFixed(2)}%
                </Text>
              )}
            </VStack>
          </VStack>
        </Box>
      </Link>
    </motion.div>
  )
}
  

export default CoinCard