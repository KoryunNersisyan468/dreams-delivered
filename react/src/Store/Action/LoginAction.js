import axios from "axios";
const URL = process.env.REACT_APP_BASE_URL;

export const LoginReq = (auth) => {
    return async ()=>{
        try{
           const response = await axios.post(`${URL}auth/login`,auth); 
           if (response?.data?.role==="admin"){
            localStorage.setItem("auth",JSON.stringify(response?.data));
           }
        }
        catch(error){
            console.error(error,'error');
        }

    }
}