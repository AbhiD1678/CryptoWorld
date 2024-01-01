import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import {Container, HStack} from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import Loader from './Loader'

const Exchanges = () => {

  const [exchanges,setExchanges]=useState([])
  const [loading,setLoading]=useState(true) /*So we are making a loading component to cover up for the time taken for fetching and that is the reason why we are making this variable */


  useEffect(()=>{

    const fetchExchanges = async()=>{
      const {data}=await axios.get(`${server}/exchanges?`);

      setExchanges(data)
      setLoading(false)
    };
    fetchExchanges()
    
  },[])

  return  <Container maxW={'cointainer.xl'}>
    {loading ? <Loader/>:<>
    <HStack wrap={"wrap"}>

      {exchanges.map((i)=>(
        <ExchangeCard />  /*For maping all the elements into one format */

      ))}
    </HStack>
    
    </>}


  </Container>
  
}

const ExchangeCard=()=>(
  <a>
    
  </a>

)

export default Exchanges