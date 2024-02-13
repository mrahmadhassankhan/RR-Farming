import React, { useState, useEffect } from 'react';

const SearchShow = () => {
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('searchResults')) || {};
    const { foundItems: items, searchValue } = storedData;
    setFoundItems(items || [])

    const timerId = setTimeout(() => {
        localStorage.removeItem('searchResults');
      }, 5000);
      return () => clearTimeout(timerId);
  }, []);
  return (
    <div>
      {foundItems.map((value, index) => (
        <div key={index}>
          <p>{value.title}</p>
          <p>{value.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchShow;
