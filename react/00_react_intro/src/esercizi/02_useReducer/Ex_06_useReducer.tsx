import { useReducer } from 'react';

interface IFeedbackState {
  rating: number;
  message: string;
}

type Action =
  | { type: 'rate'; payload: number }
  | { type: 'submit'; payload: string };

const feedbackReducer = (state: IFeedbackState, action: Action): IFeedbackState => {
  switch (action.type) {
    case 'rate':
      return { ...state, rating: action.payload };
    case 'submit':
      return { ...state, message: `Grazie per la tua valutazione di ${state.rating} stelle!` };
    default:
      return state;
  }
};

const Feedback = () => {
  const [state, dispatch] = useReducer(feedbackReducer, { rating: 0, message: '' });

  return (
    <div>
      <h2>Valutazione</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => dispatch({ type: 'rate', payload: star })}>
          {star} ⭐
        </button>
      ))}
      <button onClick={() => dispatch({ type: 'submit', payload: '' })}>Invia Feedback</button>
      {state.message && <p>{state.message}</p>}
    </div>
  );
};

export default Feedback;
