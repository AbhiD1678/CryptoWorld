import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import {Container, HStack, VStack,Image,Text,Heading, Button} from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'
import CoinCard from './CoinCard'
import { RadioGroup,Radio } from '@chakra-ui/react'

const Coins = () => {

  const [coins,setCoins]=useState([])
  const [loading,setLoading]=useState(true) /*So we are making a loading component to cover up for the time taken for fetching and that is the reason why we are making this variable */
  const [error,setError]=useState(false)
  const [page,setPage]=useState(1);
  const [currency,setCurrency]=useState('inr');

  const currencySymbol=currency==='inr'?'₹':currency==='eur'?'€':'$'

  const changePage=(page)=>{
    setPage(page);
    setLoading(true);
  }

  const btns=new Array(132).fill(1)
  useEffect(()=>{

    const fetchCoins = async()=>{
      try{
      const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);

      setCoins(data)
      setLoading(false)



      }catch(error){
        setLoading(false);
        setError(true);
      }

      
    };
    fetchCoins()
    
  },[currency,page])
  if(error) return <Error message={"Error while fetching Coins"}/>

  return( 
   <Container maxW={'cointainer.xl'}>
    {loading ? <Loader/>:<>
    <RadioGroup value={currency}>
      <HStack spacing={'4'}>
        <Radio value={'inr'}  >INR</Radio>
        <Radio value={'usd'}  >USD</Radio>
        <Radio value={'eur'}  >EUR</Radio>

      </HStack>

    </RadioGroup>
    <HStack wrap={"wrap"}>

      {coins.map((i)=>(
        <CoinCard 
        id={i.id}
        key={i.id}
        name={i.name}
        price={i.current_price}
        img={i.image}
        symbol={i.symbol}
        currencySymbol={currencySymbol}

        />  /*For maping all the elements into one format */

      ))}
    </HStack>
    <HStack w={'full'} overflowX={'auto'} p={'8'}>
      {
        btns.map((items,index)=>(
          <Button
          bgColor={'blackAlpha.900'}
          color={'white'}
          onClick={()=>changePage(index+1)}
        
          >
            {index+1}
          </Button>
        ))
      }
    </HStack>
    
    </>}


  </Container>
  )
  
}



export default Coins