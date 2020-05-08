import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

  let action;
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

    expect(itemListReducer({}, action)).toEqual({[id]: {
      name: name,
      brand:brand,
      flavor: flavor,
      price: price,
      quantity: quantity,
      id: id
    }
  });
  });
});