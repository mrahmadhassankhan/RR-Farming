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
      }, 1000);
    };

    fetchData();
    sessionStorage.removeItem("clickedItem");
  }, []);

  const Data = [{
    title: "Rabbit",
    price: 54
  }, {
    title: "Goat",
    price: 54
  }, {
    title: "Rabbit algera",
    price: 54
  }, {
    title: "Meat",
    price: 54
  }, {
    title: "Rabbit Meat",
    price: 54
  }, {
    title: "Fish",
    price: 54
  }, {
    title: "Cat",
    price: 54
  },]

  const HandleSearch = (searchValue) => {
    const founditem = Data.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return founditem;
  }

  return (
    <div className={`${CSS['container-fluid']} container-fluid`}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <TitleSection SearchItem={HandleSearch} />
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
