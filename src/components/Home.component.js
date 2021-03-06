import React, { useEffect, useState } from 'react'
import { productsContext } from '../context/product.context'
import ProductListEB from '../errorBoundries/ProductList.EB'
import Products from './products/Products.component'

function Home() {
    const fakeStoreApi = process.env.REACT_APP_FAKE_API

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            await fetch(fakeStoreApi).then(response => {
                return response.json();
            }).then(prods => {
                setProducts(prods)
            });
        }
        fetchData();
    }, [])

    return (
        <productsContext.Provider value={products}>
            <div>
                <ProductListEB>
                    <Products />
                </ProductListEB>
            </div>
        </productsContext.Provider >
    )
}

export default Home
