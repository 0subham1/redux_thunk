import React, { useEffect } from "react";
import { getItemList } from "./redux/RootActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.itemList);

  console.log(itemList, "itemList");
  useEffect(() => {
    dispatch(getItemList);
  }, []);
  return <div>hello</div>;
};

export default App;
