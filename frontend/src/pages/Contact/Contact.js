import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CSS from './Contact.module.css'
import img from '../../images/contact.png'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className={`${CSS['container-fluid']} container-fluid`}>
        <div className='container'>
          <h1 className={CSS['contact-title']}>Contact Us</h1>
          <div className={CSS['contactus-container']}>
            <div className={CSS['contactus-img']}>
              <img src={img} alt='img' width={'550px'} height={'550px'} />
            </div>
            <div className={CSS['contactus-details']}>
              <form onSubmit={"gjhgjhg"}>
                <div>
                  <div className={CSS['contactus-details']}>
                    <label htmlFor="fullName">Full Name <span>*</span></label>
                    <input type="text" id="fullName" name="fullName" />
                  </div>
                  <div>
                    <label htmlFor="fullName">Email Address <span>*</span></label>
                    <input type="text" id="fullName" name="fullName" />
                  </div>
                </div>
                <div>
                  <label htmlFor="fullName">Subject <span>*</span></label>
                  <input type="text" id="fullName" name="fullName" />
                </div>
                <div>
                  <label htmlFor="message">Message <span>*</span></label>
                  <textarea id="message" name="message"></textarea>
                </div>
                <button type='submit'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact