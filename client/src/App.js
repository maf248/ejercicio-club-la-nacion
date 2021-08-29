import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { data: false };
  }
  
  async componentDidMount() {
    try {
      const response = await fetch('/api');
      const json = await response.json();
      this.setState({ data: json });
      
    } catch (error) {
      console.log(error)
    }
  }

  componentDidUpdate() {
    console.log(this.state.data)
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!this.state.data ? "Loading..." : "Data Ready!"}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;
