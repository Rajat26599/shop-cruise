import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementCount, removeFromCart } from "../redux/actions/productActions";

const Cart = () => {
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
            <div className="ui container" style={{marginBottom:"1rem"}}>
                <div className="ui placeholder segment" key={id}>
                    <div className="ui grid">
                        {/* <div className="ui vertical divider"></div> */}
                        <div className="row">
                            <div className="four wide column">
                                <img className="ui fluid image" src={image} style={{maxHeight: "20vh", width: "auto"}}/>
                            </div>
                            <div className="twelve wide column">
                                <h2>{title}</h2>
                                <h2>
                                    <a className="ui teal tag label" style={{fontSize:"1.1rem"}}>${price}</a>
                                </h2>
                                {/* <h3 className="ui brown block header">{category}</h3> */}
                                <div class="ui input" style={{marginBottom:"1rem"}}>
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
                    </div>
                </div>
            </div>
        )
    })
   
    return (
        <>{renderList}</>
    )
}

export default Cart;