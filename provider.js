import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Copyright from "./src/components/Copyright";
import theme from "./src/theme";

export const Context = React.createContext();

export default function Provider({ children }) {
  const [nav, setNav] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Context.Provider
        value={{
          nav,
          changeNav: (event, newValue) => setNav(newValue),
        }}
      >
        {children}
      </Context.Provider>
    </ThemeProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};
