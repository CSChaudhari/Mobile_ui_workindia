import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a')
      .then(response => {
        setItems(response.data); // Assuming the response is an array of items
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <img src={item.image_url} alt={item.item} style={{ width: '100px', height: '100px' }} />
            <div>
              <h3>{item.item}</h3>
              <p>Price: ₹ {item.price}</p> {/* Display price in rupees */}
              <p>Shipping Method: {item.shipping_method || 'Not specified'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
