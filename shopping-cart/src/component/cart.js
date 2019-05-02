import React, { Component } from "react";
import styled from "styled-components";
import { GlobalContext } from "../stateProvider";


export default class Cart extends Component {
  render() {
    return (
      <div>
        <h2>Cart</h2>
        <GlobalContext.Consumer>
          {context =>
            <React.Fragment>
              <h4>Total Items :
              <span>{console.log(context)}{context.globalState.countItem}</span>
              </h4>
            </React.Fragment>
          }


        </GlobalContext.Consumer>
      </div>
    );
  }
}
