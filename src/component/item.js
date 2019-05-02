import React, { Component } from "react";
import {GlobalContext} from "../stateProvider";
import styled from "styled-components";


export default class Item extends Component {


  render() {
    return (
      <GlobalContext.Consumer>
      {context => (
      <Itemcard className="item-card">
        <Imageitem src={this.props.itemImage} alt="itemOne" />
        <Nametitle className="name-title">{this.props.nameTitle}</Nametitle>
        <Pricetag className="item-price">{this.props.itemPrice}</Pricetag>
        <Button onClick={() => context.changeStateFn.addingItem(context.globalState.countItem + 1,this.props.nameTitle, this.props.itemPrice,)}>add to cart +</Button>
      </Itemcard>
      )}
      </GlobalContext.Consumer>
    );
  }
}

const Itemcard = styled.div`
  border: 1px solid #9c9fa3;
  width: 24%;
  height: auto;
  overflow: hidden;
  padding-bottom: 2em;
`;

const Imageitem = styled.img`
  width: 100%;
  height: auto;
`;

const Nametitle = styled.div`
  margin-left: 1em;
`;

const Pricetag = styled(Nametitle)`
  color: #9c9fa3;
`;

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
