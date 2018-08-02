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
    beerSelected: -1,
  }

  clearAllDescDisplay = () => {
    const beerCards = document.querySelectorAll('.beer-tile');

    for (let i = 0; i < beerCards.length; i++) {
      const card = beerCards[i];
      card.children[0].style.display = 'block';
      card.children[1].style.display = 'block';
      card.children[2].style.display = 'none';
    }
  }

  onBeerClicked = async (e) => {
    if (e.currentTarget.id === this.state.beerSelected) {
      const onClickedElement = document.querySelector(`#${this.state.beerSelected}`);
      onClickedElement.children[0].style.display = 'block';
      onClickedElement.children[1].style.display = 'block';
      onClickedElement.children[2].style.display = 'none';
      this.setState( {beerSelected: -1} );
    } else {

      await this.setState({ beerSelected: e.currentTarget.id });

      const onClickedElement = document.querySelector(`#${this.state.beerSelected}`);

      await this.clearAllDescDisplay()

      onClickedElement.children[0].style.display = 'block';
      onClickedElement.children[1].style.display = 'none';
      onClickedElement.children[2].style.display = 'block';
    }
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

  handlePageClick = (page) => {
    this.setState({ page: page, beerSelected: -1 }, this.getBeers);
    this.clearAllDescDisplay();
  }

  render() {
    return (
      <div className="App">

        <Header getBeers={this.getBeers} next={this.nextPage} prev={this.PrevPage} />

        <div className="pagination">
          <Beergrid list={this.state.beerList} onBeerClicked={this.onBeerClicked} />
          <Pagination current={this.state.page} onChange={this.handlePageClick} total={50} />;
        </div>
      </div>
    );
  }
}

export default App;
