import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../App.css';


class Signin extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      usernameError: false,
      passwordError: false
    }
  }
  handleClick(data){
      const { username, password } = this.state;
      if(username == 'dheeraj'){
        if(password == 'dheeraj@123'){
            this.props.signin({isAuthenticated: true});
        }else{
        this.setState({passwordError: true});
      }
      }else{
        this.setState({usernameError: true});
      }
    
  }
  render() {
    return (
        <div className="block-left" >
            <section style={{color: 'mediumturquoise', textAlign: 'center' }}>
            <h1 >Sign In</h1>
            </section>
            <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange = {(event,newValue) => this.setState({username:newValue})}
                />
           <br/>
           {this.state.usernameError ? 
                <p style={{color: 'red'}}>* username error</p>
                :
                ''   
            }
            <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event,newValue) => this.setState({password:newValue})}
                />
            {this.state.passwordError ? 
                <p style={{color: 'red'}}>* password error</p>
                :
                ''   
            }
            <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
        </div>
    );
  }
}

const style = {
    margin: 15,
  };

export default Signin;