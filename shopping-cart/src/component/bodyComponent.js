import React, { Component } from "react";
import Item from "./item";
import Cart from "./cart";
import Itemimage1 from "./image/bag01.jpg";
import styled from "styled-components";

export default class BodyCompo extends Component {

  // constructor(props) {
  //   super(props);
  //   this.eventHandler = this.eventHandler.bind(this);
  //   this.state = {
  //     countItem: 0,
  //     addItem: [],
  //     itemName: this.props.nameTitle,
  //
  //   };
  // }

  
  render() {
    return (
      <Bodycontainer className="body-container">
         <Itemcontainer className="item-container-body">
            <Item
              itemImage = {Itemimage1}
              nameTitle="bag 01"
              itemPrice= "Price: $12"/>
            <Item
              itemImage = {Itemimage1}
              nameTitle="bag 02"
              itemPrice= "Price: $122"/>
            <Item
              itemImage = {Itemimage1}
              nameTitle="bag 03"
              itemPrice= "Price: $32"/>
            <Item
              itemImage = {Itemimage1}
              nameTitle="bag 04"
              itemPrice= "Price: $42"/>
            <Item
              itemImage = {Itemimage1}
              nameTitle="bag 05"
              itemPrice= "Price: $82"/>
            <Item
              itemImage = {Itemimage1}
              nameTitle="bag 06"
              itemPrice= "Price: $92"/>
            <Item
              itemImage = {Itemimage1}
              nameTitle="bag 07"
              itemPrice= "Price: $32"/>
            <Item
              itemImage = {Itemimage1}
              nameTitle="bag 08"
              itemPrice= "Price: $125"/>
         </Itemcontainer>
         <Itemcart className="item-cart-body">
            <Cart/>
         </Itemcart>
      </Bodycontainer>
    );
  }
}

const Bodycontainer = styled.div`
  display: flex;
`;


const Itemcontainer = styled.div`
  width:70%;
  padding:0;
  //border: 2px solid #9c9fa3;
  display: flex;
  flex-wrap: wrap;
  margin: 0 1em;
`;

const Itemcart = styled.div`
  border: 1px solid #9c9fa3;
  margin:0;
  padding:0;
  width: 30%;
`;
