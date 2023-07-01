import React from 'react'
import img from '../components/assets/dummy-item-img.jpg'

function CartItem() {
  return (
    <div className='cartItem row'>
        <div className="item-left col-md-3">
                <img src={img} alt="" />
        </div>
        <div className="item-right col-md-9">
            <div className="details">
                <h3>Black Cort</h3>
                <p>Brand : Bondam Babai</p>
                <p>Gender : Male</p>
                <p>Item Price : ₹1399</p>
            </div>
            <div className="pricing">
                <h5>Quantity : - 2 +</h5>
                <h4 >Total Price : ₹2798</h4>
            </div>
        </div>
    </div>
  )
}

export default CartItem
