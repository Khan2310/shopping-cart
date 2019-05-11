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
      <Searchcontainer className="search-container">
        <Input
          className="search-box"
          onKeyUp={this.handleKeyUp}
          placeholder="Search Items..."
        />
        <Button
          onClick={this.context.changeStateFn.searchItemEventHandler.bind(this)}
        >
          Search
        </Button>
        <Dropdown onChange={this.context.changeStateFn.sortItemEventHandler}>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
          <option value="az">A-Z</option>
        </Dropdown>
      </Searchcontainer>
    );
  }
}

Search.contextType = GlobalContext;

const Searchcontainer = styled.div`
  margin: 1em;
  padding: 1em;
  display: flex;
  justify-content: center;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  font-family: "Comfortaa", cursive;
  font-size: 2em;
  @media (max-width: 650px) {
    font-size: 1.5em;
  }
`;

const Dropdown = styled.select`
  font-family: "Comfortaa", cursive;
  margin-left: 2em;
  border: 2px solid palevioletred;
  font-size: 1em;
  @media (max-width: 650px) {
    margin: 0;
    padding: 0.5em;
  }
`;

const Button = styled.button`
  font-family: "Comfortaa", cursive;
  background: palevioletred;
  color: white;
  font-size: 1em;
  padding: 0 1em;
  margin-left: 0.3em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  :hover {
    background: #d63031;
  }

  @media (max-width: 650px) {
    margin: 1em;
    padding: 0.5em;
  }
`;
