import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCategory } from "../redux/actions/productActions";
import logo from '../assets/logo.webp';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartItems.cartItems);
    const products = useSelector((state) => state.allProducts.products);
    const selectedCategory = useSelector((state) => state.categoryReducer.selectedCategory);
    const [ productsSet, setProductsSet ] = useState(new Set());

    const cartItemCount = () => {
        var count = 0;
        cartItems.forEach(element => {
            count += element.value;
        });
        return count;
    }
    const count = cartItemCount();

    useEffect(() => {
        var tempSet = productsSet;
        products.map(product => tempSet.add(product.category))
        setProductsSet(tempSet);
    })

    return (
        <div className="ui fixed menu" style={{height:'5rem'}}>
            <div className="ui container center" style={{alignItems:'center'}}>
                {/* <i className="large bars icon"></i> */}
                <img src={logo} style={{height:'100%'}} alt="shop-cruise-logo" />
                <h1 className="brand-name" style={{marginRight:"2rem", marginTop:0, marginBottom:0}} onClick={() => {navigate("/"); dispatch(selectCategory(''))}}>Shop Cruise</h1>
                <nav style={{ display:'inline-flex', alignItems:'center'}}>
                    {
                        Array.from(productsSet).map(category => (
                            <span 
                                key={category} 
                                className="category" 
                                style={{backgroundColor:`${category==selectedCategory?'rgba(0, 181, 173, 0.5)':'white'}`}}
                                onClick={() => {
                                    dispatch(selectCategory(category));
                                    navigate('/')
                                    // navigate(`category/${category.replace(/\s/g, '')}`)
                                }}>
                                {category}
                            </span>
                        ))
                    }
                </nav>
            </div>
            <div className="right menu my-cart">
                <div className="ui item" onClick={() => navigate('/cart')}>
                    <i className="large cart arrow down icon"></i>
                    <span style={{width:"2rem"}}>
                        {count!==0 && <span style={{backgroundColor:"red", color:"white", padding:"0.3rem", borderRadius:"100%"}}><b>{count}</b></span>}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;