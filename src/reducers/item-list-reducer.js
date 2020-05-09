export default (state = {}, action) => {
  const { name, brand, flavor, price, quantity, id } = action;
  switch(action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          flavor: flavor,
          price: price,
          quantity: quantity,
          id: id
        }
      });
      case 'DELETE_ITEM':
        const newState = { ...state };
        delete newState[id];
        return newState;
      default:
      return state;
  }
};