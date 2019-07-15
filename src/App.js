import React, { Component } from 'react';
import styled from 'styled-components';

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
  render() {
      return (
      <Container>
        <GlobalStyle />
        <Title>Telegram Quotes</Title>
        <Quotes />
      </Container>
    );
  }
}

export default App;
