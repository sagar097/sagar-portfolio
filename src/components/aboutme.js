import {
  Card,
  CardContent,
  Grid,
  MuiThemeProvider,
  Paper,
  Typography,
  createMuiTheme,
  withStyles
} from "@material-ui/core";
import React, { Component } from "react";

import aboutImg from "../static/images/mf-avatar.jpg";
import capture from "../static/images/hero.jpg";

const styles = {
  title: {
    fontFamily: '"eurostile",  sans-serif',
    color: "#293347",
    fontWeight: "800",
    fontSize: 45,
    display: 'block',
    margin: 'auto'
  },
  header: {
    paddingLeft: "30%"
  },
  subheading: {
    paddingLeft: "33%"
  },
  avatar: {
    width: 210,
    marginTop: 65,
    paddingLeft: "40%",
    paddingBottom: "6%",
  },
  paper: {
    backgroundColor: "#8C43FF",
  },
  intro: {
    color: "#fff",
    paddingLeft: "36%",
    fontFamily: '"europa",  sans-serif',
    fontWeight: 600,
    paddingTop: "5%",
    display: 'block',
    margin: 'auto'
  },
  aboutus: {
    color: "#fff",
    paddingLeft: "25%",
    fontSize: 17,
    lineHeight: 1.5,
    paddingBottom: "5%",
    display: 'block',
    margin: 'auto'
  },
  avatarDiscription: {
    marginBottom: "-5",
    maxWidth: 860,
    height: 430,
    display: 'block',
    margin: 'auto'
  },
  card: {
   
    height: 430,
    display: 'block',
    margin: 'auto'
  },

};
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
          <Grid container>
            <Grid item xs={12} className={classes.header}>
              <Typography
                component="h1"
                className={classes.title}
                variant="heading"
                gutterBottom
              >
                Designer, Front-end Developer
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.subheading}>
              <Typography
                component="h6"
                className="subheading"
                variant="display1"
              >
                I design and code beautifully simple things, and I love what I
                do.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img className={classes.avatar} src={aboutImg} alt="about-img" />
            </Grid>
            <img className={classes.avatarDiscription} src={capture} alt="avatar-img" />
          </Grid>
        </MuiThemeProvider>
        <Paper className={classes.paper} elevation={1}>

          <Typography variant="h4" className={classes.intro} component="h5">
            Hi, I’m Sagar. Nice to meet you.
          </Typography>
          <Typography
            component="p"
            className={classes.aboutus}
            variant="Body"
          >
            <pre>
              {`            Since beginning my journey as a Software developer nearly 1 years
               ago, I've done  work for Figmd Inc, on different project,
            and Worked with talented people to create Frontend and backed 
              Functionality for products for both business and consumer use.
            I'm quietly confident,naturally curious, and perpetually working 
                on improving my chop one design problem at a time.
                `}
            </pre>
          </Typography>
        </Paper>
       
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(About);
