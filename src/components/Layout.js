import React from "react";
import { Link } from "gatsby";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import Copyright from "./Copyright";
import { Context } from "../../provider";
import BuyMeACoffee from "../components/BuyMeACoffee";

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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  newsletter: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    margin: theme.spacing(1),
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const [email, setEmail] = React.useState("Email");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

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
              <LinkTab label="Guides" to="/guides" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <main>{children}</main>
          <BuyMeACoffee />
          <footer className={classes.footer}>
            <Box className={classes.newsletter}>
              <form noValidate autoComplete="off">
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">Email</InputLabel>
                  <OutlinedInput onChange={handleChange} label="Email" />
                </FormControl>
              </form>
              <Box className={classes.btn}>
                <Button variant="contained" size="medium" color="primary">
                  Sign up
                </Button>
              </Box>
            </Box>
          </footer>
        </Container>
      )}
    </Context.Consumer>
  );
}
