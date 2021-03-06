import React, { Component } from "react";
import styled from "styled-components";

export default class Item extends Component {
  render() {
    return (
      <React.Fragment>
        <Button onClick={this.props.eventMethod}>{this.props.title}</Button>
      </React.Fragment>
    );
  }
}

const Button = styled.button`
  font-family: "Comfortaa", cursive;
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  :hover {
    background: #d63031;
  }

  @media (max-width: 420px) {
    padding: 0.3em;
    font-weight: normal;
  }
`;
