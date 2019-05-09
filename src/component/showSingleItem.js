import React, { Component } from "react";
import { GlobalContext } from "../stateProvider";
import styled from "styled-components";

export default class ShowSingleItem extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalContext.Consumer>
          {context => (
            <Itemcard className="item-card">
              <Imageitem
                src={this.props.itemImage}
                alt={this.props.nameTitle}
              />
              <Nametitle className="name-title">
                {this.props.nameTitle}
              </Nametitle>

              <Pricetag className="item-price">{this.props.itemPrice}</Pricetag>
              <Button onClick={this.props.eventMethod}>
                {this.props.title}
              </Button>
            </Itemcard>
          )}
        </GlobalContext.Consumer>
      </React.Fragment>
    );
  }
}

const Itemcard = styled.div`
  border: 1px solid #9c9fa3;
  width: 70%;
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
  display:flex;
  font-size: 2em;
  justify-content: center;
  margin: auto;
  font-weight: bold;
  color:black
  text-decoration: none;
`;

const Pricetag = styled(Nametitle)`
  color: #9c9fa3;
`;

const Button = styled.button`
  background: palevioletred;
  display: flex;
  font-size: 2em;
  justify-content: center;
  margin: auto;
  color: white;
  font-size: 1em;
  padding: 1em 2em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  :hover {
    background: red;
  }
`;
