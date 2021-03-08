import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import { useState } from 'react';

const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        // console.log('product add', product);
        const newCart =[...cart, product];
        setCart(newCart)

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                            product={product}
                            handleAddProduct={handleAddProduct}
                            >
                        </Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;