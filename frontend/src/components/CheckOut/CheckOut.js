import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Loader from '../../pages/Loader/Loader'

const CheckOut = () => {
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
                    <Header />
                    CheckOut
                    <Footer />
                </div>
            )}
        </div>

    )
}

export default CheckOut