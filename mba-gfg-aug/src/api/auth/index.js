import axios from 'axios';


export const login = async (user)=>{

const endPoint = process.env.REACT_APP_MBA_BACKEND_URL;

    const response = await axios.post(`${endPoint}/mba/api/v1/auth/signin`, user);
    
    return response;

}