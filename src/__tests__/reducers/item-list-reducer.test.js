import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {
  test('Should return defualt state if there is no action type passed into the reducer', () => {
    expect(itemListReducer({}, {type: null })).toEqual({});
  });
});