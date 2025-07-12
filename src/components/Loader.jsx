import { VStack, Box, Spinner, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  const textColor = useColorModeValue('gray.600', 'whiteAlpha.700')
  const spinnerColor = useColorModeValue('yellow.400', 'yellow.300')

  return (
    <VStack h='90vh' justifyContent={'center'} spacing={6}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Box transform={'scale(2)'}>
          <Spinner 
            size={'xl'} 
            color={spinnerColor}
            thickness="4px"
            speed="0.65s"
          />
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Text color={textColor} fontSize="lg" fontWeight="medium">
          Loading cryptocurrency data...
        </Text>
      </motion.div>
    </VStack>
  )
}

export default Loader