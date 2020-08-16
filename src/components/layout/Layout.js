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

export default function Layout({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [email, setEmail] = React.useState("Email");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

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
                className={classes.logo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.3 }}
              >
                <Img fixed={data.file.childImageSharp.fixed} />
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
