import { createContext, useContext, useState, ReactNode } from "react";

const DarkThemeContext = createContext({
  darkTheme: false,
  toggleTheme: () => {},
});

/** Dark theme provider */
export const DarkThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <DarkThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(DarkThemeContext);
};
