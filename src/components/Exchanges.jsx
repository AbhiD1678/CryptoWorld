import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import {Container, HStack, VStack,Image,Text,Heading} from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'

const Exchanges = () => {

  const [exchanges,setExchanges]=useState([])
  const [loading,setLoading]=useState(true) /*So we are making a loading component to cover up for the time taken for fetching and that is the reason why we are making this variable */
  const [error,setError]=useState(false)

  useEffect(()=>{

    const fetchExchanges = async()=>{
      try{
      const {data}=await axios.get(`${server}/exchanges?`);

      setExchanges(data)
      setLoading(false)



      }catch(error){
        setLoading(false);
        setError(true);
      }

      
    };
    fetchExchanges()
    
  },[])
  if(error) return <Error message={"Error while fetching Exchanges"}/>

  return  <Container maxW={'cointainer.xl'}>
    {loading ? <Loader/>:<>
    <HStack wrap={"wrap"}>

      {exchanges.map((i)=>(
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

const ExchangeCard=({name,img,rank,url})=>(
  <a href={url } target={'blank'}> {/*We not using link to as this will be an external link so we have to use anchor tag instead of link to */}
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
  <Heading size={'md'} noOfLines={1}>{rank}</Heading>
  <Text noOfLines={1} >{name}</Text>

  </VStack>

  </a>

)

export default Exchanges