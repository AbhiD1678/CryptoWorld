import { Box, Container, HStack, Image, Radio, RadioGroup, Stat, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Loader from './Loader'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { server } from '..'
import Error from './Error'








const CoinDetails = () => {
  const [coins,setCoins]=useState([])
  const [loading,setLoading]=useState(true) /*So we are making a loading component to cover up for the time taken for fetching and that is the reason why we are making this variable */
  const [error,setError]=useState(false)
  const [page,setPage]=useState(1);
  const [currency,setCurrency]=useState('inr');

  const params=useParams()

  useEffect(()=>{

    
    const fetchCoins = async()=>{
      try{
      const {data}=await axios.get(`${server}/coins/${params.id}`);
      console.log(data)
      setCoins(data)
      setLoading(false)



      }catch(error){
        setLoading(false);
        setError(true);
      }

      
    };
    fetchCoins()
    
  },[params.id])
  if (error) return <Error message={'Error while Fetching Coin Detail'} />

  return( 
  <Container maxW={'container.xl'}>
      { 
      loading ? 
      <Loader /> : 
      (
      <>
        <Box width={'full'} borderWidth={1}>
          adas
        </Box>

      <RadioGroup value={currency} onChange={setCurrency} p={'8'} justifyContent={'space-between'}>
      <HStack spacing={'4'}>
        <Radio value={'inr'}  >INR</Radio>
        <Radio value={'usd'}  >USD</Radio>
        <Radio value={'eur'}  >EUR</Radio>

      </HStack>

      </RadioGroup>
      <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>
        <Text fontSize={'small'} alignSelf='center' opacity={'0.7'}>
          Last Updated on {Date(coins.market_data.last_updated).split("G")[0]}

        </Text>
        <Image src={coins.image.large} w={'16'} h={'16'}  objectFit={'contain'}/>
      <Stat>
        <StatLabel>
          {coins.name}
        </StatLabel>
        <StatNumber>asd</StatNumber>
      </Stat>
      
      </VStack>
      </>
      )
      }

    </Container>
  )  
}

export default CoinDetails