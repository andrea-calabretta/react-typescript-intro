import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import MainContent from "./MainContext";

const Ex_03_useContext = () => {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
    </ThemeProvider>
  );
};

export default Ex_03_useContext;
