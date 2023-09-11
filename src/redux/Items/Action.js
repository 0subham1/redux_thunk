import axios from "axios";
import { BASE_URL } from "../../Const";

export const AT_ITEM_LIST = 'AT_ITEM_LIST';
export const AT_ITEM_ADD = 'AT_ITEM_ADD';

export const getItemList = () => async (dispatch) => {
  axios
    .get(BASE_URL + "items")
    .then((res) => {
        console.log(res?.data,"res?.data")
      dispatch({
        type: AT_ITEM_LIST,
        payload: res?.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
