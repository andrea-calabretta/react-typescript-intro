import { useTheme } from "./ThemeContext";

const ThemedComponent = () => {
  const { theme } = useTheme();

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "5px",
  };

  return (
    <div style={styles}>
      <h2>{theme === "light" ? "Light Mode" : "Dark Mode"} Attivo</h2>
      <p>Questo componente cambia in base al tema selezionato.</p>
    </div>
  );
};

export default ThemedComponent;