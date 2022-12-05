import './App.css';

import React, {useState} from 'react';

function App() {
  const [returnedData, setReturnedData] = useState(['Hello there']);

  const fetchData = async () => {
    const newData = await fetch('/hello', {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'

      }
    })
    .then( res => res.json());
    console.log(newData);
    setReturnedData(newData.result)
  }


  return (
    <div className="App">
      <input 
        type="number" 
        name="CustomerOrderId" 
        placeholder="CustomerOrderId" 
        >
      </input>
      <input 
        type="number" 
        name="ProductId" 
        placeholder="ProductId" 
        >
      </input>
      <input 
        type="number" 
        name="Quantity" 
        placeholder="Quantity" 
        >
      </input>
      <input 
        type="number" 
        name="Rating" 
        placeholder="Product Rating" 
        >
      </input>
      <button onClick={() => fetchData()}>Click </button>
      <p>CustomerOrderId: {returnedData.CustomerOrderId}</p>
      <p>ProductId: {returnedData.ProductId}</p>
      <p>Quantity: {returnedData.Quantity}</p>
      <p>Rating: {returnedData.Rating}</p>
    </div>
  );
}

export default App;
