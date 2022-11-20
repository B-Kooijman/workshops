import {useState} from "react";

const ThemeButton = () => {

  const htmlTag = document.getElementsByTagName("HTML")[0];
  
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      htmlTag.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      htmlTag.setAttribute("data-theme", "light");
    }
  };

  // const [theme, setTheme] = useState(false); // you still need state to force a rerender.
  // const themes = ["light", "dark"];
  // const toggleTheme = () => {
  //     setTheme(theme => + !theme);     // unary plus operator.
  //     htmlTag.setAttribute("data-theme", themes[ + !theme]);
  // };

  return (
    <button type="button" className="themebutton" onClick={toggleTheme}>
      {/* {!theme ? ( */}
      {theme === "light" ? (

        <span role="img" aria-label="sun">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="moon">
          🌚
        </span>
      )}
    </button>
  );
};

export default ThemeButton;
