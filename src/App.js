import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Card component - stateless presnsetational component
const Card = (props) => {
  return(
    <div style = {{margin: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style = {{display: 'inline-block', marginLeft: 10, marginBottom: 10}}>
        <div style = {{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}
const Deck = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  )
}

class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('hello, world!')
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit} style={{display: 'inline-block', marginLeft: 10, marginTop: 10}}>
        <input type="text" placeholder="username" />
        <button type="submit">Add Card</button>
      </form>
    )
  }
}

class App extends Component {
  state = {
    accounts: [
      {name: "Joshua Christiansen", company: "Atlas Financial Holdings", avatar_url: "https://avatars2.githubusercontent.com/u/22155222?v=3"},
      {name: "Joshua Christiansen", company: "Coder Camps", avatar_url: "https://avatars1.githubusercontent.com/u/22453878?v=3"}
    ]
  }
  render() {
    return (
      <div>
        <Form />
        <Deck cards={this.state.accounts} />
      </div>
    );
  }
}

export default App;
