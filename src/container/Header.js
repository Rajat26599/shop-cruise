import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const cartItems = useSelector((state) => state.cartItems.cartItems);
    const cartItemCount = () => {
        var count = 0;
        cartItems.forEach(element => {
            count += element.value;
        });
        console.log(count);
        return count;
    }
    const count = cartItemCount();
    // console.log(cartItems);
    useEffect(() =>{
        // console.log(cartItems);
    }, [cartItems, count])
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h1 style={{margin: "0.5rem 0"}}>Shop Cruise</h1>
            </div>
            <div className="right menu">
                <Link to="/cart">
                <a className="ui item">
                    <i className="large cart arrow down icon"></i>
                    <span style={{width:"2rem"}}>
                        {count!==0 && <span style={{backgroundColor:"red", color:"white", padding:"0.3rem", borderRadius:"100%"}}><b>{count}</b></span>}
                    </span>
                </a>
                </Link>
            </div>
        </div>
    )
}

export default Header;