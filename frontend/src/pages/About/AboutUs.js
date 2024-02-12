import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CSS from './AboutUs.module.css'
import img from '../../images/about.png'
import Loader from '../Loader/Loader'

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <Header />
            <div className={`${CSS['container-fluid']} container-fluid`}>
              <div className='container'>
                <h1 className={CSS['aboutus-title']}>About Us</h1>
                <div className={CSS['aboutus-container']}>
                  <div className={CSS['aboutus-img']}>
                    <img className={CSS['img']} src={img} alt='img' />
                  </div>
                  <div className={CSS['aboutus-details']}>
                    <p>
                      Welcome to RabbitDelight – your premium destination for exquisite rabbit meat. We take pride in sourcing the finest, ethically raised rabbits to deliver a delectable and healthy culinary experience to your table.
                    </p>
                    <p>
                      At RabbitDelight, we are committed to excellence, ensuring every purchase supports ethical and humane farming practices. Our focus on quality and sustainability guarantees that you receive the best-tasting, lean rabbit meat conveniently at your doorstep.
                    </p>
                    <p>
                      Explore our selection of carefully curated rabbit cuts and products online. Join us in redefining your culinary journey with RabbitDelight – where excellence meets exceptional flavor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutUs