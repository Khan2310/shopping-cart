import React, { Component } from "react";
import Button from "./button";
import {GlobalContext} from "../stateProvider";
import styled from "styled-components";


export default class CartItem extends Component {


  render() {
    return (
      <ShowItem className={this.props.keyp}>
        <ItemName>{this.props.item}</ItemName>
        <Button eventMethod = {this.props.method} title = {this.props.title} />
      </ShowItem>
    );
  }
}

const ItemName = styled.p`
  border: 2x solid red;
`;
const ShowItem = styled.div`
  display: flex;
  justify-content:space-between;
  border: 2x solid yellow;

`;
