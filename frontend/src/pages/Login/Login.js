import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'

const Login = () => {
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
          Login
        </div>
      )}
    </div>

  )
}

export default Login