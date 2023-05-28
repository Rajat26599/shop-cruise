import theme from "../theme";

const CartTotal = ({ cartItems }) => {
    //some fixed cost
    const fixedCosts = [
        { title: 'Shipping Cost', price: 20 },
        { title: 'Packaging Cost', price: 5 },
    ]

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
            <h2>Cart Total</h2>
            {
                cartItems.map((item, index) => (
                    <div key={index} className="cart-total-item-row">
                        <span className="cart-total-item-row-left">{item.title} x {item.value}</span>
                        <span className="cart-total-item-row-right">${(item.price*item.value).toFixed(2)}</span>
                    </div>
                ))
            }

            {/* Rows for fixed Costs */}
            {        
                fixedCosts.map((cost, index) => (
                    <div key={index} className="cart-total-item-row" style={{color:theme.fixedCostColor}}>
                        <span className="cart-total-item-row-left">{cost.title}</span>
                        <span className="cart-total-item-row-right">${cost.price.toFixed(2)}</span>
                    </div>
                ))    
            }

            <hr></hr>

            {/* Row that shows Total Cost */}
            <div className="cart-total-item-row">
                <span className="cart-total-item-row-left"></span>
                <span className="cart-total-item-row-right" style={{fontSize:'1.2rem', fontWeight:'bold'}}>${getCartTotal()}</span>
            </div>
        </div>
    )
}

export default CartTotal;