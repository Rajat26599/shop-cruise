import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import theme from "../theme";

const ProductComponent = () => {
    const navigate = useNavigate();
    const products = useSelector((state) => state.allProducts.products);

    const selectedCategory = useSelector((state) => state.categoryReducer.selectedCategory);

    const renderList = products
        .filter(product => selectedCategory=='' || product.category==selectedCategory)
        .map((product) => {
        const { id, title, image, price, category } = product;
        return(
            <div className="five wide column" key={id}>
                <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
                    <div className="product-image-container">
                        <img className="product-image" src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price" style={{color:theme.priceColor, fontWeight:'bold', fontSize:'1.2rem'}}>$ {price}</div>
                        {/* <div className="meta">{category}</div> */}
                    </div>
                </div>

                {/* <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
                </Link> */}
            </div>
        );
    })

    return (
        <>{renderList}</>
    )
}

export default ProductComponent;