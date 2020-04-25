import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h4>Brand:{props.brand}</h4>
      <h4>Flavor:{props.flavor}</h4>
      <h4>Price:{props.price}</h4>
      <h5>Quantity:{props.quantity}</h5>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
}

export default Item;