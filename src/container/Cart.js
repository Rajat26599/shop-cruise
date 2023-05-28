import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementCount, removeFromCart } from "../redux/actions/productActions";
import { useNavigate } from "react-router-dom";
import theme from "../theme";
import CartTotal from "./CartTotal";

const Cart = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cartItems.cartItems)
    const dispatch = useDispatch();

    const handleChange = (e, product) => {
        if(e.target.value>product.value) dispatch(addToCart(product));
        else dispatch(decrementCount(product));
    }
    const handleRemove = (product) => {
        dispatch(removeFromCart(product));
    }

    const renderCartItemList = cartItems.map(product => {
        return (
            <div style={{display:'inline-flex', width:'100%', marginBottom:'2rem'}}>
                <div style={{width:'30%'}}>
                    <img className="ui fluid image" src={product.image} style={{maxHeight: "20vh", width: "auto"}} alt={product.title} />
                </div>
                <div style={{width:'70%'}}>
                    <h3>{product.title}</h3>
                    <h3>
                        <p className="ui teal tag label" style={{fontSize:"1rem"}}>${product.price}</p>
                    </h3>
                    <div className="ui input" style={{marginBottom:"1rem"}}>
                        <input type="number" min={1} defaultValue={product.value} onChange={(e) => handleChange(e, product)} />
                    </div>
                    <div 
                        className="ui red button" 
                        tabIndex="0" 
                        onClick={() => handleRemove(product)}
                        style={{marginLeft:0}}>
                        <div className="visible content">Remove</div>
                    </div>
                </div>
            </div>
        )
    })

    const emptyCart = () => {
        return (
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                <h2>Your Cart is empty.</h2>
                <div 
                    className="ui red button" 
                    tabIndex="0" 
                    onClick={() => navigate('/')}
                    style={{marginLeft:0}}>
                    <div className="visible content">Shop Now</div>
                </div>            
            </div>
        )
    }
    
    //function to get total of the cart items
    const getCartTotal = () => {
        var total = 0;
        cartItems.map(item => {
            total+=(item.price*item.value)
        })
        return total.toFixed(2);
    }
   
    return (
        <div>
            {
                //if cart has item show them along the the cartTotal on the right otherwise display emptyCart message
                cartItems.length ? (                
                    <div style={{display:'inline-flex', width:'100%'}}>
                        {/* renderList function will return the elements to show the cart items in the left */}
                        <div style={{paddingLeft:'5rem', paddingRight:'2rem', width:'70%'}}>{renderCartItemList}</div>
                        {/* below is the code for code for cart total on the right */}
                        <div style={{borderLeft:'2px solid gray', height:'100vh', width:'30%', paddingLeft:'2rem', background:'rgba(0,181,161,0.2)'}}>
                            <CartTotal cartItems={cartItems} />
                        </div>
                    </div>
                ) : emptyCart()
            }
        </div>
    )
}

export default Cart;