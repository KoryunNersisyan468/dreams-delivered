import axios from "axios";
import { fetchErrorWish, fetchWish, fetchingWish } from "../Slice/AllWishSlice";
const URL = process.env.REACT_APP_BASE_URL;

export const getAllWish = () => {
    return async (dispatch)=>{
        try{
            dispatch(fetchingWish());
            const response =await axios.get(`${URL}admin/getAllDreams`); 
            dispatch(fetchWish(response?.data));

        }
        catch(error){
            console.error(error,'error');
            dispatch( fetchErrorWish(error))
        }

    }
}

export const deleteAllWish = (id) => {
    return async (dispatch)=>{
        try{
            await axios.delete(`${URL}admin/deleteDreams/${id}`); 
            dispatch(getAllWish());
        }
        catch(error){
            console.error(error,'error');
            dispatch( fetchErrorWish(error))
        }

    }
}