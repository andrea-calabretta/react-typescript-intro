import { useReducer, useEffect } from 'react';

interface ITimerState {
  seconds: number;
  isRunning: boolean;
}

type Action =
  | { type: 'start' }
  | { type: 'stop' }
  | { type: 'reset' }
  | { type: 'tick' };

const timerReducer = (state: ITimerState, action: Action): ITimerState => {
  switch (action.type) {
    case 'start':
      return { ...state, isRunning: true };
    case 'stop':
      return { ...state, isRunning: false };
    case 'reset':
      return { seconds: 0, isRunning: false };
    case 'tick':
      return { ...state, seconds: state.seconds + 1 };
    default:
      return state;
  }
};

const Timer = () => {
  const [state, dispatch] = useReducer(timerReducer, { seconds: 0, isRunning: false });

  useEffect(() => {
    let interval: number;
    if (state.isRunning) {
      interval = setInterval(() => {
        dispatch({ type: 'tick' });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state.isRunning]);

  return (
    <div>
      <h2>Timer: {state.seconds} secondi</h2>
      <button onClick={() => dispatch({ type: 'start' })} disabled={state.isRunning}>
        Avvia
      </button>
      <button onClick={() => dispatch({ type: 'stop' })} disabled={!state.isRunning}>
        Ferma
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Resetta
      </button>
      <button onClick={() => dispatch({ type: 'tick' })}>
        Tick
      </button>
    </div>
  );
};

export default Timer;
