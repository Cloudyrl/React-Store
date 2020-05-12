import axios from 'axios';
import url from '../utils/urls'

const loginUser = async ({email,password}) => {
    try{
        const response = await axios.post(`${url}/auth/local`,{
            identifier:email,
            password
        })
        return response;
    }catch(error){
        console.log(error);
    }
}

export default loginUser;