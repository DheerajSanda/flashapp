import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../App.css';
import Signup from './signup.js';
import Signin from './signin.js';
import img from '../flashcard-icon.png';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
  signin(data){
    this.props.signin(data);
  }
  render() {
    return (
        <div >
        
            <div className="box-1" ><img src={img} alt="logo" /></div>
            <div className="row" >
              <div className="col-md-3"></div>
              <div className="col-md-3"><Signin signin={(data) => this.signin(data)} /></div>
              <div className="col-md-3"><Signup signin={(data) => this.signin(data)} /></div>
              <div className="col-md-3"></div>
                
                
            </div>
        </div>
        
    );
  }
}

export default Main;