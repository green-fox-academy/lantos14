import React, { Component } from 'react';
import './App.css';
import Beergrid from './beergrid'
import Header from './header'

class App extends Component {

  state = {
    beerList: [],
    page: 1
  }

  getBeers = () => {
    fetch(`https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=6`)
      .then(response => response.json())
      .then(parsedJson => {
        this.setState({ beerList: parsedJson })
      });
  }

  nextPage = () => {
    const actualPage = this.state.page;
    this.setState({ page: actualPage + 1 });
    this.getBeers();
  }

  PrevPage = () => {
    const actualPage = this.state.page;
    this.setState({ page: actualPage - 1 });
    this.getBeers();
  }

  render() {

    return (
      <div className="App">

        <Header getBeers={this.getBeers} next={this.nextPage} prev={this.PrevPage} />

        <Beergrid list={this.state.beerList} />

      </div>
    );
  }
}

export default App;
