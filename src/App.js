import './App.css';

import React, {useState} from 'react';

function App() {
  const [returnedData, setReturnedData] = useState(['Hello there']);
  const [order, setOrder] = useState({CustomerOrderId:0, ProductId:0, Quantity:0, Rating:0})

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if (name === 'CustomerOrderId' || name === 'ProductId' || name === 'Quantity' || name === 'Rating') {
      setOrder(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      return;
    }
      setOrder(prevState => ({
        ...prevState,
        [name]: (value)
      }));
    
  }

  const fetchData = async () => {
    console.log(order);
      const newData = await fetch('/api', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: order.CustomerOrderId
      })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0]) 
  }

  const createOrder = async () => {
      const newData = await fetch('/hello', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...order
      })
    })
    .then( res => res.json());
    console.log(newData);
    setReturnedData(newData[0]) 
  }


  return (
    <div className="App">
      <input 
        type="number" 
        name="CustomerOrderId" 
        placeholder="CustomerOrderId" 
        onChange={setInput}
        >
      </input>
      <input 
        type="number" 
        name="ProductId" 
        placeholder="ProductId" 
        onChange={setInput}
        >
      </input>
      <input 
        type="number" 
        name="Quantity" 
        placeholder="Quantity" 
        onChange={setInput}
        >
      </input>
      <input 
        type="number" 
        name="Rating" 
        placeholder="Product Rating"
        onChange={setInput} 
        >
      </input>
      <button onClick={() => fetchData()}>Click</button>
      <button onClick={() => createOrder()}>Create</button>
      <p>CustomerOrderId: {returnedData.CustomerOrderId}</p>
      <p>ProductId: {returnedData.ProductId}</p>
      <p>Quantity: {returnedData.Quantity}</p>
      <p>Rating: {returnedData.Rating}</p>
    </div>
  );
}

export default App;
