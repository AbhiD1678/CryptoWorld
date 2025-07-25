import { Badge, Box, Button, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Loader from './Loader'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { server } from '..'
import Error from './Error'
import Chart from './Chart'










const CoinDetails = () => {
  const [coins,setCoins]=useState([])
  const [loading,setLoading]=useState(true) /*So we are making a loading component to cover up for the time taken for fetching and that is the reason why we are making this variable */
  const [error,setError]=useState(false)
  const [isRateLimit, setIsRateLimit] = useState(false)
  const [page,setPage]=useState(1);
  const [currency,setCurrency]=useState('inr');
  const [days,setDays]=useState("24h")
  const [chartArray,setChartArray]=useState([])

  const params=useParams()

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
  const btns=['24h','7d','14d','30d','60d','200d','1y','max']

  const switchChartStats=(key)=>{
    switch (key) {
      case '24h':
        setDays('24h')
      
        break;
      case '7d':
        setDays('7d')
  
        break;
      case '14d':
        setDays('14d')

        break;
      case '30d':
        setDays('30d')
  
        break;
      case '60d':
        setDays('60d')

        break;
      case '200d':
        setDays('200d')
        
        break;  
      case '1y':
        setDays('365d')
   
        break;
      case 'max':
        setDays('max')
 
        break;
      default:
        setDays('24h')
        break;
    }


  }
  useEffect(()=>{

    
    const fetchCoins = async()=>{
      try{
        setError(false);
        setIsRateLimit(false);
        const {data}=await axios.get(`${server}/coins/${params.id}`);

        const {data:chartData}=await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)
        
        setCoins(data)
        setChartArray(chartData.prices)
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
    
  },[params.id,currency,days])
  if (isRateLimit) return <Error isRateLimit={true} />
  if (error) return <Error message={'Error while Fetching Coin Detail'} />

  return( 
  <Container maxW={'container.xl'}>
      { 
      loading ? 
      <Loader /> : 
      (
      <>
        <Box width={'full'} borderWidth={1}>
          <Chart arr={chartArray} currency={currencySymbol} days={days}/>
        </Box>
        <HStack p='4' wrap={'wrap'}>
          {
            btns.map((i)=>(
              <Button key={i}  onClick={()=>switchChartStats(i)}>
                {i}
              </Button>
            ))
          }


        </HStack>
      <RadioGroup value={currency} onChange={setCurrency} p={'8'} justifyContent={'space-between'}>
      <HStack spacing={'4'} wrap="wrap" justify="center">
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
      <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>
        <Text fontSize={'small'} alignSelf='center' opacity={'0.7'}>
          Last Updated on {Date(coins.market_data.last_updated).split("G")[0]}

        </Text>
        <Image src={coins.image.large} w={'16'} h={'16'}  objectFit={'contain'}/>
      <Stat>
        <StatLabel>
          {coins.name}
        </StatLabel>
        <StatNumber>
          {currencySymbol}
          {coins.market_data.current_price[currency]}</StatNumber>
          <StatHelpText>
            <StatArrow 
            type={
              coins.market_data.price_change_percentage_24h > 0 
              ? 'increase'
              :'decrease'}/ >
              {coins.market_data.price_change_percentage_24h} %


          </StatHelpText>
      </Stat>
      <Badge
      fontSize={'2xl'}
      bgColor={'blackAlpha.800'}
      color={'white'}
      >
        {`#${coins.market_cap_rank}`}
      </Badge>
      <CustomBar high={`${currencySymbol}${coins.market_data.high_24h[currency]}`} low={`${currencySymbol}${coins.market_data.low_24h[currency]}`} />
      
      <Box w={'full'} p='4'>
        <Item title={'Max Supply'} value={coins.market_data.max_supply}/>
        <Item title={'Circulating Supply'} value={coins.market_data.max_supply}/>
        <Item title={'Market Cap'} value={`${currencySymbol}${coins.market_data.market_cap[currency]}`}/>
        <Item title={'All Time Low'} value={`${currencySymbol}${coins.market_data.atl[currency]}`}/>
        <Item title={'All Time High'} value={`${currencySymbol}${coins.market_data.ath[currency]}`}/>
      </Box>
      
      </VStack>
      </>
      )
      }

    </Container>
  )  
}


const Item=({title,value})=>(
  <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
    <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>{title}</Text>
    <Text>{value}</Text>
  </HStack>

)
const CustomBar=({high,low})=>(
  <VStack w={'full'}>
    <Progress value={50} colorScheme={'teal'} w={'full'} />
    <HStack justifyContent={'space-between'} w={'full'}>
      <Badge children={low} colorScheme={'red'} />
      <Text fontSize={'small'}>24H Range</Text>
      <Badge children={high} colorScheme={'green'} />
    </HStack>

  </VStack>
)
export default CoinDetails