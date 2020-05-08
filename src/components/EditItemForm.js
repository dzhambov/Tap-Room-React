import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditItemForm(props) {
  const { item } = props;

  function handleEditItemFormSubmissioin(event) {
    event.preventDefault();
    props.onEditItem({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      quantity: parseInt(event.target.quantity.value),
      price: event.target.price.value,
      id: item.id
    });
  }

  return (
    <React.Fragment>
      <h3>Edit Item</h3>
      <ReusableForm
        formSubmissionHandler={handleEditItemFormSubmissioin}
        buttonText='Update Item' />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  onEditItem: PropTypes.func
};

export default EditItemForm;