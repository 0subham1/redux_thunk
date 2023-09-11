import { AT_ITEM_ADD, AT_ITEM_LIST } from "./Action";
const initialState = {
  itemList: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT_ITEM_LIST:
      console.log("AT_ITEM_LIST")
      state = {
        ...state,
        itemList: action.payload,
      };
      break;

    default:
      console.log("default")
      state = { ...state };
      break;
  }
  return state;
};

export default itemReducer;
