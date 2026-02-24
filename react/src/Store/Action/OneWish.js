import axios from "axios";
import {fetchingOne,fetchOneWish,fetchErrorOneWish} from "../Slice/OneWishSlice"
const URL = process.env.REACT_APP_BASE_URL;

export const getOneWish = () => {
  return async (dispatch) => {

    try {
      dispatch(fetchingOne())
      const response = await axios.get(`${URL}admin/getRandomInactiveDreams`);
      dispatch(fetchOneWish(response?.data));

    } catch (error) {
      dispatch(fetchErrorOneWish(error))
      console.error(error, "error");
    }
  };
};

