import React from 'react';
import styled from 'styled-components';

const ListHeaderDiv = styled.div`
  background: ${props => props.theme.white};
`;

const HeaderDiv = styled.div`
  width: ${props => props.theme.contentWidth};
  max-width: ${props => props.theme.maxContentWidth};

  display: grid;
  grid-template-columns: 1.5em 1fr 6rem 1rem;
  grid-column-gap: 0.5rem;
  justify-content: stretch;

  margin: 0 auto;
  padding: 1rem 0.5rem;
`;

const Quote = styled.span`
  grid-column-start: 2;
`;

const User = styled.span`
  grid-column-start: 3;
`;

const ListHeader = () => (
  <ListHeaderDiv>
    <HeaderDiv>
      <Quote>Quote</Quote>
      <User>User</User>
    </HeaderDiv>
  </ListHeaderDiv>
);

export default ListHeader;
