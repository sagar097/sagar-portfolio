import {Collapse, Link} from '@material-ui/core';
import { Grid, Tooltip, withStyles } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import classnames from 'classnames';
import red from '@material-ui/core/colors/red';
import weather  from '../../static/images/weather.jpg';
import website  from '../../static/images/Website.JPG';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  absolute:{
    color:red
  }
});

class Reactjs extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        active: true,
        expanded: false
    };
}

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

 
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
      <Grid item xs={6}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="React" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title="ReactJS Project"
                subheader="Jan 14, 2019"
              />
              <CardMedia
                className={classes.media}
                image={weather}
                title="Weather"
              />
              <CardContent>
                
            <h6>This Is simple React app Using ReactBootstrap.
            firebase-deploy url<Link> https://whetherapp-react.firebaseapp.com/ </Link></h6> 
              
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                <FavoriteIcon color='red '/>
                </IconButton>
                <IconButton aria-label="Share">
                    <Tooltip title="Github" aria-label="GitHub">    
                        <Link  href='https://github.com/sagar097/React-Weather-App'>   
                          <ShareIcon className="share" /> 
                        </Link>
                    </Tooltip>
                </IconButton>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
              <h6>  In this Project I fetched weather data from a api called openweathermap.org 
                        using fetch request,which display weather information by city & country .etc
                  </h6>
                </CardContent>
              </Collapse>
            </Card>
      </Grid>

      <Grid item xs={6}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="React" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title="ReactJS Project"
                subheader="Feb 03, 2019"
              />
              <CardMedia
                className={classes.media}
                image={website}
                title="React-website"
              />
              <CardContent>
                
            <h6>This Is simple React app Using React-Bootstrap.
               deployed on netlify <Link>https://reactsagar097.netlify.com </Link></h6> 
         
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                <FavoriteIcon color='red '/>
                </IconButton>
                <IconButton aria-label="Share">
                <Tooltip title="Github" aria-label="GitHub">    
                    <Link  href='https://github.com/sagar097/React-Website'>   
                      <ShareIcon className="share" /> 
                    </Link>
                </Tooltip>
                
                </IconButton>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                  >
                      <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
              <h6> 
                       This is Good Example for using of React-Router in React Project
                  </h6>
                </CardContent>
              </Collapse>
            </Card>
      </Grid>
      </Grid>
    );
  }
}

Reactjs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reactjs);