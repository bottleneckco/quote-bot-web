import React, { Component } from 'react';
import styled from 'styled-components';

import List from './List.js'
import Db from './firebase.js';

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

    this.state = { quotes: [] }    
    this.deleteQuote = this.deleteQuote.bind(this)

    this.retrieveData();
  }

  retrieveData() {
    // const grp_id = 'zwC3BnBHxVa4E28eeQ6L';
    const grp_id = '-394500082';
    this.collectionRef = Db.collection('chats').doc(grp_id).collection('msgs');
    this.unsubscribe = this.collectionRef.onSnapshot(res => {

      // res is QuerySnapshot, res.docs is an array of queryDocumentSnapshots
      const quotesArr = res.docs.map(msgDoc => {
        let msgDocData = msgDoc.data();
        let datetime = new Date();
        
        // Need to check if key is available for use as datetime takes a while
        if (msgDocData.hasOwnProperty('datetime') && msgDocData.datetime.hasOwnProperty('seconds')) {
          datetime = new Date(msgDocData.datetime.seconds * 1000); 
      }
        
        return {
          id: msgDoc.id,
          msg: msgDocData.msg, 
          user: msgDocData.user,
          datetime: datetime,
        };
      });

      this.setState({ quotes: quotesArr });
      console.log("Refreshed data");
    }, err => {
      console.log("Unable to refresh data: " + err);
    })
  }

  deleteQuote(quoteId) {
    this.collectionRef.doc(quoteId).delete()
      .then(success => console.log("Quote successfully deleted"))
      .catch(err => console.log("Unable to delete quote"))
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {      
      return (
      <Container>
        <GlobalStyle />
        <Title>Telegram Quotes</Title>
        <Quotes quotes={this.state.quotes} deleteQuote={this.deleteQuote} startSN={1} />
      </Container>
    );
  }
}

export default App;