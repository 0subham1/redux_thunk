import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const itemList = useSelector((state) => state.itemReducer.itemList);
  console.log(itemList, "itemList in cart");
  return (
    <div>
      {itemList?.length > 0 &&
        itemList?.map((a) => {
          return <div>{a.name}</div>;
        })}
    </div>
  );
};

export default Cart;
