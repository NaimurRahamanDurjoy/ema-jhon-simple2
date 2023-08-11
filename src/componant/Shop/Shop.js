import React, { useEffect, useState } from 'react';
import './shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data);
        })
    } , []);

    // console.log(products)
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    // Display products from search field
    const handleDisplayProducts = (event) =>{
        const searchProduct = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }

    useEffect( () => {
        if(products.length){
            const savedProducts = getShoppingCart();
            let storedProduct = [];
            for(const id in savedProducts){
                const existedProducts = products.find(product => product.id === id);
                const quantity = savedProducts[id];
                existedProducts.quantity = quantity;
                storedProduct.push(existedProducts);
            }
            setCart(storedProduct);
        }
    }, [products])

    return (

        <>
            <div className="search-product">
                <input onChange={handleDisplayProducts} type="text" placeholder='Search Product' />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        displayProducts.map(product => <Products 
                            key = {product.id}
                            product = {product}
                            handleAddToCart = {handleAddToCart}
                        ></Products>)
                    }
                </div>
                {/* Shopping cart */}
                <div className="cart-container">
                    <Cart cart = {cart}></Cart>

                </div>

            </div>

        </>
    );
};

export default Shop;