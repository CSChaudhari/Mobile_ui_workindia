import React, { useState } from 'react';

const ItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to the API or update state
    console.log('Item added:', itemName, shippingMethod, price);
    // Resetting the form fields after submission
    setItemName('');
    setShippingMethod('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Item Name:</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
          required
        />
      </div>
      <div>
        <label>Shipping Method:</label>
        <select
          value={shippingMethod}
          onChange={(e) => setShippingMethod(e.target.value)}
          required
        >
          <option value="">Select shipping method</option>
          <option value="Standard">Same Day Shipping</option>
          <option value="Express">None</option>
        </select>
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
          required
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
