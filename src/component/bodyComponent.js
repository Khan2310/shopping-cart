import React, { Component } from "react";
import { GlobalContext } from "../stateProvider";
import Item from "./item";
import Cart from "./cart";
import styled from "styled-components";

export default class BodyCompo extends Component {
  render() {
    let itemList;
    if (this.context.globalState.shoppingItems.length === 0) {
      itemList = <h1>Item not found...</h1>;
    } else {
      itemList = this.context.globalState.shoppingItems.map((info, key) => {
        return (
          <Item
            itemImage={info.imageItem}
            nameTitle={info.nameTitle}
            itemPrice={info.itemPrice}
            key={key}
          />
        );
      });
    }

    return (
      <Bodycontainer className="body-container">
        <Itemcontainer className="item-container-body">
          {itemList}
        </Itemcontainer>
        <Itemcart className="item-cart-body">
          <Cart />
        </Itemcart>
      </Bodycontainer>
    );
  }
}

BodyCompo.contextType = GlobalContext;

const Bodycontainer = styled.div`
  display: flex;
`;

const Itemcontainer = styled.div`
  width: 75%;
  padding: 0;
  //border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  margin-left: 1em;
  justify-content: center;

  @media (max-width: 900px) {
    width: 60%;
  }
  @media (max-width: 685px) {
    width: 50%;
  }
`;

const Itemcart = styled.div`
  border: 1px solid #9c9fa3;
  margin-right: 1em;
  padding: 0;
  width: 25%;
  @media (max-width: 900px) {
    width: 35%;
  }
  @media (max-width: 685px) {
    width: 50%;
    margin-left: 0.5rem;
  }
`;
