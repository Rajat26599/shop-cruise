import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import Carousel from "./Carousel";

const ProductListing = () => {
    const selectedCategory = useSelector((state) => state.categoryReducer.selectedCategory);
    return (
        <div className="ui grid container" style={{display:'flex', justifyContent:'center'}}>
            {selectedCategory==='' && <Carousel />}
            <ProductComponent />
        </div>
    )
}

export default ProductListing;