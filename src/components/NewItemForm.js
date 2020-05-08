import React from "react";
import { v4 } from "uuid";
import { PropTypes } from "prop-types";
import ReusableForm from "./ReusableForm";

function NewItemForm(props) {

  function handleNewItemSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4(),
    })
  }

  return (
    <React.Fragment>
      <h3>Create New Item:</h3>
      <ReusableForm
      formSubmissionHandler={handleNewItemSubmission}
      buttonText = "Add Item" />
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;