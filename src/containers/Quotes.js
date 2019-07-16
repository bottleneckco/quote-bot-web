import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Db from '../firebase';

import ListItem from '../components/ListItem';
import ListHeader from '../components/ListHeader';

const ListItemsContainer = styled.div`
  width: 45rem;
  max-width: 90%;
  margin: 0 auto;
`;

class Quotes extends Component {
  constructor() {
    super();

    this.state = { quotes: [] };
    this.deleteQuote = this.deleteQuote.bind(this);
  }

  componentDidMount() {
    this.retrieveData();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  retrieveData() {
    // TODO: Dynamic chat id
    const chatId = '-394500082';
    this.collectionRef = Db.collection('chats').doc(chatId).collection('msgs');
    this.unsubscribe = this.collectionRef.orderBy('datetime').onSnapshot((res) => {
      // res is QuerySnapshot, res.docs is an array of queryDocumentSnapshots
      const quotesArr = res.docs.map((msgDoc) => {
        const msgDocData = msgDoc.data();
        let datetime = new Date();

        // Check if key is available for use as datetime takes a while
        if (msgDocData.hasOwnProperty('datetime') && msgDocData.datetime.hasOwnProperty('seconds')) {
          datetime = new Date(msgDocData.datetime.seconds * 1000);
        }

        const { id } = msgDoc;
        const { msg, user } = msgDocData;

        return { id, msg, user, datetime };
      });

      this.setState({ quotes: quotesArr });
      console.log('Refreshed data');
    }, (err) => {
      console.log(`Unable to refresh data: ${err}`);
    });
  }

  deleteQuote(quoteId) {
    this.collectionRef.doc(quoteId).delete()
      .then(() => console.log('Quote successfully deleted'))
      .catch(() => console.log('Unable to delete quote'));
  }

  renderQuotes() {
    const { startSN } = this.props;
    const { quotes } = this.state;

    return quotes.map((q, idx) => (
      <ListItem
        key={q.id}
        id={q.id}
        sn={startSN + idx}
        quote={q.msg}
        username={q.user}
        deleteQuote={this.deleteQuote}
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

Quotes.propTypes = {
  startSN: PropTypes.number.isRequired
};

export default Quotes;
