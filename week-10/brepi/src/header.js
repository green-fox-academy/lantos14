import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

class Header extends Component {

  render() {
    return (
      <div className='header'>
        <h3> List the beers </h3>
        <Button onClick={this.props.getBeers}>Get Beers</Button> <br />
        <Button onClick={this.props.prev}><Icon type="caret-left" /></Button>
        <Button onClick={this.props.next}><Icon type="caret-right" /></Button>
      </div>
    )
  }
}

export default Header;
