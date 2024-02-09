import React from 'react'
import styles from './Home.module.css'
import img from '../images/Rabbit-Meat.jpg'

const Home = () => {
  return (
    <div>
      <div className={styles.home}>
        <div>
          <h1 className={styles.h1}>The best place to buy fresh and organic farm products</h1>
          <h4 className={styles.h4}>Shop by category. brand or products on sale!</h4>
          <form>
            <input placeholder='What are you looking for?' className={styles.input} type='text' />
            <button className={styles.button}>Search</button>
          </form>
        </div>
          <img src={img} className={styles.rabbit} />
      </div>
    </div>
  )
}

export default Home
