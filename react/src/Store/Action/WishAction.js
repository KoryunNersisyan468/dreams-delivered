import axios from "axios";
import { fetchErrorInActive, fetchInActive, fetchingInActive } from "../Slice/InActiveSlice";
import { fetchActive, fetchErrorActive, fetchingActive } from "../Slice/ActiveSlice";
const URL = process.env.REACT_APP_BASE_URL;

export const addWish = (obj,setError) => {
  return async (dispatch) => {
    try {
      await axios.post(`${URL}admin/addDreams`,obj);
      setError('ok')
    } catch (error) {
      console.error(error);
        await setError(error)
    }
  };
};


export const changeIsActive = (id) => {
  return async () => {
    try {
      await axios.put(`${URL}admin/activateTheDream/${id}`);
    } catch (error) {
      console.error(error, "error");
    }
  };
};




export const getInActiveDream  = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchingInActive());
      const res = await axios.get(`${URL}admin/getInActiveDreams`,);
      dispatch(fetchInActive(res?.data))
    } catch (error) {
      console.error(error, "error");
      fetchErrorInActive(error)
    }
  };
};

export const getActiveDream  = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchingActive());
      const res = await axios.get(`${URL}admin/getActiveDreams`,);
      dispatch(fetchActive(res?.data))
    } catch (error) {
      console.error(error, "error");
      fetchErrorActive(error)
    }
  };
};

export const editWish = (obj) => {
  return async () => {
    try {
      await axios.put(`${URL}admin/editDreams/${obj?.id}`,obj);
    } catch (error) {
      console.error(error, "error");
    }
  };
};

