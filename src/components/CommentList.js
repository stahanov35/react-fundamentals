import React from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';

class CommentList extends React.Component{

  render() {
    return (
      <List>
        <ListItem twoLine>
          <ListItemContent avatar="person" subtitle="62 episodes">Bryan Cranston</ListItemContent>
          <ListItemAction>
            <date dateTime="2016-01-14T01:30">01:30</date>
            <i className="circle">3</i>
          </ListItemAction>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent avatar="person" subtitle="62 episodes">Aaron Paul</ListItemContent>
          <ListItemAction>
            <date dateTime="2016-01-14T01:00">01:00</date>
            <Icon name="update"></Icon>
          </ListItemAction>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent avatar="person" subtitle="62 episodes">Bob Odenkirk</ListItemContent>
          <ListItemAction>
            <date dateTime="2016-01-14T00:30">00:30</date>
            <Icon name="update"></Icon>
          </ListItemAction>
        </ListItem>
      </List>
    );
  }
}

export default CommentList;