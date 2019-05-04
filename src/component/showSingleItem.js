import React, { Component } from "react";
import styled from "styled-components";

export default class ShowSingleItem extends Component {
  render() {
    return (
      <div className="single-item-page">
        <Title>I am single item component page !</Title>
      </div>
    );
  }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #6c5ce7;
`;
