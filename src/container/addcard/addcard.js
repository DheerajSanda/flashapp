import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './addcard.css';

class AddCard extends Component {
  constructor(props){
    super(props);
    this.state={
        word:'',
        meaning:''
    }
  }

  handleClick(event){
    const id = Math.random();
    const {word, meaning} = this.state;
    this.props.addItem({id:id, word: word, meaning: meaning});
    this.setState({
        word:'',
        meaning:''
    });
  }


  render() {
    return (
        <div>
            <div className="addcard-container" >
                <section style={{color: 'rgb(0, 188, 212)', textAlign: 'center' }}>
                    <h1 style={{textAlign: 'center'}}>Add Card</h1>
                </section>
                <div className="addcard-container-inner" >
                    <div>
                        <TextField
                        hintText="Enter your word"
                        floatingLabelText="Word"
                        value={this.state.word}
                        onChange = {(event,newValue) => this.setState({word:newValue})}
                    />
                    <br/>
                    <TextField
                        type="Meaning"
                        hintText="Enter the meaning"
                        floatingLabelText="Meaning"
                        value={this.state.meaning}
                        onChange = {(event,newValue) => this.setState({meaning:newValue})}
                    />
                    <br/>
                    <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/>
                    </div>
                </div>
                
        </div>
        
            {/* <div className="container-fluid">
                <div className="page-login">
                <div className="main-body">
            <QueueAnim type="bottom" className="ui-animate">
            <div>
            <div className="body-inner">
                        <div className="card bg-white">
                          <div className="card-content">

                            <section className="logo text-center">
                              <h1 style={{color: 'rgb(0, 188, 212)'}} >Add Card</h1>
                            </section>

                            <form className="form-horizontal">
                              <fieldset>
                                <div className="form-group">
                                  <TextField value={this.state.word} onChange = {(event,newValue) => this.setState({word:newValue})}
                                    floatingLabelText="Word"
                                    fullWidth
                                  />
                                </div>
                                <div className="form-group">
                                  <TextField value={this.state.meaning} onChange = {(event,newValue) => this.setState({meaning:newValue})}
                                    floatingLabelText="Meaning"
                                    fullWidth
                                    />
                                </div>
                              </fieldset>
                            </form>
                          </div>
                          
                          <div>
                            <div>
                              <a className="color-primary" onClick={(event) => this.handleClick(event)} style={{cursor:'pointer'}}>Submit</a>
                            </div>
                            
                            
                          </div>
                        </div>

                      </div>
                      </div>
                  </QueueAnim>
                  </div>
              </div>
            </div> */}
        </div>
    );
  }
}

export default AddCard;