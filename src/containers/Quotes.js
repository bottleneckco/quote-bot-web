import React, { Component } from 'react';

import ListItem from '../components/ListItem';

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>List of quotes</h3>
        <ListItem id="ID" quote="Quote" username="Username" />
        <ListItem id="1" quote="qwgthisgas" username="ivan" />
        <ListItem id="2" quote="gasiodghasgasgasdgasgas" username="chester" />
      </div>
    );
  }
}

export default Quotes;