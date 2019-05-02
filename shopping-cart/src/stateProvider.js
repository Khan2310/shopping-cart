import React, {Component} from "react";

export const GlobalContext = React.createContext();

export default class StateProvider extends Component{
  state = {
    countItem: 0,
    itemPrice: 0,
    itemNames: []
  };

  changeStateFn = {
    addingItem: countItem => {
      this.setState({ countItem });
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
