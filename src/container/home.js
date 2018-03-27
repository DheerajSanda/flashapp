import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Card from './card/card.js';
import DrawButton from './DrawButton/DrawButton.js';
import { DB_CONFIG } from '../Config/Firebase/config';
import firebase from 'firebase/app';
import 'firebase/database';
import AddCard from './addcard/addcard.js';
import DisplayCards from './displayCards/displayCards.js';
import '../App.css';


/* App component */
class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards: [],
            currentCard: {}
        }

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);

    }

    componentWillMount(){
        const currentCards = this.state.cards;
        this.database.on('child_added', snap => {
            currentCards.push({
                id: snap.key,
                word: snap.val().word,
                meaning: snap.val().meaning,
            })
            this.setState({
                cards: currentCards,
                currentCard: this.getRandomCard(currentCards)
            })
        })

    }

    getRandomCard(currentCards){
        var card = currentCards[Math.floor(Math.random() * currentCards.length)]
        return card;
    }

    updateCard(){
        const currentCards = this.state.cards;
        this.setState({
            currentCard: this.getRandomCard(currentCards)
        })
    }

    addItem(data){
        let presentCards = this.state.cards;
        presentCards.push(data);
        console.log('data:',data);
        console.log('presentCards:',presentCards);
        this.setState({cards: presentCards});
        console.log('this.state.cards:',this.state.cards);
        this.database.set(this.state.cards);
    }  

    removeItem(delCards, i){
        console.log('delCards:', delCards, i);
        this.setState({cards: delCards});
        console.log('this.state:', this.state);
        this.database.ref.child(i).remove();
    }

  render() {
    const Play = () => (
        <div>
           <div className="cardRow">
                <Card 
                    word={this.state.currentCard.word}
                    meaning={this.state.currentCard.meaning}
                />
            </div>
            <DrawButton drawCard={this.updateCard} />
        </div>
      )

    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            <li><Link to="/">Play</Link></li>
            <li><Link to="/cardslist">Cards</Link></li>
            <li><Link to="/addcards">Add Card</Link></li>

          </ul>
        </nav>

           <Route exact path="/" component={Play}/>
           {/* <Route exact path="/category" component={DisplayCards}/> */}
           <Route exact path="/cardslist" render={(props) => (
              <DisplayCards cards={this.state.cards} {...props} removeItem={(data, i) => this.removeItem(data, i)} />
            )}/>
           <Route exact path="/addcards" render={(props) => (
              <AddCard {...props} addItem={(data) => this.addItem(data)}/>
            )}/>

        <div>
            
        </div>
      </div>
    )
  }
}

export default Home;