import React from 'react';
import {Badge, Icon } from 'react-mdl';
import Nav from './Navigation';
import Search from './Search';

class Header extends React.Component{

  render() {
    return (
      <div className="container">
        <Nav />
        <div className="alignright">
          <Search />
        </div>
        <h1 className="title">
          <span>What's app</span>
          <Badge text="10" overlap>
              <Icon name="question_answer" />
          </Badge>
        </h1>
      </div>
    );
  }
}

export default Header;