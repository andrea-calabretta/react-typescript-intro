import { useEffect, useReducer } from "react";

type TimerAction = {
  type: 'start' | 'stop' | 'reset' | 'add' | 'tick';
  payload?: number;
};

interface TimerState {
  id: number;
  interval: number | null;
  seconds: number;
  running: boolean;
}

const UseReducerTimer = () => {
  const initialState: TimerState[] = [];

  const reducer = (state: TimerState[], action: TimerAction): TimerState[] => {
    switch (action.type) {
      case 'start':
        return state.map(timer =>
          timer.id === action.payload ? { ...timer, running: true } : timer
        );
      case 'stop':
        return state.map(timer =>
          timer.id === action.payload ? { ...timer, running: false } : timer
        );
      case 'reset':
        return state.map(timer =>
          timer.id === action.payload ? { ...timer, seconds: 0 } : timer
        );
      case 'add':
        return [...state, { id: state.length, interval: null, seconds: 0, running: false }];
      case 'tick':
        return state.map(timer =>
          timer.id === action.payload ? { ...timer, seconds: timer.seconds + 1 } : timer
        );
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const intervals: number[] = [];

    state.forEach(timer => {
      if (timer.running && !timer.interval) {
        const intervalId = setInterval(() => {
          dispatch({ type: 'tick', payload: timer.id });
        }, 1000);

        // Memorizza l'id dell'intervallo nello stato del timer
        dispatch({ type: 'start', payload: timer.id });
        intervals.push(intervalId);
      }
    });

    // Cleanup degli intervalli quando il componente si smonta
    return () => {
      intervals.forEach(clearInterval);
    };
  }, [state]);

  useEffect(() => {
    state.forEach(timer => {
      if (!timer.running && timer.interval) {
        clearInterval(timer.interval);
        dispatch({ type: 'stop', payload: timer.id });
      }
    });
  }, [state]);

  return (
    <>
      <button onClick={() => dispatch({ type: 'add' })}>Aggiungi</button>
      {state.map(timer => (
        <div key={timer.id}>
          Timer n. {timer.id} - {timer.seconds}s
          <button
            disabled={timer.running}
            onClick={() => dispatch({ type: 'start', payload: timer.id })}
          >
            Avvia
          </button>
          <button
            disabled={!timer.running}
            onClick={() => dispatch({ type: 'stop', payload: timer.id })}
          >
            Ferma
          </button>
          <button onClick={() => dispatch({ type: 'reset', payload: timer.id })}>
            Resetta
          </button>
        </div>
      ))}
    </>
  );
};

export default UseReducerTimer;
