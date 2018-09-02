import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: '23'},
      {name: "Bob", age:"22"},
      {name: "Henry", age:"17"},

    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!</h1>
        </header>
        <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing, Driving</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does it work Now!!!'))
  }
}

export default App;
