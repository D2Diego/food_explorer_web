import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global";
import { useDarkMode } from "./useDarkMode";
import lightTheme from "./lightTheme";
import darkTheme from "./theme";

const Layout = ({ children, renderThemeSlider }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {renderThemeSlider ? renderThemeSlider({ theme, toggleTheme }) : null}
      {children}
    </ThemeProvider>
  );
};

export default Layout;
