import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from '../components/ListItem';

class Quotes extends Component {
  renderQuotes() {
    console.log(this.props);
    const { startSN, quotes, deleteQuote } = this.props;

    return quotes.map((q, idx) => (
      <ListItem
        key={q.id}
        id={q.id}
        sn={startSN + idx}
        quote={q.msg}
        username={q.user}
        deleteQuote={deleteQuote}
      />
    ));
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

Quotes.defaultProps = {
  quotes: []
};

Quotes.propTypes = {
  deleteQuote: PropTypes.func.isRequired,
  startSN: PropTypes.number.isRequired,
  quotes: PropTypes.arrayOf(PropTypes.object)
};

export default Quotes;
