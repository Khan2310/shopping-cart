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
  border: 2x solid red;
`;
const ShowItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2x solid yellow;
`;
