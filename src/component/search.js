import React, { Component } from "react";
import { GlobalContext } from "../stateProvider";
import styled from "styled-components";

export default class Search extends Component {
  handleKeyUp = e => {
    this.context.changeStateFn.searchBoxInputHandler(e);
    if (e.keyCode === 13 && this.context.globalState.searchInputValue !== "") {
      this.context.changeStateFn.searchItemEventHandler(e);
    }
  };

  render() {
    return (
      <GlobalContext.Consumer>
        {context => (
          <Searchcontainer className="search-container">
            <Input
              className="search-box"
              onKeyUp={this.handleKeyUp}
              placeholder="Search Items..."
            />
            <Button
              onClick={context.changeStateFn.searchItemEventHandler.bind(this)}
            >
              Search
            </Button>
            <Dropdown>
              <option value="low to high">Low to High</option>
              <option value="high to low">High to Low</option>
              <option value="A-Z">A-Z</option>
            </Dropdown>
          </Searchcontainer>
        )}
      </GlobalContext.Consumer>
    );
  }
}

Search.contextType = GlobalContext;

const Searchcontainer = styled.div`
  margin: 1em;
  padding: 1em;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  font-size: 2em;
`;

const Dropdown = styled.select`
  margin-left: 2em;
  border: 2px solid palevioletred;
  font-size: 1em;
`;

const Button = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1em;
  padding: 0 1em;
  margin-left: 0.3em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  :hover {
    background: red;
  }
`;
