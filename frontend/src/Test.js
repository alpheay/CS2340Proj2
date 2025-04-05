import React, { useState, useEffect } from 'react';
import { getHelloWorldMessage } from './comps/axios-adapters';

function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getHelloWorldMessage()
      .then(data => {
        setMessage(data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello, Wor=ld!</h1>
      <p>{message}</p>
    </div>
  );
}

export default HelloWorld;