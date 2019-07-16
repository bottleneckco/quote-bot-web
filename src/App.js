import React, { Component } from 'react';
import styled from 'styled-components';

import Db from './firebase';
import Quotes from './containers/Quotes';
import GlobalStyle from './stylesheets/global-styles';

const Container = styled.div`
  margin: 1rem auto;
  width: 33rem;
  max-width: 90%;
`;

const Title = styled.h1`
  margin: 1.5rem 0 0 0.5rem;
  text-align: center;
`;

class App extends Component {
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

        // Need to check if key is available for use as datetime takes a while
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

  render() {
    const { quotes } = this.state;
    return (
      <Container>
        <GlobalStyle />
        <Title>Telegram Quotes</Title>
        <Quotes quotes={quotes} deleteQuote={this.deleteQuote} startSN={1} />
      </Container>
    );
  }
}

export default App;
