import React, { useContext, useState } from 'react';
import { GeneralContext } from '../App';
import { useHistory } from 'react-router-dom';

const UpdatePage = () => {
  const history = useHistory();
  const { state } = useContext(GeneralContext);
  const initialValue = state && state.to_update;
  const [newItem, setNewItem] = useState(initialValue.item);

  return (
    <div>
      <input
        type='text'
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          try {
            await fetch('/updatetomato', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                _id: initialValue._id,
                item: newItem,
              }),
            });
            history.push('/');
          } catch (error) {
            console.log(error);
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default UpdatePage;
