import {
  Divider,
  Grid,
  MuiThemeProvider,
  Paper,
  Typography,
  createMuiTheme,
  withStyles
} from "@material-ui/core";
import React, { Component } from "react";

import aboutImg from "../static/images/mf-avatar.jpg";

const styles = theme => ({
  title: {
    fontFamily: '"eurostile",  sans-serif',
    color: "#293347",
    fontWeight: "800",
    fontSize: 25,
    display: 'block',
    margin: 'auto'
  },
  about: {
    fontWeight: 300,
    fontSize: 20,
    fontFamily: '"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
    textAlign: 'center'
  }
  ,
  avatar: {
    width: 210,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '80%',
    display: 'block'
  },
  papertext: {
    fontWeight: 300,
    fontSize: 20,
    fontFamily: '"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
    textAlign: 'center'
  }
});
function typographyV1Theme(theme) {
  return createMuiTheme({
    ...theme,
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 9,
    }
  });
}

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>

        <MuiThemeProvider theme={typographyV1Theme}>

          <Grid container Justify="center" style={{ textAlign: 'center' }}>
            <Grid item xs={12} md={12} sm={12} className={classes.header}>
              <Typography
                component="h5"
                className={classes.title}
                variant="subheading"
                gutterBottom
              >
                Designer, Front-end Developer
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.subheading}>
              <Typography
                component="h6"
                className="subheading"
                variant="display1"
              >
                I design and code beautifully simple things, and I love what
                I do.
              </Typography>
            </Grid>
          </Grid>


          <Grid container justify="center" style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <img
                className={classes.avatar}
                src={aboutImg}
                alt="about-img"
              />
            </Grid>
            <Typography style={{ fontSize: 20, marginTop: '1%' }} variant="display1">
              I enjoy turning complex problems into simple, beautiful and intuitive designs.<br />
              When I'm not coding, tweeting or pushing pixels,you'll find me Hiking, Reading <br />
              or Playing Football in the park.
            </Typography>
          </Grid>

          <Divider />
          <Grid container Justify="center" spacing={16} style={{ textAlign: 'center', paddingTop: '1%', }}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography gutterBottom component="h5" variant="subheading" style={{ fontWeight: 800, fontSize: 25, fontFamily: '"eurostile",  sans-serif' }}> ABOUT ME </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={24}>


            <Grid item xs={12} style={{ padding: 50, paddingLeft: '20%' }}>
              <Paper className={classes.paper}>

                <p className={classes.papertext}>I have  1 years of experience as a software engineer, and have worked at both small startups and large organizations.
           While I'm a  full-stack developer, my expertise is in building  Frontend UI Component and Functionality(React-Redux, API services, and async mechanisms).</p>
                <p className={classes.papertext}>I love building things. While hard engineering problems are
                often intrinsically fun to tackle, I'm most attracted to solving
                 real customer problems with a business justification. I'm looking
                 for a Frontend or Fullstack role where I can take on on
                  collaborative team  responsibilites,and gain experience
             with architecture and project management.</p>
              </Paper>
            </Grid>
          </Grid>

        </MuiThemeProvider>

      </React.Fragment>
    );
  }
}

export default withStyles(styles)(About);
