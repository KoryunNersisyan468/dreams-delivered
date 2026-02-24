import axios from "axios";
import { fetchingHeader,fetchHeader,fetchErrorHeader } from "../slice/HeaderSlice";
const URL = process.env.REACT_APP_BASE_URL;

export const getFetchHeader = () => {
    return async (dispatch)=>{
        try{
            dispatch(fetchingHeader());
            const response =await axios.get(`${URL}header`); 
            dispatch(fetchHeader(response?.data));
        }
        catch(error){
            console.error(error,'error');
            dispatch(fetchErrorHeader(error));
        }

    }
}