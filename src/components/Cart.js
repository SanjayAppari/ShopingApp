import React from 'react'
import CartItem from './CartItem'

function Cart() {
  return (
    <div className="cart container" style={{marginTop:'50px'}}>
        <h3>My Cart <i class="fa-solid fa-cart-shopping"></i></h3>
        <div className="cart-inside row">
            <div className="col-md-9 cart-side1 ">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
            </div>
            <div className="col-md-3 cart-side2 ">
                <center><h5>Shipping Details</h5></center>
                <div className="each-item">
                    <h6>Total No of Items</h6>
                    <h6>10</h6>
                </div>
                <div className="each-item">
                    <h6>Actual Total Price</h6>
                    <h6>10000</h6>
                </div>
                <div className="each-item">
                    <h6>Shipping Charges</h6>
                    <h6>10</h6>
                </div>
                <div className="each-item">
                    <h6>Total Price</h6>
                    <h6>9990</h6>
                </div>

                <button className="btn btn-dark">
                    CheckOut
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cart
