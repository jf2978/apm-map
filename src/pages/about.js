import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "../components/Layout";
import { Context } from "../../provider";
import Emoji from "../components/Emoji";
import Blurb from "../components/Blurb";
import { Grid, Divider } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  aboutText: {
    padding: theme.spacing(2, 0, 2),
  },
  avatar: {
    width: "80%",
    height: "80%",
  },
}));

export default function About() {
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
        <strong> APM Map </strong> is the result of one of the{" "}
        <em> hardest </em>
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
        Hey! I'm Jeff — currently empowering small businesses as a Software
        Engineer @ Mailchimp, forever a
        <Link
          href="https://www.questbridge.org/"
          onClick={(event) => event.preventDefault()}
        >
          {" "}
          QuestBridge{" "}
        </Link>
        scholar and co-creator of APM Map.
      </Typography>
      <Typography className={classes.aboutText}></Typography>
      <Typography className={classes.aboutText}></Typography>
    </>
  );

  return (
    <Layout>
      <Context.Consumer>
        {(context) => (
          <>
            <Blurb
              title="About APM Map"
              description="APM Map is your one-stop destination for navigating your A/PM recruiting journey. Whether you're looking to better understand the role of a PM or to refine your System Design interviewing skills for a technical round, we've curated resources across the entire A/PM recruiting timeline to help you accomplish just that. "
              emoji={<Emoji symbol="🗺️" label="map" />}
            />
            <Container>
              <Typography variant="h4">Meet the Creators</Typography>
              <Divider light variant="middle" />
              <Grid container spacing={1} style={{ width: "100%" }}>
                <Grid
                  item
                  display="flex"
                  flexDirection="column"
                  className={classes.about}
                  xs={12}
                  sm={6}
                >
                  {aboutMima}
                </Grid>
                <Grid
                  container
                  item
                  display="flex"
                  justify="center"
                  alignItems="center"
                  xs={12}
                  sm={6}
                >
                  <Avatar
                    variant="rounded"
                    className={classes.avatar}
                    src="https://storage.googleapis.com/mentors-pics/mima-profile-pic.jpg"
                  />
                </Grid>
                <Grid
                  container
                  item
                  display="flex"
                  justify="center"
                  alignItems="center"
                  xs={12}
                  sm={6}
                >
                  <Avatar
                    variant="rounded"
                    className={classes.avatar}
                    src="https://storage.googleapis.com/mentors-pics/jeff-3.jpg"
                  />
                </Grid>
                <Grid
                  item
                  display="flex"
                  flexDirection="column"
                  className={classes.about}
                  xs={12}
                  sm={6}
                >
                  {aboutJeff}
                </Grid>
              </Grid>
            </Container>
          </>
        )}
      </Context.Consumer>
    </Layout>
  );
}
