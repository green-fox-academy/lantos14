import React, { Component } from 'react';
import Button from 'antd/lib/button';

class Header extends Component {

  render() {
    return (
      <div className='header'>
        <h1> Wanna drink some? </h1>
        <Button className='get-beer-btn' onClick={this.props.getBeers}>Get Beers</Button> <br />
      </div>
    )
  }
}

export default Header;
