import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
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
import Emoji from "./Emoji";
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
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const logoVariants = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
  },
  hover: {
    scale: 1.2,
  },
  tap: {
    scale: 0.9,
  },
};

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
          <div className={classes.navBar}>
            <Link style={{ textDecoration: "none" }} to="/">
              <motion.div
                custom={theme}
                initial="before"
                animate="after"
                variants={logoVariants}
                whileHover="hover"
                whileTap="tap"
                className={classes.logo}
              >
                <Typography variant="h3">
                  <Emoji symbol="🗺️" label="map" />
                </Typography>
              </motion.div>
            </Link>
            <Tabs value={context.nav} onChange={context.changeNav}>
              <LinkTab label="Directory" to="/" {...a11yProps(0)} />
              <LinkTab label="About" to="/about" {...a11yProps(1)} />
              <LinkTab label="Guides" to="/guides" {...a11yProps(2)} />
            </Tabs>
          </div>
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
