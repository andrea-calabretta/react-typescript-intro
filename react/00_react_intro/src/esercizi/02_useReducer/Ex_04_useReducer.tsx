import { useReducer } from 'react';

interface IFormState {
  name: string;
  email: string;
}

type Action =
  | { type: 'updateName'; payload: string }
  | { type: 'updateEmail'; payload: string };

const formReducer = (state: IFormState, action: Action): IFormState => {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.payload };
    case 'updateEmail':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, { name: '', email: '' });

  return (
    <div>
      <h2>Modulo di Input</h2>
      <input
        type="text"
        placeholder="Nome"
        value={state.name}
        onChange={(e) => dispatch({ type: 'updateName', payload: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) => dispatch({ type: 'updateEmail', payload: e.target.value })}
      />
      <h3>Valori Attuali:</h3>
      <p>Nome: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
  );
};

export default Form;
