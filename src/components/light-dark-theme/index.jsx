import useLocalStorage from "./useLocalStorage";

export default function LightDarkTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  return (
    <div>
      <h1>Light Dark Theme</h1>
    </div>
  );
}
