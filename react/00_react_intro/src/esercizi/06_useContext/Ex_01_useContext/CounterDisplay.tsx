// CounterDisplay.tsx
import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterDisplay = () => {
  const { count } = useContext(CounterContext)!;

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};

export default CounterDisplay;
