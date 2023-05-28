import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementCount, removeFromCart } from "../redux/actions/productActions";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cartItems.cartItems)
    const dispatch = useDispatch();

    const renderList = cartItems.map(product => {
        const { id, title, image, price, category, value } = product;
        const handleChange = (e, product) => {
            if(e.target.value>value) dispatch(addToCart(product));
            else dispatch(decrementCount(product));
        }
        const handleRemove = (product) => {
            dispatch(removeFromCart(product));
        }
        return (
            <div style={{display:'inline-flex', width:'100%', marginBottom:'2rem'}}>
                <div style={{width:'30%'}}>
                    <img className="ui fluid image" src={image} style={{maxHeight: "20vh", width: "auto"}} alt={title} />
                </div>
                <div style={{width:'70%'}}>
                    <h3>{title}</h3>
                    <h3>
                        <p className="ui teal tag label" style={{fontSize:"1rem"}}>${price}</p>
                    </h3>
                    {/* <h3 className="ui brown block header">{category}</h3> */}
                    <div className="ui input" style={{marginBottom:"1rem"}}>
                        <input type="number" min={1} defaultValue={value} onChange={(e) => handleChange(e, product)} />
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
   
    return (
        <div>
            {
                cartItems.length ? (                
                    <div style={{display:'inline-flex', width:'100%'}}>
                        <div style={{paddingLeft:'5rem', paddingRight:'2rem', width:'70%'}}>{renderList}</div>
                        <div style={{borderLeft:'2px solid gray', height:'100vh', width:'30%', paddingLeft:'2rem', background:'rgba(0,181,161,0.2)'}}>
                            <h2>Cart Total</h2>
                        </div>
                    </div>
                ) : emptyCart()
            }
        </div>
    )
}

export default Cart;