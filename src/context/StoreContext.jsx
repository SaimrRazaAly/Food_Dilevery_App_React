import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  // by this function we can ADD an item in the menu section
  const AddToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((previous) => ({ ...previous, [itemId]: 1 }));
    } else {
      setCartItem((previous) => ({
        ...previous,
        [itemId]: previous[itemId] + 1,
      }));
    }
  };

  // by this function we can REMOVE an item in the menu section

  const RemoveFromCart = (itemId) => {
    setCartItem((previous) => ({
      ...previous,
      [itemId]: previous[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) =>product._id === item);
        totalAmount += itemInfo.price * cartItem[item]
      
      }
    }
    return totalAmount;
  };
  useEffect(() => {
    console.log(cartItem)
  }, [getTotalCartAmount()])

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    AddToCart,
    RemoveFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
