import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer className="footer-section pt-5">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fa-solid fa-location-dot"></i>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>Shop No 123, Block C, Joahr Twon, Lahore</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>+923245521001</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>abubakarnangri@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <Link to={'/'}><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" /></Link>
                                </div>
                                <div className="footer-text">
                                    <p>Welcome to BunnyBites - where go-to for cute companions and gourmet rabbit meat. Find joy in furry friendships
                                        and elevate your culinary adventures with our premium selection. Delight awaits at BunnyBites! 🐇🍴
                                    </p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <Link to="facebook.com"><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                    <Link to="twitter.com"><i className="fab fa-twitter twitter-bg"></i></Link>
                                    <Link to="google.com"><i className="fab fa-google-plus-g google-bg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Categories</Link></li>
                                    <li><Link to="#">Blog</Link></li>
                                    <li><Link to="#">Contact</Link></li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text text-center">
                                <p className='text-center'>Copyright &copy; 2018, All Right Reserved <Link to="https://codepen.io/anupkumar92/">Farming Product</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
