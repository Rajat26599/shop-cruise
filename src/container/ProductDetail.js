import axios from "axios";
import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct, removeSelectedProduct, addToCart } from "../redux/actions/productActions";

const ProductDetail = () => {
    const product = useSelector(state => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => {
            console.log(err);
        })
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if(productId && productId!=="") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable grid">
                        <div className="ui vertical divider"></div>
                        <div className="row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} style={{maxHeight: "70vh", width: "auto"}}/>
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label" style={{fontSize:"1.1rem"}}>${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div 
                                    // className="ui red vertical animated button" 
                                    className="ui red button" 
                                    tabIndex="0" 
                                    onClick={(e) => handleAddToCart(product)}
                                    style={{marginLeft:0}}>
                                    {/* <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div> */}
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail;