import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      selectedItem: null
    };
  }

  handleClick = () => {
    this.setState(prevState =>({formVisivleOnPage: !prevState.formVisivleOnPage}));
  }

  handleNewItemSubmission = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({masterItemList: newMasterItemList, formVisibleOnPage: false});
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
          component: <ItemList itemList={this.state.masterItemList}/>
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