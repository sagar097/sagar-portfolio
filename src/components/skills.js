import { Cell, Grid, ProgressBar } from 'react-mdl';
import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return(
      <Grid>
       
        <Cell col={12}>
          <div style={{display: 'block'}}>
          {this.props.skill} 
          <ProgressBar style={{margin: 'auto', width: '40%'}} progress={this.props.progress} /> 
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
