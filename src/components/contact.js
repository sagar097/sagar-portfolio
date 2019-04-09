import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';
import React, { Component } from 'react';

import profilepic from '../assets/img/faces/profilepic.jpg';

class Contact extends Component {
  render() {
    return(
     
      <div className="contact-body">
     
        <Grid className="contact-grid">
     
          <Cell col={6}>
            <h2>Sagar Pawar</h2>
            <img
              src={profilepic}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
            So you want me to GET IN TOUCH !</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <Grid className="contact-list" xs={12} sm={12} md={12}>
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    9860007122
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '23px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                         spawar097@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '23px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    sagar-pawar-45b0a5115
                  </ListItemContent>
                </ListItem>

              </List>
            </Grid>
           
          </Cell>
        
        </Grid>
     
      </div>
      
    )
  }
}

export default Contact;
