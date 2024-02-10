import React, { useState } from 'react'
import CSS from './TitleSection.module.css'
import img from '../../../images/rabbit.jpg'

const TitleSection = () => {
    const [searchValue,setSearchvalue] = useState('');
    const handleSearch = (event) =>{
      event.defaultPrevented();
  
    }
    const handleInputdata = (event) => {
      setSearchvalue(event.target.value);
    }
    return (
      <div >
        <div className={`${CSS.main} container`}>
          <div className={CSS['main-data']}>
            <h2 className={CSS['main-title']}>The Best place to buy fresh and organic Rabbit and its Meat</h2>
            <h6 className={CSS['main-subtitle']}>Shop by category, brand or products on sale!</h6>
            <from onSubmit={handleSearch}>
              <input type='text' className={CSS['input-field']} onChange={handleInputdata} value={searchValue} placeholder='What are you looking for?' spellCheck='true' />
              <i class={` ${CSS['serach-icon']} fa-solid fa-magnifying-glass`}></i>
              <button type='submit' className={CSS['search-btn']}>Search</button>
            </from>
          </div>
          <div className={CSS['div-rabbit-img']}>
            <img src={img} alt='Rabbit Pic' class={CSS['main-rabbit-img']}/>
          </div>
        </div>
      </div>
  )
}

export default TitleSection