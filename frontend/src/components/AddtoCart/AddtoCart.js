import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CSS from './AddtoCart.module.css'
import AddtocartCard from './AddtoCartCard/AddtocartCard'
import LikeSection from './YouLikeSection/LikeSection'

const AddtoCart = () => {
    return (
        <div className={`${CSS['container-fluid']} container-fluid`}>
            <Header />
            <AddtocartCard/>
            <LikeSection/>
            <Footer />
        </div>
    )
}

export default AddtoCart