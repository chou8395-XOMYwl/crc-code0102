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
      <h2>Enter Order Info To Place New Order Or To Retrieve Order Information </h2>
      <input 
        type="number" 
        name="CustomerOrderId" 
        placeholder="Enter CustomerOrderId" 
        onChange={setInput}
        >
      </input>
      <input 
        type="number" 
        name="ProductId" 
        placeholder="Enter ProductId" 
        onChange={setInput}
        >
      </input>
      <input 
        type="number" 
        name="Quantity" 
        placeholder="Enter Quantity" 
        onChange={setInput}
        >
      </input>
      {/*<input 
        type="number" 
        name="Rating" 
        placeholder="Product Rating"
        onChange={setInput} 
        >
      </input>*/}
       <button onClick={() => createOrder()}>Enter Order Details & Create New Order</button>
      <button onClick={() => fetchData()}>Enter Order Number & Click To see Order Details</button>
      <div className='container'>
      <h3>Individual Order Details</h3>
      <p>CustomerOrderId: {returnedData.CustomerOrderId}</p>
      <p>ProductId: {returnedData.ProductId}</p>
      <p>Quantity: {returnedData.Quantity}</p>
      </div>
    </div>
  );
}

export default App;
