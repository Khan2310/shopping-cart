import React, { Component } from "react";
import Button from "./button";
import styled from "styled-components";
import { GlobalContext } from "../stateProvider";

export default class Cart extends Component {
  render() {
    const contextValue = GlobalContext;

    const itemList = (
      <GlobalContext.Consumer>
        {context =>
          context.globalState.itemList.map((item, key) => {
            return (
              <div className={key}>
                {item.name} price: {item.price}
                <Button eventMethod = {() => context.changeStateFn.deleteItem(context.globalState.countItem - 1, key)} title = "delete" />
              </div>
            );
          })
        }
      </GlobalContext.Consumer>
    );

    return (
      <div>
        <h2>Cart</h2>
        <GlobalContext.Consumer>
          {context => (
            <React.Fragment>
              <h4>
                Total Items :
                <span>
                  {console.log(context)} {context.globalState.countItem}
                </span>
              </h4>
              <div>{itemList}</div>
            </React.Fragment>
          )}
        </GlobalContext.Consumer>
      </div>
    );
  }
}
