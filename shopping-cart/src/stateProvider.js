import React, {Component} from "react";

export const GlobalContext = React.createContext();

export default class StateProvider extends Component{
  state = {
    countItem: 0,
    itemPrice: [],
    itemNames: []
  };

  changeStateFn = {
    addingItem: (countItem, itemNames, itemPrice) => {
      this.setState({ countItem });
      this.setState({ itemPrice: [...this.state.itemPrice, itemPrice] });
      this.setState({ itemNames: [...this.state.itemNames, itemNames] });
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
