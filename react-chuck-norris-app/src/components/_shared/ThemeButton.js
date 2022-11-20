import { useTheme } from "../04_context/ThemeContext";

const ThemeButton = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  
  return (
    <button type="button" className="themebutton" onClick={toggleTheme}>
      {theme === "light" ? 
      <span role="img" aria-label="sun">🌞</span> : 
      <span role="img" aria-label="moon">🌚</span> }
    </button>
  );
};

export default ThemeButton;
