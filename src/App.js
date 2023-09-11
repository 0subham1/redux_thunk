import React, { useEffect } from "react";
import { getItemList } from "./redux/RootActions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.itemReducer);

  console.log(itemList, "itemList");
  useEffect(() => {
    console.log("hello")
    dispatch(getItemList());
  }, []);
  return <div>hello</div>;
};

export default App;
