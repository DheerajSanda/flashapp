import React, { Component } from 'react';
//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
import './card.css';

const Card = (props) => (
    <div className= "card1-container" >
        <div className= "card1">
            <div className="front">
                <div className="eng">{props.word}</div>
            </div>
            <div className="back">
                <div className="mean">{props.meaning}</div>
            </div>
        </div>
    </div>
)

export default Card;


{/* <Card style={{backgroundColor: APPCONFIG.color.primary}}>
          <CardHeader
            title="Expandable card"
            subtitle="Subtitle"
            actAsExpander
            showExpandableButton
            titleColor="#fff"
            subtitleColor="#e1e1e1"
            style={{color: '#fff'}}
                        />
          <CardText
            expandable
            style={{color: '#fff'}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions
            expandable
            style={{color: '#fff'}}
                        >
            <FlatButton label="Action1" style={{color: '#fff'}} />
            <FlatButton label="Action2" style={{color: '#fff'}} />
          </CardActions>
        </Card> */}