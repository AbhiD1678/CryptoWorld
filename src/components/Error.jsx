import { Alert, AlertIcon, VStack, Text, Button, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const Error = ({ message, onRetry, isRateLimit = false }) => {
  const bgColor = useColorModeValue('red.50', 'red.900')
  const textColor = useColorModeValue('red.800', 'red.200')
  const accentColor = useColorModeValue('yellow.500', 'yellow.300')
  
  // Move all hooks to the top level
  const rateLimitBgColor = useColorModeValue('orange.50', 'orange.900')
  const rateLimitTextColor = useColorModeValue('orange.800', 'orange.200')
  const tipTextColor = useColorModeValue('orange.600', 'orange.300')

  return (
    <VStack h='90vh' justifyContent={'center'} spacing={6} p={8}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Alert 
          status={isRateLimit ? 'warning' : 'error'} 
          bg={isRateLimit ? rateLimitBgColor : bgColor}
          color={isRateLimit ? rateLimitTextColor : textColor}
          borderRadius="lg"
          p={6}
          maxW="500px"
          textAlign="center"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <AlertIcon boxSize="40px" mb={4} />
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            {isRateLimit ? 'API Rate Limit Reached' : 'Oops! Something went wrong'}
          </Text>
          <Text fontSize="md" mb={4}>
            {isRateLimit 
              ? "We've reached the API call limit (5-15 calls per minute). Please refresh the page after 1 minute to continue."
              : message || "We're having trouble loading the data. Please try again."
            }
          </Text>
          {isRateLimit ? (
            <VStack spacing={3}>
              <Text fontSize="sm" color={tipTextColor}>
                💡 Tip: Wait 1 minute before refreshing
              </Text>
              <Button 
                colorScheme="orange" 
                variant="outline"
                onClick={() => window.location.reload()}
                _hover={{ bg: 'orange.100' }}
              >
                Refresh Page
              </Button>
            </VStack>
          ) : onRetry && (
            <Button 
              colorScheme="red" 
              variant="outline"
              onClick={onRetry}
              _hover={{ bg: 'red.100' }}
            >
              Try Again
            </Button>
          )}
        </Alert>
      </motion.div>
    </VStack>
  )
}

export default Error