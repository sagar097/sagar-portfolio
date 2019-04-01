import { Cell, Grid } from 'react-mdl';
import React, { Component } from 'react';

import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Sagar Pawar</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p> Pune,Maharastra</p>
            <h5>Phone</h5>
            <p>9860007122</p>
            <h5>Email</h5>
            <p>spawar097@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2012}
              endYear={2015}
              schoolName="MGM University"
              schoolDescription="Computer Engineering"
               />

               <Education
                 startYear={2015}
                 endYear={2018}
                 schoolName="Vishwakarma Institute Of Information Technology"
                 schoolDescription="Information Technology"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={'June-2017'}
              endYear={'Aug-2017'}
              jobName="Intern"
              jobDescription="Worked at QJ Technologies as intern. Worked on Kali Linux Security 
                              Fundamentals also Used different security tools like John the ripper"
              />

              <Experience
                startYear={'July-2018'}
                endYear={'Currently Working'}
                jobName="Software Developer"
                jobDescription="Working at Figmd.inc. Working On Javascript-React,Redux,Webpack,Babel,Node.js"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={85}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={75}
                      />
                  <Skills
                      skill="Redux"
                      progress={65}
                      />
                       <Skills
                      skill="Webpack/Babel"
                      progress={60}
                      />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
