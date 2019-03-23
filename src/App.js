import React, { Component } from 'react';
import Nav from './components/Nav'
import Filter from './components/Filter'
import TeamContainer from './components/TeamContainer'
import CardContainer from './components/CardContainer'
import './App.css';

class App extends Component {
  // this sets initial state, is this everything we need?
  state = {
    characters: []
  }


  // I know this looks weird, but everything in here is fine, don't change a thing!
  componentDidMount = () => {
    // for(let i = 1; i < 16; i++) {
    // fetch(`https://rickandmortyapi.com/api/character/?page=${i}&status=alive`)
      fetch(`https://rickandmortyapi.com/api/character/1,2,3,4,5,9,47,130,136,192,236,242,244,265,280,306,329,331,353,372`)
      .then(res => res.json())
      .then(data => {
        data.forEach(char => {
          this.setState(state => ({
            characters: [...state.characters, char]
          }))
        })
      })
    // }
  }



  // what needs to happen here? How do containers know what to display?
  render() {
    return (
      <div>
        <Nav />
        <Filter />
        <TeamContainer />
        <CardContainer />
      </div>
    );
  }
}

export default App;
