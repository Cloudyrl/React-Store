import React,{useContext} from 'react'
import {ProductContext} from '../../context/product'
import Loading from '../../components/loading/loading.component'
import ProductList from '../../components/product-list/product-list.component'

const Shop = () => {
    const { loading,products } = useContext(ProductContext)
    
    if(loading){
        return <Loading/>
    }
    return <ProductList title="our products" products={products}/>
}

export default Shop