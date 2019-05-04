import React, { Component } from "react";
import "./App.css";
import Search from "./component/search";
import BodyComponent from "./component/bodyComponent";
import StateProvider from "./stateProvider";

class App extends Component {
  render() {
    return (
      <StateProvider>
        <div className="App">
          <Search />
          <BodyComponent />
        </div>
      </StateProvider>
    );
  }
}

export default App;
