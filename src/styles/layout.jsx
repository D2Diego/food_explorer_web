import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global";
import { useDarkMode } from "./useDarkMode";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import { ThemeSlider } from "../components/ThemeSlider";

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header />
      <ThemeSlider theme={theme} toggleTheme={toggleTheme} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
