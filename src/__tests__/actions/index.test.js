import * as actions from './../../actions';
import Item from '../../components/Item';

describe('help item actions', () => {
  it('deleteItem should create DELETE_ITEM action', () => {
    expect(actions.deleteItem(1)).toEqual({
      type: 'DELETE_ITEM',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addItem should create ADD_ITEM action', () => {
    expect(actions.addItem({name: 'Beer',
    brand: 'Sam Adams',
    flavor: 'lager',
    price: '$6',
    quantity: '9',
    id: 1})).toEqual({
      type: 'ADD_ITEM',
      name: 'Beer',
      brand: 'Sam Adams',
      flavor: 'lager',
      price: '$6',
      quantity: '9',
      id: 1
    });
  });
});