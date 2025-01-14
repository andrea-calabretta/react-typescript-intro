import { CounterProvider } from "./CounterContext";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

const Ex_01_useContext = () => (
  <CounterProvider>
    <CounterDisplay />
    <CounterControls />
  </CounterProvider>
);

export default Ex_01_useContext;
