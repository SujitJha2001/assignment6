import React, {useContext} from "react"
import {cartContext} from "../Global/cartContext"

    const Cart = () => {
        const {shoppingCart, totalPrice, qty, dispatch} = useContext(cartContext);
    return(
       <div className="cartContainer">
       <div className="cartDetails">
           {shoppingCart.length ? shoppingCart.map(product => (
       <div className="cart" key={product.id}>
        <span className="cartProImage"><img src={product.image} alt=""/>
           <span className="imageCount">{product.qty}</span>
        </span>
        <span className="cartProductName">{product.name}</span>
        <span className="cartProductPrice">${product.price}.00</span>
        <span className="inc" onClick={() => dispatch({type: 'INC', id:product.id})}><i className="fas fa-plus"></i></span>
        <span className="productQuantity">{product.qty}</span>
        <span className="dec" onClick={() => dispatch({type: 'DEC', id: product.id})}><i className="fas fa-minus"></i></span>
        <span className="productTotalPrice">${product.qty * product.price}.00</span>
        <button onClick={() => dispatch({type: 'DELETE_PRODUCT', id: product.id})} className="deleteCartPro"><i className="fas fa-trash-alt"></i></button>
           </div>  
        )) : 'Yourr Cart is currently empty!'}
    </div>   
    {shoppingCart.length ? <div className="cartSummary">
            <div className="summary">
                <h3>Order Summary</h3>
                <div className="totalItems">
                    <div className="items">Total Items</div>
               <div className="itemsCount">{qty}</div>
                </div>
                <div className="totalPriceSection">
                 <div className="justTitle">Total Price</div>
        <div className="itemsPrice">${totalPrice}.00</div>
                </div>
       <div className="stripSection">
       <button onClick={() => dispatch({type: 'EMPTY'})} className="deleteCartPro">CHECKOUT <i className="fas fa-cart-plus"></i></button>
       </div>
       </div></div>
        : ''}     
</div>
    )
}

export default Cart;