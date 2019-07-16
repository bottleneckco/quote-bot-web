import React from 'react';
import PropTypes from 'prop-types';
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

const ListItem = ({ id, sn, quote, username, deleteQuote }) => (
  <ListItemDiv>
    <span>{sn}</span>
    <span>{quote}</span>
    <span>{username}</span>
    {sn !== 'SN' ? <button type="button" onClick={() => deleteQuote(id)}>x</button> : '' }
  </ListItemDiv>
);

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  sn: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  deleteQuote: PropTypes.func.isRequired
};

export default ListItem;
