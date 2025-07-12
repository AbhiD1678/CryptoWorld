import { Button, HStack, Text, Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const bgColor = useColorModeValue('blackAlpha.900', 'gray.800')
  const textColor = useColorModeValue('white', 'white')

  return (
    <Box 
      as="header" 
      position="sticky" 
      top="0" 
      zIndex="1000" 
      bgColor={bgColor} 
      shadow="lg" 
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
    >
      <HStack p={'4'} justifyContent={'space-between'} maxW="1200px" mx="auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to='/'>
            <Text 
              fontSize="2xl" 
              fontWeight="bold" 
              color={textColor}
              _hover={{ color: 'yellow.400' }}
              transition="color 0.3s"
            >
              🚀 CryptoWorld
            </Text>
          </Link>
        </motion.div>

        <HStack spacing={6}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to='/'>
              <Button 
                variant={'ghost'} 
                color={textColor}
                _hover={{ bg: 'whiteAlpha.200' }}
                transition="all 0.3s"
              >
                Home
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to='/coins'>
              <Button 
                variant={'ghost'} 
                color={textColor}
                _hover={{ bg: 'whiteAlpha.200' }}
                transition="all 0.3s"
              >
                Coins
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to='/exchanges'>
              <Button 
                variant={'ghost'} 
                color={textColor}
                _hover={{ bg: 'whiteAlpha.200' }}
                transition="all 0.3s"
              >
                Exchanges
              </Button>
            </Link>
          </motion.div>
        </HStack>
      </HStack>
    </Box>
  )
}

export default Header