import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListItem from '../components/ListItem';
import ListHeader from '../components/ListHeader';

const ListItemsContainer = styled.div`
  width: 45rem;
  max-width: 90%;
  margin: 0 auto;
`;

class Quotes extends Component {
  renderQuotes() {
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
        <ListHeader />
        <ListItemsContainer>
          {this.renderQuotes()}
        </ListItemsContainer>
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
