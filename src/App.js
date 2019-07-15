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

    this.retrieveData();

    // let first = Db.collection(`chats`).doc(grp_id).onSnapshot((snapshot) => {
    //   console.log("HELLO");
    //   console.log(snapshot.data());
    // });
    console.log("TEST")
    this.state = { quotes: [] }
  }

  retrieveData() {
    const grp_id = 'zwC3BnBHxVa4E28eeQ6L';
    const collectionRef = Db.collection('chats').doc(grp_id).collection('msgs');
    collectionRef.get()
      .then(res => { 
        // res is QuerySnapshot, res.docs is an array of queryDocumentSnapshots
        const quotesArr = res.docs.map(msgDoc => {
          let msgDocData = msgDoc.data();
          return {
            id: msgDoc.id,
            msg: msgDocData.msg, 
            user: msgDocData.user,
            datetime: new Date(msgDocData.datetime.seconds * 1000),
          };
        })
        

        this.setState({ quotes: quotesArr })
        console.log("Pulled data")
      })
      .catch(err => {
        console.log("Error getting document: ", err);
      })
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
      // console.log(Db);  
      
      return (
      <Container>
        <GlobalStyle />
        <Title>Telegram Quotes</Title>
        <Quotes quotes={this.state.quotes} />
      </Container>
    );
  }
}

export default App;