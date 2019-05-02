import React, { Component } from "react";
import Search from "./component/search";
import BodyComponent from "./component/bodyComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <BodyComponent/>
      </div>
    );
  }
}

export default App;
