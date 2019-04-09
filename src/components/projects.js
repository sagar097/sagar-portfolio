import AppBar from '@material-ui/core/AppBar';
import NoSsr from '@material-ui/core/NoSsr';
import NodeJs from './project/Node';
import PropTypes from 'prop-types';
import React from 'react';
import ReactJs from './project/React';
import Redux from './project/Redux';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import WebpackBabel from './project/WebpackBabel';
import { withStyles } from '@material-ui/core/styles';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Projects extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <LinkTab label="React" href="page1" />
              <LinkTab label="Webpack/Babel" href="page2" />
              <LinkTab label="NodeJs" href="page3" />
              <LinkTab label="Redux" href="page4" />            
            </Tabs>
          </AppBar>
          
          {value === 0 && <TabContainer><ReactJs/></TabContainer>}
          {value === 1 && <TabContainer><WebpackBabel/></TabContainer>}
          {value === 2 && <TabContainer><NodeJs/></TabContainer>}
          {value === 3 && <TabContainer><Redux/></TabContainer>}
        
        </div>
      </NoSsr>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
