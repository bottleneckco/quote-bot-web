import React, { Component } from 'react';

import ListItem from '../components/ListItem';

class Quotes extends Component {
  renderQuotes() {
    const { quotes, deleteQuote } = this.props;
    let sn = this.props.startSN;

    return quotes.map((q, idx) => (
      <ListItem
        key={q.id} sn={sn+idx} id={q.id} quote={q.msg} username={q.user} deleteQuote={deleteQuote} 
        />
    ))
  }

  render() {
    return (
      <div>
        <h3>List of quotes</h3>
        <ListItem sn="SN" quote="Quote" username="Username" />
        {this.renderQuotes()}
      </div>
    );
  }
}

export default Quotes;
