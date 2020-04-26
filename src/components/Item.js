import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return (
    <React.Fragment>
      <h2><em>{props.name}</em></h2>
      <h4><em>Brand:</em> {props.brand}</h4>
      <h4><em>Flavor:</em> {props.flavor}</h4>
      <h4><em>Price:</em> {props.price}</h4>
      <h5><em>Quantity:</em> {props.quantity}</h5>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number
}

export default Item;