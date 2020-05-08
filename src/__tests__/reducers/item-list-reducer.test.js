import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

  let action;

  const currentState = {
    1: { name: 'Beer',
    brand: 'Sam Adams',
    flavor: 'lager',
    price: '$6',
    quantity: '9',
    id: 1 },
    2: { name: 'Kombucha',
    brand: 'BAO',
    flavor: 'bluberry',
    price: '$4',
    quantity: '3',
    id: 2 }
  }

  const itemData = {
    name: 'Beer',
    brand: 'Sam Adams',
    flavor: 'lager',
    price: '$6',
    quantity: '9',
    id: 1
  };

  test('Should return defualt state if there is no action type passed into the reducer', () => {
    expect(itemListReducer({}, {type: null })).toEqual({});
  });

  test('Should successfully and new item data to masterItemLIst', () => {
    const { name, brand, flavor, price, quantity, id } = itemData;
    action = {
      type: 'ADD_ITEM',
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      quantity: quantity,
      id: id
    };

    expect(itemListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand:brand,
        flavor: flavor,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  });
  test('Should successfully delete an item', () => {
    action = {
      type: 'DELETE_ITEM',
      id: 1
    };
    expect(itemListReducer(currentState, action)).toEqual({
      2: {  name: 'Kombucha',
      brand: 'BAO',
      flavor: 'bluberry',
      price: '$4',
      quantity: '3',
      id: 2 }
    });
  });
});