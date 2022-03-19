import React from 'react'


const Details = ({data}) => {
  return (
    <div className='box'>
      
          <h3>User Name : <span className='font-normal'>{data?.name}</span> </h3>
          <h3>Your Horoscope sign : <span className='font-normal' style={{textTransform: 'capitalize'} } >{data?.sign}</span> </h3>
          <h3>Your Date range : <span className='font-normal'>{data?.date_range}</span> </h3>
          <h3>Description : <span className='font-normal'>{data?.description}</span></h3>
        
    </div>
  )
}

export default Details 