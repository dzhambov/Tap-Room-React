import React from "react";
import Item from "./Item";

const masterItemList = [
  {
    name: "Beer",
    brand: "Heineken",
    flavor: "Refreshing",
    price: "$6",
    quantity: "124"
  },
  {
    name: "Kombucha",
    brand: "Bao",
    flavor: "Refreshing",
    price: "$4",
    quantity: "124"
  }
];


function ItemList(){
  return (
    <React.Fragment>
      <hr/>
      {masterItemList.map((item, itemId) =>
      <Item name={item.name}
            brand={item.brand}
            flavor={item.flavor}
            price={item.price}
            quantity={item.quantity}
            key={itemId}/>
      )}
    </React.Fragment>
  );
}

export default ItemList;