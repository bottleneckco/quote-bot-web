import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItemDiv = styled.div`
  display: grid;
  grid-template-columns: 1.5em 1fr 6rem 1rem;
  grid-column-gap: 0.5rem;
  justify-content: stretch;
  
  margin: 0.5rem 0;
  padding: 0.5rem;
  
  background: ${props => props.theme.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 5px;
`;

const SN = styled.span`
  text-align: center;
`;

const ListItem = ({ id, sn, quote, username, deleteQuote }) => (
  <ListItemDiv>
    <SN>{sn}</SN>
    <span>{quote}</span>
    <span>{username}</span>
    <button type="button" onClick={() => deleteQuote(id)}>x</button>
  </ListItemDiv>
);

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  sn: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  deleteQuote: PropTypes.func.isRequired
};

export default ListItem;
