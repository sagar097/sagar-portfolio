import { Route, Switch } from 'react-router-dom';

import AboutMe from './aboutme';
import Contact from './contact';
import LandingPage from './landingpage';
import ProfilePage from './Profile_Page/ProfilePage.jsx';
import Projects from './projects';
import React from 'react';
import Resume from './resume';

const Main = () => (
  <Switch>
    <Route exact path="/profile-page" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/" component={ProfilePage} />
  </Switch>
)

export default Main;
