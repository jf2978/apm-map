import React from "react";
import { Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Copyright from "./Copyright";
import Emoji from "../util/Emoji";
import { Context } from "./Provider";
import BuyMeACoffee from "./BuyMeACoffee";
import Nav from "./Nav";

// "a11y" = accessibility
// ARIA = Accessible Rich Internet Application and the set of attributes
// help describe the web content for screen readers
function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tab component={Link} {...props} />
    </motion.div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
  },
  navBar: {
    display: "flex",
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
  const theme = useTheme();
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
          <Nav context={context} />
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
