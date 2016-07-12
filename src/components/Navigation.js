import React from 'react';
import { IconButton, Menu, MenuItem } from 'react-mdl';

class Navigation extends React.Component{

  render() {
    return (
      <div className="nav">
        <IconButton name="more_vert" id="demo-menu-lower-left" />
        <Menu target="demo-menu-lower-left">
            <MenuItem>Some Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
        </Menu>
    </div>
    );
  }
}

export default Navigation;