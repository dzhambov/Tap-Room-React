import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import masterItemList from "./masterItemList";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      itemList: props.list
    };
  }

  handleClick = () => {
    this.setState(prevState =>({formVisivleOnPage: !prevState.formVisivleOnPage}));
  }

  handleNewItemSubmission = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({masterItemList: newMasterItemList, formVisibleOnPage: false});
  }

  handleBuyItem = (id) => {
    const selectedItem = this.state.itemList.filter(item => item.id === id)[0];
    const newItemInfo = selectedItem.quantity -1;
    const removingOldItem = this.state.itemList.filter(item => item.id !== id)
    const newItem = {...selectedItem, quantity: newItemInfo}
    const newItemList = removingOldItem.concat(newItem)
    this.setState({itemList: newItemList})
  }

  setVisibility = () => {
      if (this.state.formVisivleOnPage) {
        return {
          buttonText: "Return to Item List",
          component:  <NewItemForm onNewItemCreation={this.handleNewItemSubmission} />
        }
      } else {
        return {
          buttonText: "Add Item",
          component: <ItemList itemList={this.state.masterItemList}
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


export default ItemControl;