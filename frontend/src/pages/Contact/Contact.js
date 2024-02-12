import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CSS from './Contact.module.css';
import img from '../../images/contact.png';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', name, email, subject, message);
    // You can add your logic to send the data to the server or perform any other actions.
  };

  return (
    <div>
      <Header />
      <div className={`${CSS['container-fluid']} container-fluid`}>
        <div className='container'>
          <h1 className={CSS['contact-title']}>Contact Us</h1>
          <div className={CSS['contactus-container']}>
            <div className={CSS['contactus-img']}>
              <img src={img} alt='img' width={'100px'} height={'100px'} />
            </div>
            <div className={CSS['contactus-details']}>
              <form onSubmit={handleFormSubmit}>
                <div className={CSS['contactus-name_email-container']}>
                  <div className={CSS['contactus-name-container']}>
                    <label htmlFor="_fullName">Full Name<span>*</span></label>
                    <input
                      className={CSS['contactus-name']}
                      type="text"
                      id="_fullName"
                      name="_fullName"
                      onChange={handleName}
                      value={name}
                      placeholder={'Full Name'}
                      required
                    />
                  </div>
                  <div className={CSS['contactus-name-container']}>
                    <label htmlFor="_email">Email Address<span>*</span></label>
                    <input
                      className={CSS['contactus-email']}
                      type="text"
                      id="_email"
                      name="_email"
                      onChange={handleEmail}
                      value={email}
                      placeholder={'Email Address'}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="_subject">Subject<span>*</span></label>
                  <input
                    type="text"
                    id="_subject"
                    name="_subject"
                    onChange={handleSubject}
                    value={subject}
                    placeholder={'Subject'}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="_message">Message<span>*</span></label>
                  <textarea
                    id="_message"
                    name="_message"
                    onChange={handleMessage}
                    value={message}
                    placeholder={'Message'}
                    required
                  ></textarea>
                </div>
                <button type='submit'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
