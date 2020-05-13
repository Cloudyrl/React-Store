import axios from 'axios';
import url from '../utils/urls';

const submitOrder = async ({name,total,items,stripeToken,userToken}) =>{
    try{
        const response = await axios.post(`${url}/orders`,{
            name,
            total,
            items,
            stripeToken
        },{
            headers:{
                Authorization:`Bearer ${userToken}`
            }
        })
        return response
    }catch(e){
        console.log(e)
    }
}

export default submitOrder;