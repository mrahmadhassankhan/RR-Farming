import React from 'react'
import CSS from './Home.module.css'
import TitleSection from '../../components/Home/TitleSection/TitleSection'
import CategorySection from '../../components/Home/CategorySection/CategorySection'
import Grid from '../../components/Home/Grid'


const Home = () => {
  return (
    <div className={`${CSS['container-fluid']} container-fluid`}>
        <TitleSection/>
        <CategorySection/>
        <Grid/>
    </div>
    )
}

export default Home
