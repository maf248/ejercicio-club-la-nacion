import React, { Component } from "react";
import './App.css';

import Header from './components/Header/Header';
import MainSlider from "./components/MainSlider/MainSlider";

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
      <Header/>
      <MainSlider />
        <p>{!this.state.data ? "Loading..." : "Data Ready!"}</p>
    </div>
    );
  }
}

export default App;
