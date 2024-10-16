import { useReducer } from 'react';

// Tipi per lo stato del contatore
interface State {
  count: number;
}

// Tipi per le azioni
type Action =
  | { type: 'increment' }
  | { type: 'reset' }
  | { type: 'decrement' };

// Definizione del reducer come arrow function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
        return {count: 0};
    default:
      return state;
  }
};

// Componente che utilizza useReducer
const Ex_01_useReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Conteggio: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementa</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementa</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default Ex_01_useReducer;
