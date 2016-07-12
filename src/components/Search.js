import React from 'react';
import { Textfield } from 'react-mdl';

class Search extends React.Component{

  render() {
    return (
      <Textfield
        onChange={() => {}}
        label="Expandable Input"
        expandable
        expandableIcon="search"
        style={{margin: '-4px 0 -16px'}}
      />
    );
  }
}

export default Search;