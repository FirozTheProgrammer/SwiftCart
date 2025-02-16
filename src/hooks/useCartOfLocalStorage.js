import { useEffect, useState } from "react";

const useCartOfLocalStorage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let localStorageCart = JSON.parse(localStorage.getItem("cart"));
    setCartItems(localStorageCart || null);
  }, []);

  //add cart to local storage
  const addCartToLocalStorage = (newItems) => {
    localStorage.setItem("cart", JSON.stringify([...newItems]));
  };
  // delete items from local storage
  const deleteCartFromLocalStorage = (newItems) => {
    localStorage.removeItem(JSON.parse([...newItems]));
  };

  return { cartItems, addCartToLocalStorage, deleteCartFromLocalStorage };
};

export default useCartOfLocalStorage;
