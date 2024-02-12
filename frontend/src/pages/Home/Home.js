import React, { useEffect, useState } from 'react'
import CSS from './Home.module.css'
import TitleSection from '../../components/Home/TitleSection/TitleSection'
import CategorySection from '../../components/Home/CategorySection/CategorySection'
import MainContent from '../../components/Home/MainContent'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Community from '../../components/Home/CommunitySection/Community'
import Loader from '../Loader/Loader'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);

  return (
    <div className={`${CSS['container-fluid']} container-fluid`}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <TitleSection />
          <CategorySection />
          <MainContent />
          <Community />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Home
