import React, { Component } from 'react';
import './displayCards.css';
import img from '../../trashcan.png';

class DispalyCards extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  removeCard(card){
    console.log(card);
    //this.database.ref(`cards/${key}`).remove();
}

removeCard(resultsArray, i){
    //let key = resultsArray[i].key || undefined ;
    if(resultsArray[i]){
        console.log(" x button clicked", resultsArray[i].key);
        let  delCards = [...this.props.cards];
        delCards.splice(i,1);
        console.log('delCards:',delCards);
        this.props.removeItem(delCards, i);
    }
    

  }

  DispalyCards() {
    let resultsArray = [];

    this.props.cards.map((card, i) => {
      //console.log(recipie.name);
      resultsArray.push(
        <div className="card" key={i} className="col-sm-4 col-md-2">
        <span>
            <div className="container" style={{padding: '80px'}}>
                <div className="caption">
                <h1>{card.word}</h1>
                <p>{card.meaning}</p>
                <input type="image" src={img} style={{width: '20%', float: 'right'}} index={i} onClick={() => this.removeCard(resultsArray, i)} />
                </div>
            </div>
        </span>
        </div>
        
      );
    }
  );

  console.log('resultsArray', resultsArray);
    return resultsArray;
  }  

  render() {
      console.log('this.props.cards:',this.props.cards);
    return (
        <div>
            {this.DispalyCards()}
        </div>
    );
  }
}

export default DispalyCards;
/* 
<div key={i} onClick={() => this.removeCard(resultsArray, i)}  className="col-sm-4 col-md-2">
        <span>
            <div className="thumbnail" style={{padding: '80px'}}>
                <button index={i} onClick={(event) => this.removeCard(event, card)}>x</button>
                <div className="caption">
                <h1>{card.word}</h1>
                <p>{card.meaning}</p>
                </div>
            </div>
        </span>
        </div> */