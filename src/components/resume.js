import { Cell, Grid } from 'react-mdl';
import { Divider, Paper, Typography } from "@material-ui/core";
import React, { Component } from 'react';

import Education from './education';
import Experience from './experience';
import Profile from '../assets/img/faces/profilepic.jpg';
import Skills from './skills';

class Resume extends Component {
  render() {
    const Work = (<Grid styel> 
    
    <Typography variant="h6" component="h3"  style={{color:'white'}}>
      Working on
            </Typography>
            <br/>
      <Divider light={false} />
      <Typography component="div" >
        <Typography style={{ fontWeight: 350, fontSize: 15,color:'white' }}>
          1. Working on Figmd's high priority project called pegasus. My task
          is to Building high performance, interactive applications, using web
          technologies Javascript-ReactJs-Redux-Nodejs.
              </Typography>
              <br/>
        <Divider light={false} />
        <Typography style={{ fontWeight: 350, fontSize: 15,color:'white' }}>
          2. Major task is to design ui component and its functionality we
          have two ui development team a) Component Building b) Assembly i
          have worked with component building team to design the components as per
          UX Wireframe;technologies i had used
          React.js,Material-UI,Jest,Webpack. After successfully done with the
                component building ; im one of the part of <b>Pegasus Assembly</b>{" "}
          team to give the functionality for User Profile component,here i
          used REST API & REDUX to fetch data and state management.
              </Typography>
              <br/>
        <Divider light={false} />
        <Typography style={{ fontWeight: 350, fontSize: 15,color:'white' }}>
          3. Verbal and written communication with Tester and UX team on daily basis.
              </Typography>
              <br/>
        <Divider light={false} />
        <Typography style={{ fontWeight: 350, fontSize: 15,color:'white' }}>
          4. Worked on User User-Security two-factor authentication -Using
          encryption that is no unauthorized access to our system through
          Credetials.
              </Typography>
              <br/>
        <Divider light={false} />

         <Divider light={false} />
        <Typography style={{ fontWeight: 350, fontSize: 15,color:'white' }}>
          5. Used Version Control Software: GitLab/Github for Project
          source control, code review, project management, and application monitoring .
              
              </Typography>
              <br/>
        <Divider light={false} />
        <Typography style={{ fontWeight: 350, fontSize: 15,color:'white' }}>
          6. Used project management software JIRA for  agile project management and Bug tracking.  
        </Typography>
              <br/>
        <Divider light={false} />

       <Divider light={false} />
        <Typography style={{ fontWeight: 350, fontSize: 15,color:'white' }}>
          7. Deployed Static and Dynamic Websites on Salesforce-Heroku,Netlify,Firebase etc.   
        </Typography>
              <br/>
        <Divider light={false} />
      </Typography>
    </Grid>)

const BE_project = (<Grid styel> 
    
  <Typography variant="h6" component="h3"  style={{color:'white'}}>
    Working on
          </Typography>
          <br/>
    <Divider light={false} />
    <Typography component="div" >
      <Typography style={{ fontWeight: 350, fontSize: 15,color:'white' }}>
        1. Technologies Used:Java,Java Servlet(JSP) Database:Mysql(Administrator & Query Tool)
            </Typography>
            <br/>
      <Divider light={false} />
      <Typography style={{ fontWeight: 350, fontSize: 15,color:'white' }}>
        2. A User is enabled with a facility to provide a uploading
         platform for videos where while uploading a video watermarks using DWT Are applied.
         Key frame extraction is done.Hash key is generated and then stored in db.
            </Typography>
            <br/>
      <Divider light={false} />
      <Typography style={{ fontWeight: 350, fontSize: 15,color:'white' }}>
        3. if anyone is uploading a video watermarks are applied and hash key is generated.as all the
        key generated.As all the contents of the video are already presents
        that video cannot be uploded.if anyone tries to crop that video then
        the video is checked that how much percent of the video gets matched and email is sent 
        to user and notified about piracy.hackers are identified using this system.
            </Typography>
            <br/>
      <Divider light={false} />
    </Typography>
    
  </Grid>)
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Profile}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Sagar Pawar</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Information Technology Engineer,Software Developer At Figmd Pvt. Ltd., I'm looking to secure entry in a well established professional organization, and leverage my technical and professional expertise to be a long-time asset to the organization's growth.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p> Pune,Maharastra</p>
            <h5>Phone</h5>
            <p>9860007122</p>
            <h5>Email</h5>
            <p>spawar097@gmail.com</p>
            <h5>Web</h5>
            <a href='http://hackerspoint097.blogspot.com'>hackerspoint097.blogspot.com</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2012}
              endYear={2015}
              schoolName="MGM College of Polytechnic,Aurangabad"
              schoolDescription="Computer Engineering"
              achivements='1st Rank Holder in Computer Department'
              grade='83.94(Distinction)'
               />

               <Education
                 startYear={2015}
                 endYear={2018}
                 schoolName="Vishwakarma Institute Of Information Technology,Pune"
                 schoolDescription="Information Technology"
                 achivements='8th Rank Holder in IT Department'
                 grade='74.70(Distinction)'
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>


              <Experience
                startYear={'July-2018'}
                endYear={'Currently Working'}
                jobName="Software Developer"
                jobDescription="  Figmd .pvt .ltd ,Pune,India"
                work={Work}
                />
               <Experience
              startYear={'June-2017'}
              endYear={'March-2018'}
              jobName="BE-Project"
              jobDescription="VIIT College,PUNE"
              work={BE_project}
              />
            <Experience
              startYear={'June-2017'}
              endYear={'Aug-2017'}
              jobName="Intern"
              jobDescription="Worked at QJ Technologies as intern. Worked on Kali Linux Security 
                              Fundamentals also Used different security tools like John the ripper"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <h5>Technical:</h5>
      
            <Skills
              skill="HTML/CSS"
              progress={85}
            />
            <Skills
              skill="React"
              progress={75}
            />
            <Skills
              skill="OOPs Concepts"
              progress={70}
            />
            <Skills
              skill="javascript"
              progress={65}

            />
            <Skills
              skill="Redux"
              progress={65}
            />
            <Skills
              skill="Webpack/Babel"
              progress={60}
            />

            <Skills
              skill="NodeJS"
              progress={45}
            />
         
            <hr style={{borderTop: '3px solid #e22947'}} />
           <h5> Other:</h5>
            <ul>
               <li>Written and Verbal Communication</li>
               <li>Leadership</li>
               <li>Time Management</li>
               <li>Teamwork</li>
             </ul> 
             <hr style={{borderTop: '3px solid #e22947'}} /> 
             <h4>Co-Curriculars:</h4>
             <ul>
               <li>Volunteered For CSI(Computer Society Of India)</li>
               <li>Participated in Football. (Figmd sport events-Funtroopers)</li>
               <li>Blod Donation Drives</li>
               <li>Music-Trekking and Football</li>
             </ul> 

             
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
