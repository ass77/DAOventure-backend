import React, { useState } from 'react';
import './App.css';

function App() {

  const [sales, setSales] = useState([]);
  const [price, setPrice] = useState(0);
  const [sku, setSKU] = useState('');
  const [model, setModel] = useState('');
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = [...sales];
    data.push({
      sku,
      model,
      name,
      price,
    });
    setSales(data);
    setSKU('');
    setModel('');
    setName('');
    setPrice(0);

  };

  return (
    <div className="App">
      <h2>Car Sales Mini Mern Web3</h2>
      <h4>List of sales</h4>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <ul>
          {sales.map((sale, index) => (
            <li key={index}>
              <span>SKU: {sale.sku}</span>
              <span>Model: {sale.model}</span>
              <span>Name: {sale.name}</span>
              <span>Price: {sale.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={onSubmit}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <label>SKU:</label>
        <input type="text" value={sku} onChange={(e) => setSKU(e.target.value)} />
        <label>Model:</label>
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button style={{marginTop: '30px'}} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
