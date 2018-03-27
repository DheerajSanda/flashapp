import React, { Component } from 'react';
import './DrawButton.css';

class DrawButton extends Component {
  constructor(props){
    super(props);
    this.state={

    }
    this.drawCard = this.drawCard.bind(this);
  }

  drawCard(){
      this.props.drawCard();
  }

  render() {
    return (
        <div className="btncontainer">
            <button className="btn1" onClick={this.drawCard} >Draw Card</button>
        </div>
    );
  }
}

export default DrawButton;