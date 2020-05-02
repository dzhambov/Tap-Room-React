import React from "react";
import PropTypes from "prop-types";

function Item(props){
  const { buyItem } = props;
  return (
    <React.Fragment>
        <div className="col-md-4">
      <div onClick = {() => props.whenItemClicked(props.id)}>
          <h2><em onClick={props.whenItemClicked}>{props.name}</em></h2>
          <h4><em>Brand:</em> {props.brand}</h4>
          <h4><em>Flavor:</em> {props.flavor}</h4>
          <h4><em>Price:</em> {props.price}</h4>
          <h5><em>Quantity:</em> {props.quantity}</h5>
          <hr/>
          <div className="buttons">
            {props.quantity <= 0 && 
            <p>Sorry, this Item is out of stock</p>
            }
            {props.quantity > 0 &&
            <button onClick={() => props.buyItem(props.id)}>Buy</button>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  buyItem: PropTypes.func,
  names: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  key: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
}

export default Item;