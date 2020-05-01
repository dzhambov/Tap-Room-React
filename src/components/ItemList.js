import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.itemList.map((item) =>
      <Item 
        whenItemClicked = { props.onItemSelection }
        name={item.name}
        brand= {item.brand}
        flavor= {item.flavor}
        price= {item.price}
        quantity= {item.quantity}
        id={item.id}
        key={item.Id}
        buyItem={props.onBuyItem}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemList;