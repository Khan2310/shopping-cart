import React, { Component } from "react";
import styled from "styled-components";


export default class Item extends Component {

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
  //
  // eventHandler(e) {
  //   this.setState({ countItem: this.state.countItem + 1 });
  //   this.setState({ addItem: [...this.state.addItem, this.state.addItem] });
  //   console.log(this.state.countItem);
  //   console.log(this.state.addItem);
  //   console.log(this.state.itemName);
  //
  // }


  render() {
    return (
      <Itemcard className="item-card">
        <Imageitem src={this.props.itemImage} alt="itemOne" />
        <Nametitle className="name-title">{this.props.nameTitle}</Nametitle>
        <Pricetag className="item-price">{this.props.itemPrice}</Pricetag>
        <Button onClick={this.eventHandler}>add to cart +</Button>
      </Itemcard>
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
