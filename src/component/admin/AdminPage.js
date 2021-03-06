import React, { Component } from 'react';

import ChangeSemester from './ChangeSemester';
import PendingApplication from './TeamApplication/PendingApplication';
import DeniedApplication from './TeamApplication/DeniedApplication';
import ManageAdmin from './ManageAdmin';
import ManageCourses from './GateKeeper/ManageCourses';
import GateKeeper from './GateKeeper/ManageGateKeeper';
import SA_Tool from './StudentApplication/StudentApplicationTool';
import Roster_Tool from './RosterTool/RosterTool';
import userStore from '../../stores/UserStore';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Primary, {NavColor} from '../../Theme';

import {AdminRoute} from '../Route';

class AdminPage extends Component {

  constructor() {
    super();
    this.state = {
      Project:true
    }
    this.setToFalse = this.setToFalse.bind(this);
    this.showProject = this.showProject.bind(this);
    this.showRoster = this.showRoster.bind(this);
    this.showStudent = this.showStudent.bind(this);
    this.showAdminTool = this.showAdminTool.bind(this);
    this.showCourses = this.showCourses.bind(this);
    this.showSemester = this.showSemester.bind(this);
  }
  showStudent() {
    this.setToFalse();
    this.setState({
      Student:true
    })
  }
  showProject() {
    this.setToFalse();
    this.setState({
      Project:true
    })
  }
  showRoster() {
    this.setToFalse();
    this.setState({
      Roster:true
    })
  }
  showAdminTool() {
    this.setToFalse();
    this.setState({
      AddAdmin:true
    })
  }
  showCourses() {
    this.setToFalse();
    this.setState({
      Courses:true
    })
  }
  showSemester() {
    this.setToFalse();
    this.setState({
      Semester:true
    })
  }
  setToFalse() {
    this.setState({
      Project:false,
      Student:false,
      Roster:false,
      AddAdmin:false,
      Courses:false,
      Semester:false
    });
  }

  render = () => {
    return(
      <div>
        <MuiThemeProvider>
          <Paper zDepth = {2} style = {{padding:'20px'}}>
            {this.state.Project &&
              <PendingApplication />
            }
            {this.state.Student &&
              <SA_Tool />
            }
            {this.state.Roster &&
              <div>
                <h1 style ={{textAlign:'center'}}>Roster</h1>
                <Roster_Tool />
              </div>
            }
            {this.state.AddAdmin &&
              <ManageAdmin />
            }
            {this.state.Courses &&
              <div>
                <h1 style = {{textAlign:'center'}}>Manage Courses and GateKeepers</h1>
                <ManageCourses />
                <Divider style = {{margin:'20px'}}/>
                <GateKeeper />
              </div>
            }
            {this.state.Semester &&
              <div>
                <h1 style = {{textAlign:'center'}}>Semester</h1>
                <ChangeSemester />
              </div>
            }
          </Paper>
        </MuiThemeProvider>  
        <AdminRoute user={userStore} path = "/admin/projectApplication/Denied" component={DeniedApplication} />
         <div style = {{paddingTop:'20px'}}>
          <MuiThemeProvider>
            <Tabs inkBarStyle ={{color:Primary}}>
              <Tab label = "Project Application" style={{backgroundColor:NavColor}} onActive={this.showProject}/>
              <Tab label = "Student Application" style={{backgroundColor:NavColor}} onActive={this.showStudent}/>
              <Tab label = "Rosters" style={{backgroundColor:NavColor}} onActive={this.showRoster}/>
              <Tab label = "Manage Admin" style={{backgroundColor:NavColor}} onActive={this.showAdminTool}/>
              <Tab label = "Manage Courses" style={{backgroundColor:NavColor}} onActive={this.showCourses}/> 
              <Tab label = "Change Semester" style={{backgroundColor:NavColor}} onActive={this.showSemester}/>        
            </Tabs>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default AdminPage;