import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles'
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import theme from '../theme'
import Directory from '../components/Directory';


export default function Album() {
  // once the page scrolls beyond the search bar, we'll want to make note to show an "elevated" AppBar
  const [scrollThreshold, setScrollThreshold] = React.useState(false)

  // add scroll event listener to the page
  React.useEffect(() => {
    const handleScroll = (event) => {
      (window.scrollY > 400) ? setScrollThreshold(true) : setScrollThreshold(false)
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Hero/>
        <Directory pageScroll={scrollThreshold}/>
      </Layout>
    </ThemeProvider>
  );
}
