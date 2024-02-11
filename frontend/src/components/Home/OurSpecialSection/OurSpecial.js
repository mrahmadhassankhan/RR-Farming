import React from 'react'
import CSS from './OurSpecial.module.css'
import OurSpecialCard from './OurSpecialCard/OurSpecialCard'
import rabbit1 from '../TrendProductSection/images/rabbit2.jpg'
import rabbitmeat1 from '../TrendProductSection/images/rabbitmeat1.jpg'

const OurSpecial = () => {
  const OurSpecial = [{
    title:"Rabbit Belgian",
    subtitle:'Buy fresh rabbit meat and more',
    button:"Shop Now",
    img:rabbit1
  },
  {
    title:"Flemish Rabbit Meat",
    subtitle:'Tender and flavorful rabbit meat',
    button:"Shop Now",
    img:rabbitmeat1
}]
  return (
    <div>
      <div className={CSS['special-div']}>
        <p className={CSS['special-title']}>Our Specialties</p>
      </div>
      {OurSpecial.map((item,index)=>(
        <OurSpecialCard key={index} title={item.title} subtitle={item.subtitle} button={item.button} img={item.img}/>
      ))}
    </div>
  )
}

export default OurSpecial