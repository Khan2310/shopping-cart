import React, { Component } from "react";
import Itemimage1 from "./component/image/bag01.jpg";
import Itemimage2 from "./component/image/bag02.jpg";
import Itemimage3 from "./component/image/laptop01.jpg";
import Itemimage4 from "./component/image/laptop02.jpg";
import Itemimage5 from "./component/image/mobile01.jpg";
import Itemimage6 from "./component/image/mobile02.jpg";
import Itemimage7 from "./component/image/watch01.jpg";
import Itemimage8 from "./component/image/watch02.jpg";

import Itemimage9 from "./component/image/Kiwi-fruits.jpg";
import Itemimage10 from "./component/image/Lemon-fruits.jpg";
import Itemimage11 from "./component/image/Mango-Juice.jpg";
import Itemimage12 from "./component/image/Orange-Juice.jpg";
import Itemimage13 from "./component/image/Wooden-Pencils.jpg";
import Itemimage14 from "./component/image/Castell-Pencil.jpg";
import Itemimage15 from "./component/image/Peri-Peri-Chips.jpg";
import Itemimage16 from "./component/image/Potato-Chips.jpg";

export const GlobalContext = React.createContext();

export default class StateProvider extends Component {
  state = {
    countItem: 0,
    itemList: [],
    searchInputValue: "",
    shoppingItems: []
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
    },
    {
      imageItem: Itemimage9,
      nameTitle: "Kiwi Fruits",
      itemPrice: "$47"
    },
    {
      imageItem: Itemimage10,
      nameTitle: "Lemon Fruits",
      itemPrice: "$62"
    },
    {
      imageItem: Itemimage11,
      nameTitle: "Mango Juice",
      itemPrice: "$63"
    },
    {
      imageItem: Itemimage12,
      nameTitle: "Orange Juice",
      itemPrice: "$23"
    },
    {
      imageItem: Itemimage13,
      nameTitle: "Wooden Pencils",
      itemPrice: "$17"
    },
    {
      imageItem: Itemimage14,
      nameTitle: "Castell Pencil",
      itemPrice: "$27"
    },
    {
      imageItem: Itemimage15,
      nameTitle: "Peri Peri Chips",
      itemPrice: "$24"
    },
    {
      imageItem: Itemimage16,
      nameTitle: "Potato Chips",
      itemPrice: "$93"
    }
  ];

  componentDidMount() {
    this.setState({ shoppingItems: this.staticItemList });
  }

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
    sortItemEventHandler: e => {
      let shoppingItems = [];
      let shoppingItemsPriceSort;
      let shoppingItemsNameSort;
      let shoppingItemsPrice = this.state.shoppingItems.map(item => {
        return Number(item.itemPrice.slice(1));
      });

      if (e.target.value === "low") {
        shoppingItemsPriceSort = shoppingItemsPrice.sort(function(a, b) {
          return a - b;
        });
        shoppingItemsPriceSort.forEach(sortItem => {
          this.state.shoppingItems.forEach(presentStateItem => {
            let stateItemPrice = Number(presentStateItem.itemPrice.slice(1));
            if (stateItemPrice === sortItem) {
              shoppingItems.push(presentStateItem);
            }
          });
        });
        this.setState({ shoppingItems });
      } else if (e.target.value === "high") {
        shoppingItemsPriceSort = shoppingItemsPrice
          .sort(function(a, b) {
            return a - b;
          })
          .reverse();
        shoppingItemsPriceSort.forEach(sortItem => {
          this.state.shoppingItems.forEach(presentStateItem => {
            let stateItemPrice = Number(presentStateItem.itemPrice.slice(1));
            if (stateItemPrice === sortItem) {
              shoppingItems.push(presentStateItem);
            }
          });
        });
        this.setState({ shoppingItems });
      } else {
        let shoppingItemsName = this.state.shoppingItems.map(item => {
          return item.nameTitle;
        });
        shoppingItemsNameSort = shoppingItemsName.sort();
        shoppingItemsNameSort.forEach(sortItem => {
          this.state.shoppingItems.forEach(presentStateItem => {
            if (presentStateItem.nameTitle === sortItem) {
              shoppingItems.push(presentStateItem);
            }
          });
        });
        this.setState({ shoppingItems });
      }
    },
    searchItemEventHandler: e => {
      if (this.state.searchInputValue !== "") {
        let shoppingItems = [];
        this.staticItemList.forEach(item => {
          if (
            item.nameTitle
              .toLocaleLowerCase()
              .match(this.state.searchInputValue.toLocaleLowerCase())
          ) {
            shoppingItems.push(item);
          }
        });
        this.setState({ shoppingItems });
      }
    },
    searchBoxInputHandler: event => {
      this.setState({ searchInputValue: event.target.value });
    },
    showSingleItemEventHandler: event => {
      let shoppingItems = [];
      this.staticItemList.forEach(item => {
        if (
          item.nameTitle.toLocaleLowerCase() ===
          event.target.alt.toLocaleLowerCase()
        ) {
          shoppingItems.push(item);
        }
      });
      this.setState({ shoppingItems });
    },
    resetStaticItemList: () => {
      this.setState({ shoppingItems: this.staticItemList });
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
