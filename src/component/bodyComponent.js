import React, { Component } from "react";
import { GlobalContext } from "../stateProvider";
import Item from "./item";
import Cart from "./cart";
import styled from "styled-components";

export default class BodyCompo extends Component {
  render() {
    const itemList = (
      <GlobalContext.Consumer>
        {context =>
          context.globalState.shoppingItems.map((info, key) => {
            return (
              <Item
                itemImage={info.imageItem}
                nameTitle={info.nameTitle}
                itemPrice={info.itemPrice}
                key={key}
              />
            );
          })
        }
      </GlobalContext.Consumer>
    );
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

const Bodycontainer = styled.div`
  display: flex;
`;

const Itemcontainer = styled.div`
  width: 70%;
  padding: 0;
  //border: 2px solid #9c9fa3;
  display: flex;
  flex-wrap: wrap;
  margin: 0 1em;
`;

const Itemcart = styled.div`
  border: 1px solid #9c9fa3;
  margin: 0;
  padding: 0;
  width: 30%;
`;
