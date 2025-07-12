import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import {Container, HStack, VStack,Image,Text,Heading, Button, Input, InputGroup, InputLeftElement, Box, useColorModeValue} from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'
import CoinCard from './CoinCard'
import { RadioGroup,Radio } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Coins = () => {

  const [coins,setCoins]=useState([])
  const [loading,setLoading]=useState(true) /*So we are making a loading component to cover up for the time taken for fetching and that is the reason why we are making this variable */
  const [error,setError]=useState(false)
  const [isRateLimit, setIsRateLimit] = useState(false)
  const [page,setPage]=useState(1);
  const [currency,setCurrency]=useState('inr');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCoins, setFilteredCoins] = useState([]);

  const currencySymbols = {
    'inr': '₹',
    'usd': '$',
    'eur': '€',
    'gbp': '£',
    'jpy': '¥',
    'cad': 'C$',
    'aud': 'A$',
    'chf': 'CHF',
    'cny': '¥'
  }
  
  const currencySymbol = currencySymbols[currency] || '$'
  
  // Move hooks to the top level
  const bgColor = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.300', 'gray.600')

  const changePage=(page)=>{
    setPage(page);
    setLoading(true);
  }

  const btns=new Array(132).fill(1)
  
  // Filter coins based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCoins(coins);
    } else {
      const filtered = coins.filter(coin =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCoins(filtered);
    }
  }, [searchTerm, coins]);

  useEffect(()=>{

    const fetchCoins = async()=>{
      try{
        setError(false);
        setIsRateLimit(false);
        const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);

        setCoins(data)
        setFilteredCoins(data)
        setLoading(false)

      }catch(error){
        setLoading(false);
        // Check if it's a rate limit error (429 status code or specific error message)
        if (error.response?.status === 429 || 
            error.response?.data?.error?.includes('rate limit') ||
            error.message?.includes('rate limit') ||
            error.response?.status === 403) {
          setIsRateLimit(true);
        } else {
          setError(true);
        }
      }
    };
    fetchCoins()
    
  },[currency,page])
  if(error) return <Error message={"Error while fetching Coins"}/>
  if(isRateLimit) return <Error isRateLimit={true} />

  return( 
   <Container maxW={'cointainer.xl'}>
    {loading ? <Loader/>:<>
    <VStack spacing={6} p={8}>
      <RadioGroup value={currency} onChange={setCurrency} w="full">
        <HStack spacing={'4'} justify="center" wrap="wrap">
          <Radio value={'inr'}>INR</Radio>
          <Radio value={'usd'}>USD</Radio>
          <Radio value={'eur'}>EUR</Radio>
          <Radio value={'gbp'}>GBP</Radio>
          <Radio value={'jpy'}>JPY</Radio>
          <Radio value={'cad'}>CAD</Radio>
          <Radio value={'aud'}>AUD</Radio>
          <Radio value={'chf'}>CHF</Radio>
          <Radio value={'cny'}>CNY</Radio>
        </HStack>
      </RadioGroup>

      <InputGroup maxW="400px" mx="auto">
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.300' />
        </InputLeftElement>
        <Input
          placeholder="Search coins..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          bg={bgColor}
          borderColor={borderColor}
          _focus={{
            borderColor: 'yellow.400',
            boxShadow: '0 0 0 1px var(--chakra-colors-yellow-400)',
          }}
        />
      </InputGroup>
    </VStack>

    <HStack wrap={"wrap"} justifyContent={'space-evenly'}>

      {filteredCoins.map((i)=>(
        <CoinCard 
        id={i.id}
        key={i.id}
        name={i.name}
        price={i.current_price}
        img={i.image}
        symbol={i.symbol}
        currencySymbol={currencySymbol}
        priceChange24h={i.price_change_percentage_24h}
        marketCapRank={i.market_cap_rank}
        />

      ))}
    </HStack>
    <HStack w={'full'} overflowX={'auto'} p={'8'}>
      {
        btns.map((items,index)=>(
          <Button
          key={index}
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