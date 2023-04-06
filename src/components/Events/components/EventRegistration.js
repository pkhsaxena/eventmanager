import React from "react";
import {
  makeStyles,
  Grid,
  Button,
  Typography,
  Paper,
  Card,
  CardMedia,
  Divider,
} from "@material-ui/core";
import Map from "./EventMap";
import eventImg from "../eventCancel.jpg";

const useStyles = makeStyles(() => ({
  mainGrid: {
    paddingTop: "8px",
    background: "#F1F1F1",
    color: "Black",
    height: "100vh",
  },
  button: {
    background: "#E0812E",
    color: "white",
    width: "160px",
    "&:hover": {
      background: "#E0812E",
      color: "white",
      textDecoration: "underline",
    },
  },
  buttonText: {
    color: "white",
    "&:hover": {
      color: "white",
      textDecoration: "underline",
    },
  },
}));
export default function EventRegistration({ content }) {
  /* ADD A LOADER HERE IN CASE CONTENT.PROPERTY ISNT AVAILABLE */
  const classes = useStyles();
  console.log(content.location);
  //add an image here for the event
  const redirectGoogle = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${content.location}`
    );
  };

  return (
    <Grid container direction="row" className={classes.mainGrid}>
      <Grid item xs={1} />
      <Grid item xs>
        <Grid
          container
          direction="column"
          alignContent="center"
          spacing={2}
          style={{ paddingBottom: "16px" }}
        >
          <Grid item>
            <Typography variant="h3">{content.title}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={6} direction="row" justify="space-evenly">
          <Grid item xs>
            <Grid container direction="column">
              <Card
                variant="primary"
                rasied="true"
                style={{
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  background: "white",
                  // border: "3px solid #E0812E",
                  boxShadow: "0 4px 6px rgba(0,0,0, 0.1)",
                  height: "75vh",
                }}
              >
                <img src={eventImg} alt="event" style={{ height: "50%" }} />
                <Grid item alignContent="center">
                  <Typography
                    variant="h5"
                    style={{ paddingTop: "5px", paddingLeft: "5px" }}
                  >
                    <b>Description: </b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" style={{ paddingLeft: "5px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </Grid>
                {/* <Grid item style={{ paddingTop: "16px" }}>
                  <Typography variant="h4">Contact details: </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Event manager : +919876543210
                  </Typography>
                  <Typography variant="body1">
                    eventmanager@gmail.com
                  </Typography>
                </Grid> */}
                {/* <Grid item style={{ paddingTop: "16px" }}>
                  <Typography variant="h4">Event details </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <b>Registration fees:</b> ₹
                    {content.amount === 0 ? "Free" : content.amount}
                  </Typography>
                </Grid> */}
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{ paddingTop: "5px", paddingLeft: "5px" }}
                  >
                    <b>Date:</b> {content.eventStartDate} to{" "}
                    {content.eventEndDate}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{ paddingTop: "5px", paddingLeft: "5px" }}
                  >
                    <b>Prize:</b>
                    {content.amount === 0
                      ? "N/A"
                      : " $" + Math.round(content.amount / 82)}
                  </Typography>
                </Grid>
                <Grid item xs style={{ paddingTop: "12px" }}>
                  <Grid
                    container
                    spacing={2}
                    direction="column"
                    alignContent="center"
                    justify="center"
                    style={{ paddingTop: "32px" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      // style={{ width: "150px" }}
                      className={classes.button}
                    >
                      <a
                        href="https://forms.gle/g37hW5vPqAtwhqay7"
                        target="_blank"
                        rel="noreferrer"
                        className={classes.buttonText}
                      >
                        Register Now
                      </a>
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container direction="column">
              <Card
                style={{
                  height: "75vh",
                  background: "white",
                  // rounded: "true",
                  // border:"3px solid #E0812E",
                  boxShadow: "0 4px 6px rgba(0,0,0, 0.1)",
                }}
              >
                <Map />

                <Grid item>
                  <Typography
                    variant="h5"
                    style={{ paddingTop: "5px", paddingLeft: "5px" }}
                  >
                    Location:{" "}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography style={{ paddingLeft: "5px" }}>
                    Reitz Union, University of Florida, Gainesville, FL 32611
                  </Typography>
                  <Grid
                    container
                    spacing={2}
                    direction="column"
                    alignContent="center"
                    justify="center"
                    style={{ paddingTop: "32px" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      // style={{ width: "150px" }}
                      className={classes.button}
                      onClick={redirectGoogle}
                    >
                      Open Google Map
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}
