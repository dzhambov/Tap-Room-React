import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props){
  const { itemList, onBuyItem } = props
  return (
    <React.Fragment>
      {/* <hr/> */}
      {props.itemList.map((item) =>
      <Item 
        name={item.name}
        brand= {item.brand}
        flavor= {item.flavor}
        price= {item.price}
        quantity= {item.quantity}
        id={item.id}
        key={item.Id}
        buyItem={onBuyItem}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;