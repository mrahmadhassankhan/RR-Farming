import React from 'react'
import CSS from './Home.module.css'
import TitleSection from '../../components/Home/TitleSection/TitleSection'
import CategorySection from '../../components/Home/CategorySection/CategorySection'
import MainContent from '../../components/Home/MainContent'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Community from '../../components/Home/CommunitySection/Community'


const Home = () => {
  return (
    <div className={`${CSS['container-fluid']} container-fluid`}>
      <Header />
      <TitleSection />
      <CategorySection />
      <MainContent />
      <Community />
      <Footer />
    </div>
  )
}

export default Home
