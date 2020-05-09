import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import itemListReducer from '../../reducers/item-list-reducer';


let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterItemList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of itemListReducer matches root reducer', () => {
    expect(store.getState().masterItemList).toEqual(itemListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', ()  => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type:null }));
  });

  test('Check that initial state of itemListReducer mather root reducer', () => { 
    const action = {
      type: 'ADD_ITEM',
      name: 'Beer',
      brand: 'Sam Adams',
      flavor: 'lager',
      price: '$6',
      quantity: '9',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterItemList).toEqual(itemListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});