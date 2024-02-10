import React from 'react'
import CSS from './OurSpecial.module.css'
import OurSpecialCard from './OurSpecialCard/OurSpecialCard'
import rabbit1 from '../TrendProductSection/images/rabbit3.jpg'
import rabbitmeat1 from '../TrendProductSection/images/rabbitmeat2.jpg'

const OurSpecial = () => {
  return (
    <div>
      <div className={CSS['special-div']}>
        <p className={CSS['special-title']}>Special Offer</p>
      </div>
      <OurSpecialCard img={rabbit1}/>
      <OurSpecialCard img={rabbitmeat1}/>
    </div>
  )
}

export default OurSpecial