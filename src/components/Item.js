import React from "react";

function Item(props){
  return (
    <React.Fragment>
      <h3>3a</h3>
      <h3>{props.name} and {props.brand}</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Item;