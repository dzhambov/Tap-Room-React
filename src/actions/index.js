export const deleteItem = id => ({
  type: 'DELETE_ITEM',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addItem = (item) => {
  const { name, brand, flavor, price, quantity, id } = item;
  return {
    type: 'ADD_ITEM',
    name: 'Beer',
    brand: 'Sam Adams',
    flavor: 'lager',
    price: '$6',
    quantity: '9',
    id: id
  }
}