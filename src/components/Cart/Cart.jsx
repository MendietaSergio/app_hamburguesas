import React from "react";
import Burger from "../Burger/Burger";
import "./Cart.css"

const Cart =({
    cart,setCart
}) =>{



    return(
        <>
            <div className="cart">
                <h3>Cart</h3>
                {cart.length === 0 ?
                (<p>0</p>):
                (cart.map((burger => <Burger key={burger.id} burger={burger} cart={cart} setCart={setCart} />)))}
            </div>

        </>
    )
}
export default Cart;