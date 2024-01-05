import React from 'react'
import { Link } from 'react-router-dom'
import { VStack,Image,Heading,Text } from '@chakra-ui/react'

const CoinCard=({id,name,img,symbol,price,currencySymbol="₹"})=>(
    <Link to={`/coin/${id}` } > {/*We not using link to as this will be an external link so we have to use anchor tag instead of link to */}
    <VStack w={'52'}  shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'}  m={'4'}
    css={{
      "&:hover":{
        transform:"scale(1.1)"
      }
    }}
    
    >
      <Image src={img} w={'10'} h={'10'} objectFit={'contain'}
      alt={'exchange'}
      />
    <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
    <Heading size={'md'} noOfLines={1}>{price ?`${currencySymbol}${price}`:"NA"}</Heading>
    <Text noOfLines={1} >{name}</Text>
  
    </VStack>
  
    </Link>
  
  )
  

export default CoinCard