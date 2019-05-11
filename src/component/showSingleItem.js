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
  //border: 1px solid #9c9fa3;
  width: 45%;
  height: auto;
  overflow: hidden;
  padding-bottom: 2em;

  // @media (max-width: 900px) {
  //   width: 49.5%;
  // }
  @media (max-width: 1000px) {
    width: 90%;
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
  margin-top: 0.3em;
  font-weight: bold;
  color:black
  text-decoration: none;
  @media (max-width: 420px) {
    font-size: 1em;
  }
`;

const Pricetag = styled(Nametitle)`
  color: #9c9fa3;
`;

const Button = styled.button`
  background: palevioletred;
  display: flex;
  font-size: 1.2em;
  font-weight: bold;
  justify-content: center;
  margin: auto;
  color: white;
  padding: 1em 2em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  :hover {
    background: #d63031;
  }
  @media (max-width: 500px) {
    font-size: 1em;
  }

  @media (max-width: 420px) {
    padding: 0.3em;
    font-weight: normal;
  }
`;
