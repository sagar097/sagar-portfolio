import { Cell, Grid } from 'react-mdl';
import React, { Component } from 'react';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
          <p>{this.props.achivements}</p>
          <p>{this.props.grade}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
