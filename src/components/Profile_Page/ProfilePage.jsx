import {Card, CardContent, Divider, Link, Typography} from "@material-ui/core";

import Button from "./CustomButtons/Button.jsx";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Favorite from "@material-ui/icons/Favorite";
import Footer from "./Footer/Footer.jsx";
import GridContainer from "./Grid/GridContainer.jsx";
import GridItem from "./Grid/GridItem.jsx";
// core components
import NavPills from "./NavPills/NavPills.jsx";
import Palette from "@material-ui/icons/Palette";
import Parallax from "./Parallax/Parallax.jsx";
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import profile from "../../assets/img/faces/profilepic.jpg";
import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

class ProfilePage extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
   
    return (
      <div>
        <Parallax small filter image={require("../../assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Sagar Pawar</h3>
                      <h5>Full Stack Web Developer</h5>
                      <p>
                        HTML/CSS | Google-Material-Ui | JavaScript | React | Redux |
                        Babel| Webpack | NodeJS
                      </p>
                      <Button justIcon link className={classes.margin5}>
                       <Link href='https://www.linkedin.com/in/sagar-pawar-45b0a5115/'>   <i className={"fab fa-linkedin"}  /> </Link>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                     <Link href='https://github.com/sagar097'>   <i className={"fab fa-github"} /> </Link>
                      </Button>
                     
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  {" "}
                  {`Since beginning my journey as a Software developer nearly 1
                  years ago,I have done work for Figmd Inc, on different
                  project, and Worked with talented people to
                  and backed Functionality for products for both business and
                  consumer use. I am quietly confident,naturally curious, and
                  curious, and working on improving my chop one design problem
                  at a time.On my free time, I am building web applications
                  through the FreeCodeCamp/Github/Materia-Ui an open source coding
                  community. On top of That,  listen to engineering podcasts,
                  read and write tech blogs, and take other online courses in
                  order to help me develop a growth mindset and become a better
                  developer. Throughout this journey, I have learned to accept
                  as an opportunity to learn and grow.`}{" "}
                </p>
              </div>
              <GridContainer justify="center"  style={{ display:'flex'}}>
                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper} >
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Toolbox",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center"  style={{ display:'block'}}>
                            <GridItem xs={12} sm={12} md={12} >
                              <Card justify style={{ minWidth: 425}} >
                                <CardContent>
                                  <Typography variant="h6" component="h3">
                                    Toolbox
                                   </Typography>
                                  <Divider light={false} />
                                  <Typography component="div">
                                    <Typography style={{ fontWeight: 500, fontSize: 15 }}>
                                      Languages and Frameworks:
                                    </Typography>
                                     <Typography style={{ fontWeight: 250, fontSize: 15 }}>Javascript, HTML5, CSS3, ReactJS-JEST(Testing-Framework), Material-ui, NodeJS, ExpressJS,MySql</Typography>
                                  </Typography>

                                  <Typography component="div">
                                    <Typography style={{ fontWeight: 500, fontSize: 15 }}>
                                      IDE:
                                    </Typography>
                                    <Typography style={{ fontWeight: 250, fontSize: 15 }}> Microsoft VS Code </Typography>
                                  </Typography>
                                  <Typography component="div">
                                    <Typography style={{ fontWeight: 500, fontSize: 15 }}>
                                      VCS:
                                    </Typography>
                                      <Typography style={{ fontWeight: 250, fontSize: 15 }}>  Git/Github/Gitlab </Typography>
                                    </Typography>
                                  <Typography component="div">
                                    <Typography style={{ fontWeight: 500, fontSize: 15 }}>
                                      PMS:
                                    </Typography>
                                    <Typography style={{ fontWeight: 350, fontSize: 14 }}>
                                     <Typography style={{ fontWeight: 250, fontSize: 15 }}>   JIRA </Typography>
                                    </Typography>
                                  </Typography>
                                  <Typography component="div">
                                    <Typography style={{ fontWeight: 500, fontSize: 15 }}>
                                      Debugger:
                                    </Typography>
                                    <Typography style={{ fontWeight: 400, fontSize: 15 }}>
                                      Chrome/React/Readux Devtools
                                    </Typography>
                                  </Typography>
                                </CardContent>

                              </Card>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Learning",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <Card justify style={{ minWidth: 100}} >
                                <CardContent>
                                  <Typography variant="h6" component="h3">
                                    Learning
                              </Typography>
                                  <Divider light={false} />
                                  <Typography component="div">
                                    <Typography style={{ fontWeight: 500, fontSize: 15 }}>
                                      Currently:
                                </Typography>
                                    <Typography style={{ fontWeight: 250, fontSize: 15 }}>Webpack,Babel</Typography>
                                  </Typography>

                                  <Typography component="div">
                                    <Typography style={{ fontWeight: 500, fontSize: 15 }}>
                                      On the radar:
                                </Typography>
                                    <Typography style={{ fontWeight: 250, fontSize: 15 }}>Graphql </Typography>
                                  </Typography>
                                </CardContent>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Hacking On",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12}>
                              <Card justify style={{ minWidth: 250 }} >
                                <CardContent>
                                  <Typography variant="h6" component="h3">
                                    Working on
                              </Typography>
                                  <Divider light={false} />
                                  <Typography component="div">
                                    <Typography style={{ fontWeight: 350, fontSize: 15 }}>
                                  1)FIGmd introduces an intuitive big-data-based platform, PEGASUS.
                                      PEGASUS is a self-guided interactive platform that allows Registries, Practices and Providers
                                      to view their performance in a self-guided advanced UI based workflow.
                                      PEGASUS assists eligible registries,practices and clinician in analyzing the data to their need and send due
                                      notifications as needed in a unified Dashboard.The PEGASUS comprises of integrated modules which
                                      allow to manage your measures, performance data and help them report to the respective MACRA (Quality Payment),
                                      incentive and research programs. It offers a centralized platform for all sizes of hospitals, practitioners,
                                    registries. PEGASUS platform can address needs for registries, practices, provider of all types of specialties.
                                 <p>2) Brainstorming a new technical blog post to write.</p>
                                </Typography>
                                  </Typography>
                                </CardContent>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
