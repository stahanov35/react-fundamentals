require('normalize.css/normalize.css');
require('styles/app.css');
require('styles/material.css');

import React from 'react';
import { Button } from 'react-mdl';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
      	<Button raised colored>Add comment</Button>
      </div>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
