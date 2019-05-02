import React, { Component } from "react";
import styled from "styled-components";

export default class Search extends Component {
  render() {
    return (
      <Searchcontainer className="search-container">
        <Input className="search-box" placeholder="Search Item..."></Input>
        <Button>Search</Button>
        <Dropdown>
          <option value="low to high">Low to High</option>
          <option value="high to low">High to Low</option>
          <option value="A-Z">A-Z</option>
        </Dropdown>
      </Searchcontainer>
    );
  }
}

const Searchcontainer = styled.div`
  margin:1em;
  padding:1em;
  display:flex;
  justify-content:center;
`;

const Input = styled.input`
font-size: 2em;
`;

const Dropdown = styled.select`
margin-left: 2em;
border: 2px solid palevioletred;
font-size: 1em;
`;

const Button = styled.button`
background: palevioletred;
color: white;
font-size: 1em;
padding: 0 1em;
margin-left:.3em;
border: 2px solid palevioletred;
border-radius: 3px;
:hover{
  background: red;
}
`;
