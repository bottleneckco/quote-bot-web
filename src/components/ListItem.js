import React from 'react';
import styled from 'styled-components';

const ListItemDiv = styled.div`
  display: grid;
  grid-template: "sn quote username btn" / 2em 1fr 8rem 4em;
  justify-content: stretch;
  
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  
  background: ${props => props.theme.white};
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  border-radius: 5px;
`;

const ListItem = (props) => {
  return (
    <ListItemDiv>
      <span>{props.sn}</span>
      <span>{props.quote}</span>
      <span>{props.username}</span>
      {props.sn != 'SN' ? <button onClick={()=> props.deleteQuote(props.id)}>Delete</button> : '' }
    </ListItemDiv>
  );
};

export default ListItem;