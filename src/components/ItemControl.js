import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
// import masterItemList from "./masterItemList";
import ItemDetail from './ItemDetail';
// import PropTypes from 'prop-types';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      selectedItem: null,
    };
  }

  handleClick = () => {
    if(this.state.selectedItem !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      });
    }else{
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList, 
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
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
  
  setVisibility = () => {
    if(this.state.selectedItem !== null) {
      return{
        buttonText: "Return to Items",
        component: <ItemDetail item={this.state.selectedItem}/>
      }
    }
    else if (this.state.formVisibleOnPage) {
      return {
        buttonText: "Return to Item List",
        component:  <NewItemForm onNewItemCreation={this.handleAddNewItemToList} />
      }
    }
    else {
      return {
        buttonText: "Add Item",
        component: <ItemList 
        itemList={this.state.masterItemList} 
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

// ItemControl.propTypes = {
  //   masterItemList: PropTypes.object
  // };
  
  
  export default ItemControl;