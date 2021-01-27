import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GeneralContext } from '../App';

const Line = ({ tomato }) => {
  const { dispatch } = useContext(GeneralContext);
  const handleDelete = async (_id) => {
    try {
      await fetch('/deletetomato', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id }),
      });
      dispatch({ type: 'CHANGED' });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async (_id) => {
    try {
      await dispatch({ type: 'TO_UPDATE', payload: tomato });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2px',
      }}
    >
      <div style={{ backgroundColor: 'pink', width: '80%' }}>{tomato.item}</div>
      <Link to={`/update`}>
        <button
          onClick={() => {
            handleUpdate();
          }}
        >
          Update
        </button>
      </Link>
      <button
        onClick={() => {
          handleDelete(tomato._id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Line;
