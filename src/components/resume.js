import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import avtar from '../img/avatar.jpg';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={avtar}
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Amar Tauqeer</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>To be able to work for an encouraging and stable company that will assist me in developing,improving, and obtaining the necessary skills in order to become the best engineer possible.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>Hans Untermüller Straße Innsbruck, 6020</p>
            <h5>Phone</h5>
            <p>+43 688 64133065</p>
            <h5>Email</h5>
            <p>amar.tauqeer@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2013}
              endYear={2017}
              schoolName="Vienna University of Business and Economics"
              schoolDescription="Master in Information Systems"
            />

            <Education
              startYear={2009}
              endYear={2011}
              schoolName="University of Gujrat"
              schoolDescription="Master in Information Technology"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2006}
              endYear={2009}
              jobName="Software Developer"
              jobDescription="Complete life cycle of software development and CRM"
            />

            <Experience
              startYear={2011}
              endYear={2013}
              jobName="Senior Software Developer"
              jobDescription="Complete life cycle of software development and Customer Relationship Management"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={80}
            />
            <Skills
              skill="NodeJS"
              progress={80}
            />
            <Skills
              skill="Express"
              progress={80}
            />
            <Skills
              skill="HTML/CSS"
              progress={60}
            />
            <Skills
              skill="React"
              progress={50}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
