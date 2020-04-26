import React from "react";
import { v4 } from "uuid";
import { PropTypes } from "prop-types";

function NewItemForm(props) {

  function handleNewItemSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.itemName.value,
      brand: event.target.itemBrand.value,
      flavor: event.target.itemFlavor.value,
      price: event.target.itemPrice.value,
      quantity: event.target.quantity.value,
      id: v4(),
    })
  }

  return (
    <React.Fragment>
      <h3>Create New Item:</h3>
      <form onSubmit={handleNewItemSubmission}>
        <input type="text" name="itemName" placeholder="name" /><br/>
        <input type="text" name="itemBrand" placeholder="brand" /><br/>
        <input type="text" name="itemFlavor" placeholder="flavor" /><br/>
        <input type="text" name="itemPrice" placeholder="price" /><br/>
        <input type="number" name="quantity" placeholder="quantity" /><br/>
        <button type="submit">Add Item</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;