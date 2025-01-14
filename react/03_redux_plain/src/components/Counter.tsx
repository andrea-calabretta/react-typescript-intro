import React from 'react';
import './Counter.scss';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: { count: number }) => state.count);

  return (
    <div className='text-center'>
      <h1>Contatore: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrementa</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrementa</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Resetta</button>
    </div>
  );
};

export default Counter;
