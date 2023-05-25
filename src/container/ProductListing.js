import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    
    return (
        <div className="ui grid container" style={{display:'flex', justifyContent:'center'}}>
            <ProductComponent />
        </div>
    )
}

export default ProductListing;