import axios from 'axios';


export const login = async (user)=>{

    const response = await axios.post("https://movie-booking-application.onrender.com/mba/api/v1/auth/signin", user);
    
    return response;

}