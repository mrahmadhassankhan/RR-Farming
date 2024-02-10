import React from 'react'
import CSS from './SpecialSection.module.css'
import specialOfferMeat from '../../../images/specialoffer-meat.png'
import specialOfferRabbit from '../../../images/specioffer-rabbit.png'
import DiscountTimer from './DiscountTimer/DiscountTimer'
import Offer from './Offer/Offer'

const SpecialOfferSection = () => {
  return (
    <div>
      <div className={CSS['special-div']}>
        <p className={CSS['special-title']}>Special Offer</p>
      </div>
      <Offer img={specialOfferMeat} title={'Rabbit Meat'} discount={'30'} button={'Shop Now'}/>
      <Offer img={specialOfferRabbit} title={'Rabbit'} discount={'20'} button={'Shop Now'}/>
      <DiscountTimer/>
    </div>
  )
}

export default SpecialOfferSection