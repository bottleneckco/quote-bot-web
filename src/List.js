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
      {props.quotes.map((q) => (
        // <ListItem key={index} quote={q} />))}
        <div key={q.id}>
          <p>{q.user}</p>
          <p>{q.msg}</p>
          <button onClick={()=>props.deleteQuote(q.id)}>test</button>
        </div>
      ))}
    </div>
  )
}

export default List;