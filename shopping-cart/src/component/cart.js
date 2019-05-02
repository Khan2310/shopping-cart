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
              <span>{console.log(context)} {context.globalState.countItem}</span>
              </h4>
              <div>
                <h5>{context.globalState.itemNames[0]} price: {context.globalState.itemPrice[0]}</h5>
              </div>
            </React.Fragment>
          }


        </GlobalContext.Consumer>
      </div>
    );
  }
}


const Button = styled.button`
background: palevioletred;
color: white;
font-size: 1em;
margin:1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
:hover{
  background: red;
}
`;
