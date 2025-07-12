import React from 'react'
import { Box, VStack, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('yellow.400', 'yellow.300')

  return (
    <Box 
      minH="100vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <VStack spacing={8} textAlign="center" p={8}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Heading 
            fontSize={['6xl', '8xl', '9xl']} 
            color={accentColor}
            fontWeight="bold"
            mb={4}
          >
            404
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Heading 
            fontSize={['2xl', '3xl']} 
            color={textColor}
            mb={4}
          >
            Page Not Found
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Text 
            fontSize="lg" 
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="500px"
            mb={8}
          >
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <VStack spacing={4}>
            <Button 
              as={Link} 
              to="/"
              size="lg" 
              colorScheme="yellow" 
              variant="solid"
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="bold"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
              transition="all 0.3s"
            >
              Go Home
            </Button>
            
            <Button 
              as={Link} 
              to="/coins"
              size="md" 
              variant="outline" 
              colorScheme="yellow"
              px={6}
              py={4}
              _hover={{ transform: 'translateY(-1px)', boxShadow: 'md' }}
              transition="all 0.3s"
            >
              Browse Coins
            </Button>
          </VStack>
        </motion.div>
      </VStack>
    </Box>
  )
}

export default NotFound 