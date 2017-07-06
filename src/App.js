import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
  state = { userName: '',}
  handleSubmit = (event) => {
    event.preventDefault();
    axios.get('https://api.github.com/users/' + this.state.userName).then((r)=>{this.props.onSubmit(r.data)}) 
    
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit} style={{display: 'inline-block', marginLeft: 10, marginTop: 10}}>
        <input
          value = {this.state.userName}
          onChange = {(event) => this.setState({userName: event.target.value})}
          type="text" 
          placeholder="username" 
          required />
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

  addNewCard = (cardInfo) => {
    this.setState((prevState) => ({
      accounts: prevState.accounts.concat(cardInfo)
    }))
  }
  render() {
    return (
      <div>
        <Form onSubmit = {this.addNewCard}/>
        <Deck cards={this.state.accounts} />
      </div>
    );
  }
}

export default App;
