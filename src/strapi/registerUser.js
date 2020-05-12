import axios from 'axios';
import url from '../utils/urls';

const registerUser = async({email,password,username}) =>{
    try{
        const response = await axios.post(`${url}/auth/local/register`,{
            username,email,password
        })
        return response;
    }catch(error){
        console.log(error)
    } 
}

export default registerUser;
