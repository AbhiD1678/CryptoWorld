import { Text, Box, Image, VStack, HStack, Button, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import bg from '../Assets/btc.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  const bgColor = useColorModeValue('blackAlpha.900', 'gray.900')
  const textColor = useColorModeValue('whiteAlpha.900', 'white')
  const accentColor = useColorModeValue('yellow.400', 'yellow.300')

  return (
    <Box bgColor={bgColor} w={'full'} minH={'100vh'} position="relative" overflow="hidden">
      {/* Aesthetic Background Image */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.7, 0.6]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image 
          w={'full'} 
          h={'full'} 
          objectFit={'contain'} 
          src={bg} 
          filter={'grayscale(0.7) brightness(0.3) contrast(1.1)'} 
          opacity={0.6}
        />
      </motion.div>

      {/* Elegant Gradient Overlay */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)',
          zIndex: 1
        }}
        animate={{
          opacity: [0.7, 0.8, 0.7]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Floating Elements */}
      <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex={1} overflow="hidden">
        {/* Elegant Bitcoin Symbol */}
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            fontSize: '120px',
            color: 'rgba(255, 193, 7, 0.08)',
            fontWeight: 'bold',
            fontFamily: 'monospace'
          }}
          animate={{
            opacity: [0.05, 0.12, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ₿
        </motion.div>

        {/* Subtle Glow Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255, 193, 7, 0.03) 0%, transparent 70%)',
              borderRadius: '50%',
              top: `${20 + i * 25}%`,
              left: `${10 + i * 20}%`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.02, 0.06, 0.02]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Minimal Grid Lines */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          opacity="0.03"
          backgroundImage="linear-gradient(rgba(255, 193, 7, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 193, 7, 0.1) 1px, transparent 1px)"
          backgroundSize="50px 50px"
        />

        {/* Elegant Corner Accents */}
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '2px',
            height: '60px',
            background: 'linear-gradient(to bottom, rgba(255, 193, 7, 0.3), transparent)'
          }}
          animate={{
            height: [60, 80, 60],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '60px',
            height: '2px',
            background: 'linear-gradient(to right, rgba(255, 193, 7, 0.3), transparent)'
          }}
          animate={{
            width: [60, 80, 60],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Bottom Right Corner Accent */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '15%',
            width: '3px',
            height: '40px',
            background: 'linear-gradient(to top, rgba(255, 193, 7, 0.2), transparent)'
          }}
          animate={{
            height: [40, 60, 40],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </Box>

      {/* Content Overlay */}
      <Container maxW="container.xl" position="relative" zIndex={10} minH="100vh" display="flex" alignItems="center" py={20}>
        <VStack spacing={[6, 8, 10]} textAlign="center" w="full" px={4}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Heading 
              fontSize={['3xl', '5xl', '7xl']}
              fontWeight={'bold'}
              color={textColor}
              textShadow="2px 2px 4px rgba(0,0,0,0.8)"
              mb={4}
              lineHeight="1.1"
            >
              Welcome to{' '}
              <Text as="span" color={accentColor}>
                CryptoWorld
              </Text>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Text 
              fontSize={['md', 'lg', 'xl']}
              color={'whiteAlpha.800'}
              maxW="600px"
              lineHeight="1.6"
              mb={8}
              px={4}
            >
              Track real-time cryptocurrency prices, explore market trends, and stay updated with the latest blockchain developments.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <HStack spacing={[4, 6]} flexWrap="wrap" justifyContent="center">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  as={Link} 
                  to="/coins"
                  size={["md", "lg"]}
                  colorScheme="yellow" 
                  variant="solid"
                  px={[6, 8]}
                  py={[4, 6]}
                  fontSize={["md", "lg"]}
                  fontWeight="bold"
                  _hover={{ boxShadow: 'lg' }}
                  transition="all 0.3s"
                >
                  Explore Coins
                </Button>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  as={Link} 
                  to="/exchanges"
                  size={["md", "lg"]}
                  variant="outline" 
                  colorScheme="yellow"
                  px={[6, 8]}
                  py={[4, 6]}
                  fontSize={["md", "lg"]}
                  fontWeight="bold"
                  _hover={{ boxShadow: 'lg' }}
                  transition="all 0.3s"
                >
                  View Exchanges
                </Button>
              </motion.div>
            </HStack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <HStack spacing={8} mt={12} color="whiteAlpha.600">
              <VStack>
                <Text fontSize="2xl" fontWeight="bold" color={accentColor}>1000+</Text>
                <Text fontSize="sm">Cryptocurrencies</Text>
              </VStack>
              <VStack>
                <Text fontSize="2xl" fontWeight="bold" color={accentColor}>Real-time</Text>
                <Text fontSize="sm">Price Updates</Text>
              </VStack>
              <VStack>
                <Text fontSize="2xl" fontWeight="bold" color={accentColor}>24/7</Text>
                <Text fontSize="sm">Market Data</Text>
              </VStack>
            </HStack>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home