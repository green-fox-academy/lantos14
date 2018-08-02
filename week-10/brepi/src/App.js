import React, { Component } from 'react';
import './App.css';
import Beergrid from './beergrid';
import Header from './header';
import { Pagination } from 'antd';

class App extends Component {

  state = {
    beerList: [],
    page: 1,
    perPage: 6,
    pageCount: 10,
  }

  getBeers = () => {
    fetch(`https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=${this.state.perPage}`)
      .then(response => response.json())
      .then(parsedJson => {
        this.setState({ beerList: parsedJson })
      })
      .catch(error => console.error(`Fetch Error =\n`, error));

    document.querySelector('.get-beer-btn').style.display = 'none';
  }

  checkBeerCount = () => {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then(response => response.json())
      .then(parsedJson => {
        this.setState({ beerList: parsedJson })
      });
  }

  handlePageClick = (page) => {
    const actualPage = page;
    console.log('actualPage: ', actualPage);
    this.setState({ page: page });
    this.getBeers();
  }

  render() {

    return (
      <div className="App">

        <Header getBeers={this.getBeers} next={this.nextPage} prev={this.PrevPage} />

        <div className="pagination">
          <Beergrid list={this.state.beerList} />
          <Pagination current={this.state.page} onChange={this.handlePageClick} total={50} />;
        </div>
      </div>
    );
  }
}

export default App;
