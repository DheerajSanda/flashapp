import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './App.css';
import Signup from './container/signup.js';
import Signin from './container/signin.js';
import Main from './container/main.js';
import Home from './container/home.js';
import { Grid, Paper } from 'material-ui';
import img from './flashcard-icon.png';
import { Link, Route, Switch } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      username:'',
      isAuthenticated: false
    }
  }

  signin(data){
      this.setState({isAuthenticated: true});
      localStorage.setItem('Authenticated', 'dheeraj' );
      console.log('localStorage:',localStorage);
  }

  signout(){
    console.log('this.state.isAuthenticated:',this.state.isAuthenticated);
    this.setState({isAuthenticated: false});
    window.location.reload()
  }

  render() {
    return (
      <div>
        <AppBar
        title={<div style={{textAlign: 'center'}} ><b>Quick Cards</b></div>}
        style={{paddingRight: '10%'}}
        iconElementLeft={<IconButton></IconButton>}
        iconElementRight={this.state.isAuthenticated ? <FlatButton onClick={() => this.signout()} label="Sign Out" />: ''}
      />
        {
          !this.state.isAuthenticated ?
          <Home />         
          :
          <Main signin={(data) => this.signin(data)} />
        }
      </div>
    );
  }
}

export default App;

