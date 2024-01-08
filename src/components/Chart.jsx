import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend)

const Chart = ({arr=[],currency,days}) => {
    const price =[1,2,3]
    const date=['12/2/22','23/2/24','32/4/54']
    const data={

    }

  return( 
  <Line 
    options={{
        responsive:true
  }}
  data={{
    labels:date,
    datasets:[{
        label:`Price in ${currency}`,
        data:price,borderCOlor:'rgb(225,99,132)',
        backgroundColor:'rgba(255,99,132,0.5)'
    }]
  
  }}/>
  )
}


export default Chart