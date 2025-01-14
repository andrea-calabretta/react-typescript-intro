import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header style={{ padding: "10px", textAlign: "center" }}>
      <h1>App di Esempio con Tema</h1>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
