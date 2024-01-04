import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import {Container, HStack, VStack,Image,Text,Heading} from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'

const Coins = () => {

  const [coins,setCoins]=useState([])
  const [loading,setLoading]=useState(true) /*So we are making a loading component to cover up for the time taken for fetching and that is the reason why we are making this variable */
  const [error,setError]=useState(false)
  const [page,setPage]=useState(1);
  const [currency,setCurrency]=useState('inr');

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

  return  <Container maxW={'cointainer.xl'}>
    {loading ? <Loader/>:<>
    <HStack wrap={"wrap"}>

      {coins.map((i)=>(
        <ExchangeCard 
        key={i.id}
        name={i.name}
        img={i.image}
        rank={i.trust_score_rank}
        url={i.url}

        />  /*For maping all the elements into one format */

      ))}
    </HStack>
    
    </>}


  </Container>
  
}



export default Coins