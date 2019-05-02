import React, { Component } from "react";
import Item from "./item";
import Cart from "./cart";
import Itemimage1 from "./image/bag01.jpg";
import Itemimage2 from "./image/bag02.jpg";
import Itemimage3 from "./image/laptop01.jpg";
import Itemimage4 from "./image/laptop02.jpg";
import Itemimage5 from "./image/mobile01.jpg";
import Itemimage6 from "./image/mobile02.jpg";
import Itemimage7 from "./image/watch01.jpg";
import Itemimage8 from "./image/watch02.jpg";
import styled from "styled-components";

export default class BodyCompo extends Component {

  constructor(props) {
    super(props);
    //this.eventHandler = this.eventHandler.bind(this);
    this.state = {
      shoppingItems: [{
        imageItem: Itemimage1,
        nameTitle: "bag 01",
        itemPrice: "$123"
      },
      {
        imageItem: Itemimage2,
        nameTitle: "bag 02",
        itemPrice: "$123"
      },
      {
        imageItem: Itemimage3,
        nameTitle: "Laptop 01",
        itemPrice: "$123"
      },
      {
        imageItem: Itemimage4,
        nameTitle: "Laptop 02",
        itemPrice: "$123"
      },
      {
        imageItem: Itemimage5,
        nameTitle: "Mobile 01",
        itemPrice: "$123"
      },
      {
        imageItem: Itemimage6,
        nameTitle: "Mobile 02",
        itemPrice: "$123"
      },
      {
        imageItem: Itemimage7,
        nameTitle: "watch 01",
        itemPrice: "$123"
      },
      {
        imageItem: Itemimage8,
        nameTitle: "watch 02",
        itemPrice: "$123"
      }
    ]
    };
  }


  render() {
    const itemList = this.state.shoppingItems.map((info, key) => {
      return <Item
        itemImage = {info.imageItem}
        nameTitle={info.nameTitle}
        itemPrice= {info.itemPrice}
        id= {key}
        />
    })
    return (
      <Bodycontainer className="body-container">
         <Itemcontainer className="item-container-body">
            {itemList}
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
