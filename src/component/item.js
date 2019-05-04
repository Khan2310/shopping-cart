import React, { Component } from "react";
import Button from "./button";
import { GlobalContext } from "../stateProvider";
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
            <Button
              eventMethod={() =>
                context.changeStateFn.addingItem(
                  context.globalState.countItem + 1,
                  this.props.nameTitle,
                  this.props.itemPrice
                )
              }
              title="add to cart +"
            />
          </Itemcard>
        )}
      </GlobalContext.Consumer>
    );
  }
}

const Itemcard = styled.div`
  border: 1px solid #9c9fa3;
  width: 24.5%;
  height: auto;
  overflow: hidden;
  padding-bottom: 2em;

  @media (max-width: 900px) {
    width: 49.5%;
  }
  @media (max-width: 685px) {
    width: 100%;
  }
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
