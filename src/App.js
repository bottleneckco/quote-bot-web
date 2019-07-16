import React from 'react';
import styled from 'styled-components';

import Quotes from './containers/Quotes';
import GlobalStyle from './stylesheets/global-styles';

const Container = styled.div`
  margin: 1rem auto;
`;

const Title = styled.h1`
  margin: 1.5rem 0 0 0.5rem;
  text-align: center;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Title>Telegram Quotes</Title>
    <Quotes />
  </Container>
);

export default App;
