import React, { createContext, useReducer } from "react";

export const crtx = createContext();

const defaultCart = {
  ıtems: [],
  totalAmount: 0,
};

const stopAction = (state, action) => {
  switch (action.type) {
    case "ADD":
      let updateItem = [...state.ıtems, action.ıtem];
      return {
        ıtems: updateItem,
        totalAmount: state.totalAmount + action.ıtem.price * action.ıtem.amount,
      };
    case "REMOVE":
      let deleteItem = state.ıtems.filter((i) => i.id !== action.id);
      let amountPrice = state.ıtems.find((i) => i.id === action.id);
      return {
        ıtems: deleteItem,
        totalAmount: state.totalAmount - amountPrice.price * amountPrice.amount,
      };
    case "HİGH_PRİCE":
      let updatePrice = state.ıtems.filter((i) => i.price < action.price);

      return {
        ıtems: updatePrice,
      };

    default:
      return state;
  }
};

const UseContext = (props) => {
  const [cartState, dispatchCart] = useReducer(stopAction, defaultCart);

  const values = {
    ıtems: cartState.ıtems,
    totalAmount: cartState.totalAmount,
    addItem: (ıtem) => {
      dispatchCart({ type: "ADD", ıtem });
    },
    removeItem: (id) => {
      dispatchCart({ type: "REMOVE", id });
    },
    beforeExpensive: (expensive) => {
      dispatchCart({ type: "HİGH_PRİCE", expensive });
    },
  };

  return (
    <div>
      <crtx.Provider value={values}>{props.children}</crtx.Provider>
    </div>
  );
};

export default UseContext;
