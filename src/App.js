import './App.css';

import { Content, Drawer, Header, Layout, Navigation } from 'react-mdl';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout >
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
           
        </Content>
    </Layout>
</div>

    )
  }
}

export default App;
