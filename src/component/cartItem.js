import React, { Component } from "react";
import Button from "./button";
import styled from "styled-components";

export default class CartItem extends Component {
  render() {
    return (
      <ShowItem className={this.props.key}>
        <ItemName>{this.props.item}</ItemName>
        <Button eventMethod={this.props.method} title={this.props.title} />
      </ShowItem>
    );
  }
}

const ItemName = styled.p`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
const ShowItem = styled.div`
  background: #eff3f4;
  margin: 0.3em 0;
  display: flex;
  justify-content: space-between;
  //border: 2px solid black;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;
