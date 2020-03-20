import React,{useState,useEffect} from 'react'
import axios from 'axios'
import url from '../utils/urls'

export const ProductContext = React.createContext()


const ProductProvider = ({children}) => {
    const [loading,setLoading] = useState(false)
    const [products,setProducts] = useState([])
    const [featured,setfeatured] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true)
            const products = await axios.get(
                `${url}/products`
            )
            setProducts(products)
            // setLoading(false)
            console.log(products)
        }
        fetchData()
    },[])

    return (
        <ProductContext.Provider value={{products,loading,featured}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider