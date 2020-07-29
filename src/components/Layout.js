import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import TabContext from "@material-ui/lab/TabContext";
import theme from "../theme";
import Copyright from "./Copyright";
import { Context } from "../../provider";
import { Link } from "gatsby";

// fun fact I didn't know of: "a11y" is SWE lingo for accessibility
// In this case, ARIA = Accessible Rich Internet Application and the set of attributes
// help describe the web content for screen readers
function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
  },
  appBar: {
    display: "flex",
    justifyContent: "flex-end",
    background: "transparent",
    boxShadow: "none",
  },
  tabs: {
    color: theme.palette.text.primary,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Layout({ value, handleChange, children }) {
  const classes = useStyles();

  return (
    <Context.Consumer>
      {(context) => (
        <Container
          disableGutters
          maxWidth={false}
          className={classes.container}
        >
          <AppBar className={classes.appBar} position="static" elevated={0}>
            <Tabs
              centered
              value={context.nav}
              onChange={context.changeNav}
              classes={{
                root: classes.tabs,
                indicator: classes.tabIndicator,
              }}
            >
              <LinkTab label="Directory" to="/" {...a11yProps(0)} />
              <LinkTab label="About" to="/about" {...a11yProps(1)} />
              <LinkTab label="Mentors" to="/mentors" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <main>{children}</main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </Container>
      )}
    </Context.Consumer>
  );
}
