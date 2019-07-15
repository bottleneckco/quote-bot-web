import React from 'react';

// const ListItem = (props) => {
//   const quote = props.quote;
//   return (
//     <div>
//       <p>{quote.user}</p>
//       <p>{quote.msg}</p>
//     </div>
//   )
// }

const List = (props) => {
  return (
    <div>
      <h3>List heading</h3>
      {props.quotes.map((q, index) => (
        // <ListItem key={index} quote={q} />))}
        <div key={index}>
          <p>{q.user}</p>
          <p>{q.msg}</p>
        </div>
      ))}
    </div>
  )
}

export default List;