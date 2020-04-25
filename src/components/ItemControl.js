import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisivleOnPage: false
    };
  }

  render() {
      let currentlyVisibleState = null;
      let addItemButton = null;
      if (this.state.formVisivleOnPage) {
        currentlyVisibleState = <NewItemForm />
      } else {
        currentlyVisibleState = <ItemList />
        addTicketButton = <button onClick={this.handleClick}>Add Item</button>
      }
      return (
      <React.Fragment>
        {currentlyVisibleState}
        {addItemButton}
      </React.Fragment>
    );
  }
}

export default ItemControl;