import { Cell, Grid } from 'react-mdl';
import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <p>{this.props.jobDescription}</p>
          <p>{this.props.work}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
