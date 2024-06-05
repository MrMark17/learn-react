import useLocalStorage from "./useLocalStorage";
import './styles.css';

export default function LightDarkTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleSwitchBtn() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Light Dark Theme</h1>
        <button onClick={handleSwitchBtn}>Switch Theme</button>
      </div>
    </div>
  );
}
