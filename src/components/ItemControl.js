import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';


class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedItem !== null) {
      this.setState({
        selectedItem: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddNewItemToList = (newItem) => {
    const { dispatch } = this.props;
    const action = a.addItem(newItem);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.props.masterItemList[id];
    this.setState({
      selectedItem: selectedItem
    });
  }

  handleBuyItem = (id) => {
    const currentSelectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    const newItemSell = currentSelectedItem.quantity -1;
    const newItem = {...currentSelectedItem, quantity: newItemSell}
    const OldItem = this.state.masterItemList.filter(item => item.id !== id)
    this.setState({
      masterItemList: [...OldItem, newItem],
    });
  }

  handleRestockItem = (id) => {
    const currentSelectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    const newItemInfo = currentSelectedItem.quantity + 124;
    const newItem = {...currentSelectedItem, quantity: newItemInfo}
    const OldItem = this.state.masterItemList.filter(item => item.id !== id)
    this.setState({
      masterItemList: [...OldItem, newItem],
    });
  }

  handleDeletingItem = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteItem(id);
    dispatch(action);
    this.setState({selectedItem: null});
  }

  handleEditClick = () => {
    this.setState({editing:true});
  }

  handleEditingItemInList = (itemToEdit) => {
    const { dispatch } = this. props;
    const action = a.addItem(itemToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedItem: null
    });
  }
  
  setVisibility = () => {
    if(this.state.editing){
      return {
        component: <EditItemForm item = {this.state.selectedItem} 
        onEditItem = {this.handleEditingItemInList} />,
        buttonText: "Return to Items"
      }
    }
    else if(this.state.selectedItem !== null) {
      return{
        buttonText: "Return to Items",
        component: <ItemDetail 
        item={this.state.selectedItem}
        onClickingDelete={this.handleDeletingItem}
        onClickingEdit = {this.handleEditClick}/>
      }
    }
    else if (this.props.formVisibleOnPage) {
      return {
        buttonText: "Return to Item List",
        component:  <NewItemForm onNewItemCreation={this.handleAddNewItemToList} />
      }
    }
    else {
      return {
        buttonText: "Add Item",
        component: <ItemList 
        itemList={this.props.masterItemList} 
        onItemSelection={this.handleChangingSelectedItem}
        onRestockItem ={this.handleRestockItem}
        onBuyItem={this.handleBuyItem}/>
      }
    }
  }
  
  render() {
    let currentlyVisibleState = this.setVisibility();
    return (
      <React.Fragment>
        {currentlyVisibleState.component}
        <button onClick={this.handleClick}>{currentlyVisibleState.buttonText}</button>
      </React.Fragment>
    );
  }
}

ItemControl.propTypes = {
  masterItemList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterItemList: state.masterItemList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ItemControl = connect(mapStateToProps)(ItemControl);
   
export default ItemControl;