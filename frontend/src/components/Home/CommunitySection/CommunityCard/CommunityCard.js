import React from 'react'
import CSS from './CommunityCard.module.css'
import img from '../../TrendProductSection/images/rabbit2.jpg'
import { Link } from 'react-router-dom'

function CommunityCard() {
  return (
    <div className={CSS['wrapper-grid']}>
      <div className={CSS['card-container']}>
        <div className={CSS['card-img']}>
          <img className={CSS['img']} src={img} alt='Rabbit' />
          <Link to={'/addtocart'} className={`${CSS['button-container']}`}>
            <button className={CSS['button']}>
              Join Community
            </button>
          </Link>
        </div>
        <div className={CSS['card-data-container']}>
          <h2 className={CSS['card-title']}>Discover the benefits of farming with us</h2>
          <p className={CSS['card-subtitle']}>learn and grow with us</p>
          <div className={CSS['card-user']}>
            <img className={CSS['card-user-img']} src={img} alt='Community' />
            <p className={CSS['card-user-name']}>Ali,</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CommunityCard