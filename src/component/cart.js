import React, { Component } from "react";
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
                <button>delete</button>
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

const Button = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  :hover {
    background: red;
  }
`;
