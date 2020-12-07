import React, { useState, useEffect } from 'react';
import './App.css';
import { set } from 'mongoose';

function App() {
  const [item, setItem] = useState('');
  const [done, setDone] = useState(false);
  const [allTomatoes, setAllTomatoes] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await (
        await fetch('/addtomato', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ item }),
        })
      ).json();
      setItem('');
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  const getTomatoes = async () => {
    try {
      const result = await (
        await fetch('/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
      ).json();
      setAllTomatoes(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTomatoes();
  }, [submitHandler]);

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button type='submit'>Submit</button>
      </form>
      {allTomatoes &&
        allTomatoes.map((i, key) => <div key={key}>{i.item}</div>)}
    </div>
  );
}

export default App;
