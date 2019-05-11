import React, { Component } from "react";
import CartItem from "./cartItem";
import styled from "styled-components";
import { GlobalContext } from "../stateProvider";

export default class Cart extends Component {
  render() {
    const itemList = (
      <GlobalContext.Consumer>
        {context =>
          context.globalState.itemList.map((item, idx) => {
            let itemString = `${item.name} price: ${item.price}`;
            return (
              <CartItem
                key={idx}
                item={itemString}
                method={() =>
                  context.changeStateFn.deleteItem(
                    context.globalState.countItem - 1,
                    idx
                  )
                }
                title="delete"
              />
            );
          })
        }
      </GlobalContext.Consumer>
    );

    return (
      <CartBody>
        <TitleContent>
          <Title>Cart</Title>
          <TitleCount>
            Total Items :
            <span> {this.context.globalState.countItem}</span>
          </TitleCount>
        </TitleContent>
        <div>{itemList}</div>
      </CartBody>
    );
  }
}

Cart.contextType = GlobalContext;

const CartBody = styled.div`
  padding: 0;
  margin: 0;
  //border: 2px solid blue;
  //background: red;
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  background: #ff7f50;
`;
const Title = styled.h2`
  color: white;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const TitleCount = styled.h4`
  padding: 1em;
  margin: 0;
  display: flex;
  @media (max-width: 400px) {
    padding: 0;
    justify-content: center;
  }
`;
