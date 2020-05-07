import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditItemForm(props) {
  const { item } = props;

  function handleEditItemFormSubmissioin(event) {
    event.preventDefault();
    props.onEditItem({
      names: event.target.names.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      quantity: event.target.quantity.value,
      price: event.target.price.value,
      id: item
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHadler={handleEditItemFormSubmissioin}
        buttonText='Update Item' />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  onEditItem: PropTypes.func
};

export default EditItemForm;