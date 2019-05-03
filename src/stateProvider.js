import React, { Component } from "react";
import Itemimage1 from "./component/image/bag01.jpg";
import Itemimage2 from "./component/image/bag02.jpg";
import Itemimage3 from "./component/image/laptop01.jpg";
import Itemimage4 from "./component/image/laptop02.jpg";
import Itemimage5 from "./component/image/mobile01.jpg";
import Itemimage6 from "./component/image/mobile02.jpg";
import Itemimage7 from "./component/image/watch01.jpg";
import Itemimage8 from "./component/image/watch02.jpg";

export const GlobalContext = React.createContext();

export default class StateProvider extends Component {
  state = {
    countItem: 0,
    itemList: [],
    searchInputValue: "",
    shoppingItems: [
      {
        imageItem: Itemimage1,
        nameTitle: "Bag 01",
        itemPrice: "$297"
      },
      {
        imageItem: Itemimage2,
        nameTitle: "Bag 02",
        itemPrice: "$623"
      },
      {
        imageItem: Itemimage3,
        nameTitle: "Laptop 01",
        itemPrice: "$823"
      },
      {
        imageItem: Itemimage4,
        nameTitle: "Laptop 02",
        itemPrice: "$423"
      },
      {
        imageItem: Itemimage5,
        nameTitle: "Mobile 01",
        itemPrice: "$217"
      },
      {
        imageItem: Itemimage6,
        nameTitle: "Mobile 02",
        itemPrice: "$323"
      },
      {
        imageItem: Itemimage7,
        nameTitle: "Watch 01",
        itemPrice: "$523"
      },
      {
        imageItem: Itemimage8,
        nameTitle: "Watch 02",
        itemPrice: "$293"
      }
    ]
  };

  staticItemList = [
    {
      imageItem: Itemimage1,
      nameTitle: "Bag 01",
      itemPrice: "$297"
    },
    {
      imageItem: Itemimage2,
      nameTitle: "Bag 02",
      itemPrice: "$623"
    },
    {
      imageItem: Itemimage3,
      nameTitle: "Laptop 01",
      itemPrice: "$823"
    },
    {
      imageItem: Itemimage4,
      nameTitle: "Laptop 02",
      itemPrice: "$423"
    },
    {
      imageItem: Itemimage5,
      nameTitle: "Mobile 01",
      itemPrice: "$217"
    },
    {
      imageItem: Itemimage6,
      nameTitle: "Mobile 02",
      itemPrice: "$323"
    },
    {
      imageItem: Itemimage7,
      nameTitle: "Watch 01",
      itemPrice: "$523"
    },
    {
      imageItem: Itemimage8,
      nameTitle: "Watch 02",
      itemPrice: "$293"
    }
  ];

  changeStateFn = {
    addingItem: (countItem, itemNames, itemPrice) => {
      this.setState({ countItem });
      this.setState({
        itemList: [
          ...this.state.itemList,
          { name: itemNames, price: itemPrice }
        ]
      });
    },
    deleteItem: (countItem, indx) => {
      this.setState({ countItem });
      this.state.itemList.splice(indx, 1);
    },
    searchItemEventHandler: e => {
      if (this.state.searchInputValue !== "") {
        //console.log(this.state.searchInputValue);
        let shoppingItems = this.state.shoppingItems.filter(item => {
          return (
            item.nameTitle.toUpperCase() ===
            this.state.searchInputValue.toUpperCase()
          );
        });
        this.setState({ shoppingItems });
        //shoppingItems;
        //console.log(filteredItem);
      }
      // this.setState({ countItem });
      // this.state.itemList.splice(indx, 1);
    },
    searchBoxInputHandler: event => {
      // console.log(event.target.value);
      this.setState({ searchInputValue: event.target.value });
    }
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{ globalState: this.state, changeStateFn: this.changeStateFn }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
