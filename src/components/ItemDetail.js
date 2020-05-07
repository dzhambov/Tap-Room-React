import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props){
  const { item } = props;

  return(
    <React.Fragment>
      <h1>Item Details:</h1>
      <h3>Item: <em>{item.name}</em></h3>
      <h3>Brand: <em>{item.brand}</em></h3>
      <h3>Flavor: <em>{item.flavor}</em></h3>
      <h3>Quantity Left: <em>{item.quantity}</em></h3>
      <h3>Price: <em>{item.price}</em></h3>
      <hr />
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
}

export default ItemDetail;