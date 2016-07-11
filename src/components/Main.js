require('normalize.css/normalize.css');
require('styles/app.css');
require('styles/material.css');

import React from 'react';

import { FABButton,Icon } from 'react-mdl';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <FABButton>
        		<Icon name="add" />
    		</FABButton>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
