"use client";
import { useEffect, useState } from "react";
import useCartOfLocalStorage from "./useCartOfLocalStorage";

const useClose = (cartItems) => {
  const [currentItems, setCurrentItems] = useState(cartItems || []);
  const { addCartToLocalStorage } = useCartOfLocalStorage();

  useEffect(() => {
    if (cartItems === null) {
      const newItems = JSON.parse(localStorage.getItem("cart"));
      setCurrentItems(newItems);
    } else {
      setCurrentItems(cartItems);
    }
  }, [cartItems]);
  const handleClose = (items, id) => {
    const filteredItems = items.filter((itme, idx) => id !== idx);

    setCurrentItems(filteredItems);
    addCartToLocalStorage(filteredItems);
  };

  return [currentItems, handleClose];
};

export default useClose;
