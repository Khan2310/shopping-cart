import React, { Component } from "react";

export const GlobalContext = React.createContext();

export default class StateProvider extends Component {
  state = {
    countItem: 0,
    itemList: []
  };

  changeStateFn = {
    addingItem: (countItem, itemNames, itemPrice) => {
      this.setState({ countItem });
      this.setState({
        itemList: [
          ...this.state.itemList,
          { name: itemNames, price: itemPrice }
        ]
      });
    },
    deleteItem: (countItem, indx) => {
      this.setState({ countItem });
      this.state.itemList.splice(indx,1);
    }
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{ globalState: this.state, changeStateFn: this.changeStateFn }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
