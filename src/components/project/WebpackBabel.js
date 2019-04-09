import {Link, Tooltip} from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import WebpackBabelImage from '../../static/images/Webpack.JPG';
import classnames from 'classnames';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';

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
});

class WebpackBabel extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              WB
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="WebpackBabel Project"
          subheader="March 14, 2019"
        />
        <CardMedia
          className={classes.media}
          image={WebpackBabelImage}
          title="portfolio"
        />
        <CardContent>
          <Typography component="p">
             <h6> This is my portfolio using React-Webpack/Babel</h6>
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
          <Tooltip title="Github" aria-label="GitHub">    
                    <Link  href='https://github.com/sagar097/sagar-portfolio'>   
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
            <h6> React app using Materiail-Ui, Webpack,Babel,React-router,React-mdl</h6>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

WebpackBabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WebpackBabel);