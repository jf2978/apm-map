import React from "react";
import { Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
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
  );
}
