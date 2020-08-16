import React from "react";
import { Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { motion, AnimatePresence } from "framer-motion";

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
import Footer from "./Footer";

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

const duration = 0.5;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
};

export default function Layout({ children }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Context.Consumer>
      {(context) => (
        <Container
          disableGutters
          maxWidth={false}
          className={classes.container}
        >
          <Nav context={context} />
          <AnimatePresence>
            <motion.main
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <BuyMeACoffee />
          <Footer />
        </Container>
      )}
    </Context.Consumer>
  );
}
