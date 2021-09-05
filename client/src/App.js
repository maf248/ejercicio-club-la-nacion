import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import MainSlider from './components/MainSlider/MainSlider';

import DiscountSlider from './components/DiscountSlider/DiscountSlider';

import Footer from './components/Footer/Footer';

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
      <div className='App'>
      <Header/>
      <MainSlider />
      <DiscountSlider />
      <Footer data={!this.state.data ? 'Loading...' : 'Data Ready!'} />
        
    </div>
    );
  }
}

export default App;
