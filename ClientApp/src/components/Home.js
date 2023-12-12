import React, { Component } from 'react';
import Card from './Card/Card';
import Us from './Us/Us'
import './Home.css'; 
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>

        <Card mustToSee={true} title={'Welcome to your new calendar organizer'} description={'We are changing your organizer life giving to you the chance to organize your events'}></Card>
        <Us></Us>
      </div>
    );
  }
}
