import React, { Component } from "react";
import { GlobalContext } from "../stateProvider";
import Item from "./item";
import SingleItem from "./showSingleItem";
import Cart from "./cart";
import styled from "styled-components";

export default class BodyCompo extends Component {
  render() {
    let shoppingItems = this.context.globalState.shoppingItems;
    let itemList;
    if (shoppingItems.length === 0) {
      itemList = <ItemNotFound>Item not found...</ItemNotFound>;
    } else if (shoppingItems.length === 1) {
      itemList = (
        <SingleItem
          itemImage={shoppingItems[0].imageItem}
          nameTitle={shoppingItems[0].nameTitle}
          itemPrice={shoppingItems[0].itemPrice}
          eventMethod={() =>
            this.context.changeStateFn.addingItem(
              this.context.globalState.countItem + 1,
              shoppingItems[0].nameTitle,
              shoppingItems[0].itemPrice
            )
          }
          title="Add To Cart +"
        />
      );
    } else {
      itemList = shoppingItems.map((info, key) => {
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
  //border: 1px solid #9c9fa3;
  background: #f1f2f6;
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

const ItemNotFound = styled.h2`
  color: red;
`;
