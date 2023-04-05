import React from "react";
import {
  makeStyles,
  Grid,
  Button,
  Typography,
  Paper,
  Card,
  Divider,
} from "@material-ui/core";
import Map from "./EventMap";

const useStyles = makeStyles(() => ({
  mainGrid: {
    paddingTop: "8px",
    background: "#F1F1F1",
    color: "Black",
    height: "100vh",
  },
}));
export default function EventRegistration({ content }) {
  /* ADD A LOADER HERE IN CASE CONTENT.PROPERTY ISNT AVAILABLE */
  const classes = useStyles();
  console.log(content.location);
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
        <Grid container spacing={2} direction="row" justify="space-evenly">
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
                  border: "3px solid #E0812E",
                  boxShadow: "0 4px 6px rgba(0,0,0, 0.1)",
                  height: "75vh",
                }}
              >
                <Grid item alignContent="center">
                  <Typography variant="h4">Description: </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1"></Typography>
                </Grid>
                <Grid item style={{ paddingTop: "16px" }}>
                  <Typography variant="h4">Contact details: </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Event manager : +919876543210
                  </Typography>
                  <Typography variant="body1">
                    eventmanager@gmail.com
                  </Typography>
                </Grid>
                <Grid item style={{ paddingTop: "16px" }}>
                  <Typography variant="h4">Event details </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <b>Registration fees:</b> ₹
                    {content.amount === 0 ? "Free" : content.amount}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <b>Date:</b> {content.eventStartDate} to{" "}
                    {content.eventEndDate}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <b>Prize:</b>
                    {content.amount === 0 ? "N/A" : " ₹" + content.amount}
                  </Typography>
                </Grid>
                <Grid item xs style={{ paddingTop: "32px" }}>
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
                      style={{ width: "150px" }}
                    >
                      <a
                        href="https://forms.gle/bz14iHDQBRZfnzNg7"
                        target="_blank"
                        rel="noreferrer"
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
                  border: "3px solid #E0812E",
                  boxShadow: "0 4px 6px rgba(0,0,0, 0.1)",
                }}
              >
                <Grid item>
                  <Map />
                  <Typography variant="h4">Location</Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    Event organizers hold all rights to add/remove participants.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    All decisions made by the judges are final in case of a
                    competitive event.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>No refunds</Typography>
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
