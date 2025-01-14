import { ThemeProvider } from "./ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";
import ThemedComponent from "./ThemedComponent";

const Ex_02_useContext = () => {
  return (
    <ThemeProvider>
      <h1>App di Esempio</h1>
      <ThemeToggleButton />
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default Ex_02_useContext;
