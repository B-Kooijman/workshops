import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light");

  return (
       <ThemeContext.Provider value={[theme, setTheme]}>
        {children}
      </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContext')
  }

  return context;
}
