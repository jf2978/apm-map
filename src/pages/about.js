import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "../components/layout/Layout";
import { Context } from "../components/layout/Provider";
import Emoji from "../components/util/Emoji";
import Blurb from "../components/util/Blurb";
import { Grid, Divider } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CreatorProfile from "../components/about/CreatorProfile";

const useStyles = makeStyles((theme) => ({
  aboutText: {
    padding: theme.spacing(2, 5, 2),
  },
  avatar: {
    width: "80%",
    height: "80%",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(5, 0, 5),
  },
  label: {
    fontVariant: "small-caps",
  },
  title: {
    fontWeight: 900,
    padding: theme.spacing(2, 0, 2),
    width: "75%",
  },
  subtitle: {
    width: "50%",
    fontStyle: "normal",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function AboutPage() {
  const classes = useStyles();
  const aboutMima = (
    <>
      <Typography variant="h5" className={classes.aboutText}>
        Michelle Ma
      </Typography>
      <Typography className={classes.aboutText}>
        Hi there <Emoji symbol="🍵" label="matcha" /> I'm Michelle, one of the
        creators behind APM Map. I'm an Associate Product Manager @ Yahoo
        (Verizon Media) by day, and building APM Map, The PM Collective, and
        learning to play the kalimba at night (follow my kalimba insta!
        #shameless #plug).
      </Typography>
      <Typography className={classes.aboutText}>
        APM Map is the result of one of the <em> hardest </em>
        recruiting seasons I've ever had to go through. A/PM recruiting is
        already notoriously{" "}
        <Link
          href="https://blog.tryexponent.com/best-associate-product-manager-programs/"
          onClick={(event) => event.preventDefault()}
        >
          competitive
        </Link>
        , and on top of that, I constantly felt like I was behind, didn't have
        all the resources at hand, and was generally really lost. There were so
        many times where I would find a golden resource days before an
        interview, knowing that if I had found it maybe a week earlier, the
        interview outcome might have been different.
      </Typography>
      <Typography className={classes.aboutText}>
        The <strong>idea</strong> behind APM Map is that you can start the
        recruiting season with as many resources available to you as possible —
        so you can hit the ground running, wherever you are in your prep
        process.
      </Typography>{" "}
    </>
  );

  // TODO paragraph about why I help build APM Map
  // TODO describe my intended brand: CS/Psychology (technology that recognizes the important human problems we all face)
  const aboutJeff = (
    <>
      <Typography variant="h5" className={classes.aboutText}>
        Jeffrey Fabian
      </Typography>
      <Typography className={classes.aboutText}>
        Hey, my name is Jeff <Emoji symbol="👋🏼" label="hand-wave" /> I'm a{" "}
        <Link href="https://www.questbridge.org/">QuestBridge</Link> alum,
        Software Engineer at Mailchimp and the technical co-creator of APM Map.
      </Typography>
      <Typography className={classes.aboutText}>
        Like many others, I've had my fair share of frustrations with the
        recruiting process — from getting ghosted by that company I thought I'd
        <em> at least </em> get an interview for to finally making it to that
        on-site interview that tried to cram 4 years worth of learning into 4
        hours. I was spending countless hours working through
        <Link href="https://leetcode.com/"> trivial interview questions </Link>
        all while trying to keep my grades afloat, working a part-time job and
        just trying to figure out whether the path I was on was right for me to
        begin with.
      </Typography>
      <Typography className={classes.aboutText}>
        I'm helping build APM Map in hopes to simplify and <em> humanize </em>{" "}
        the recruiting process — sharing the tools we all need and creating a
        supportive community to bring our best selves to that interview.
      </Typography>
    </>
  );

  return (
    <Layout>
      <Context.Consumer>
        {(context) => (
          <>
            <div className={classes.header}>
              <Typography
                className={classes.title}
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                {"About Us"}
              </Typography>
              <Typography
                className={classes.subtitle}
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
                {
                  <>
                    <strong>{"APM Map "}</strong>
                    {
                      "is your one-stop destination for navigating your A/PM recruiting journey. Whether you're looking to better understand the role of a PM or to refine your System Design interviewing skills for a technical round, we've curated resources across the entire A/PM recruiting timeline to help you accomplish just that."
                    }
                  </>
                }
              </Typography>
            </div>

            <Container className={classes.container}>
              <Typography
                className={classes.title}
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                {"The Creators"}
              </Typography>
              <CreatorProfile
                content={aboutMima}
                avatarSrc="https://storage.googleapis.com/mentors-pics/mima-profile-pic.jpg"
                linkedIn="https://www.linkedin.com/in/michelle-ma-1208/"
                twitter="https://twitter.com/michellema_97?lang=en"
                medium="https://medium.com"
              />
              <CreatorProfile
                invert
                content={aboutJeff}
                avatarSrc="https://storage.googleapis.com/mentors-pics/jeff-3.jpg"
                linkedIn="https://www.linkedin.com/in/jf2978/"
                github="https://github.com/jf2978"
              />
            </Container>
          </>
        )}
      </Context.Consumer>
    </Layout>
  );
}
