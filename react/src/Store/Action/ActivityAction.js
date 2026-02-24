import axios from "axios";
import { fetchActivity, fetchErrorActivity, fetchingActivity } from "../Slice/ActivitySlice";
const URL = process.env.REACT_APP_BASE_URL;

export const addActivity = (obj,setError) => {
    return async () => {
        try {
           await axios.post(`${URL}action/addAction`,obj);
           setError("ok")
        }
        catch (error) {
            setError(error)
            
        }

    }
}
export const editActivity = (obj,id,setError) => {
    return async () => {
       const newObj = {...obj}
    
        if (obj.hasOwnProperty('id')) {
            delete newObj?.id
        }
        try {
           await axios.put(`${URL}action/editAction/${id}`,newObj);
           setError("ok")
        }
        catch (error) {
            setError(error)
            
        }

    }
}



export const getActivity = (year) => {
    return async (dispatch) => {
        try {
            dispatch(fetchingActivity())
         const res =   await axios.get(`${URL}action/getAction/${year}`,);
            dispatch (fetchActivity(res?.data));
        }
        catch (error) {
            console.error(error, 'error');
            dispatch(fetchErrorActivity(error))
        }

    }
}