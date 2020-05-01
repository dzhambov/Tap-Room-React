import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import masterItemList from "./masterItemList";
import ItemDetail from './ItemDetail';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      selectedItem: null,
      // itemList: Item
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
    this.setState({masterItemList: newMasterItemList, 
    formVisibleOnPage: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem
    });
  }

  // handleNewItemSubmission = (newItem) => {
  //   const newMasterItemList = this.state.masterItemList.concat(newItem);
  //   this.setState({masterItemList: newMasterItemList,
  //   formVisibleOnPage: false
  //   });
  // }

  handleBuyItem = (id) => {
    const selectedItem = this.state.itemList.filter(item => item.id === id)[0];
    const newItemInfo = selectedItem.quantity -1;
    const removingOldItem = this.state.itemList.filter(item => item.id !== id)
    const newItem = {...selectedItem, quantity: newItemInfo}
    const newItemList = removingOldItem.concat(newItem)
    this.setState({itemList: newItemList})
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

// ItemControl.propTypes = {
//   masterItemList: PropTypes.object
// };


export default ItemControl;










