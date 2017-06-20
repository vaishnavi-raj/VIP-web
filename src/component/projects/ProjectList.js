import React, { Component } from 'react';
//Material UI ELEMENTS
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import ProjectCard from './ProjectCard';

import artgineer from '../../assets/team_logo/artgineer.png';
import crypto from '../../assets/team_logo/crypto.png'
import deeplearning from '../../assets/team_logo/deeplearning.jpg';

import firebase from '../../firebase';

class ProjectList extends Component {
    constructor() {
      super();
      this.state = {
        projects : ""
      }
    }

    componentDidMount(){
      const projectRef = firebase.database().ref('Teams');
      projectRef.on("value", (snap) => {
        this.setState({
          projects: snap.val()
        });
        console.log(snap.val())
      })
  }

    render () {
      let projects = this.state.projects;
      return (
        <div>
          <div className="row">
            { this.state.projects
              ? (Object.keys(this.state.projects).map((uuid) =>
                  <ProjectCard key={uuid} fbkey={uuid} project={projects[uuid]} />
                ))
              : (<h2>Loading...</h2>)
            }
          </div>
          <div className="row">
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <RaisedButton label = "create a team" id = "applyButton" backgroundColor = "#ffc425" style = {{float: "right", margin:"10"}}/>
            </MuiThemeProvider>
          </div>
          
        </div>
        
      )
    }
}

export default ProjectList;