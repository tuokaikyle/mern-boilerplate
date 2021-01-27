import React, { useEffect, useState, useContext } from 'react';
import Line from './Line';
import { GeneralContext } from '../App';

const HomePage = () => {
  const [item, setItem] = useState('');
  const [allTomatoes, setAllTomatoes] = useState('');
  const { state, dispatch } = useContext(GeneralContext);

  const addHandler = async () => {
    try {
      await fetch('/addtomato', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item }),
      });
      setItem('');
      dispatch({ type: 'CHANGED' });
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
    console.log('one render');
  }, [state]);
  return (
    <div>
      <h1>Hello World</h1>
      <div style={{ display: 'flex' }}>
        <input
          type='text'
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addHandler();
          }}
        >
          Create
        </button>
      </div>
      {allTomatoes &&
        allTomatoes.map((i, key) => (
          <div key={key}>
            <Line tomato={i}></Line>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
