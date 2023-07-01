import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../redux/actions/action';

function Cart() {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const backendHost = process.env.REACT_APP_BACKEND_HOST;
    let ans = 0;
    let q=0;

    const fecthCart= async()=>{
        try {
            const response = await fetch(`${backendHost}/auth/cart`,{
             method:'GET',
             headers:{
               "auth-Token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMDRjYWU2YzMxNzgxZjlmOGQ2YjVmIn0sImlhdCI6MTY4ODIyNjk5MH0.fOdG8i8X5QUjWFpCiUXVk0sIp8rrGUVMIpYnixER7Qo",
             },
            });
            const json = await response.json();
            console.log(json);
            dispatch(setCart(json));
         }
         catch(err){
           console.log(err.message); 
         }
    }

    useEffect(()=>{
        fecthCart();
    },[]);



    return (
        <div className="cart container" style={{ marginTop: '50px' }}>
            <h3>My Cart <i class="fa-solid fa-cart-shopping"></i></h3>
            <div className="cart-inside row">
                <div className="col-md-9 cart-side1 ">
                    {
                        state.User.cart.length===0 ? <h1>Cart Is Empty</h1> : state.User.cart.map((ele, i) => {
                            return <CartItem key={i} ele={ele} />
                        })
                    }
                </div>
                <div className="col-md-3 cart-side2 ">
                    <center><h5>Shipping Details</h5></center>
                    <div className="each-item">
                        <h6>Total No of Items</h6>
                        <h6>
                            {
                                state.User.cart.map((ele)=>{
                                    q+=ele.quantity; ans += ele.price * ele.quantity;
                                })
                            }
                            {
                                q
                            }
                        </h6>
                    </div>
                    <div className="each-item">
                        <h6>Actual Total Price</h6>
                        <h6>
                            {ans}
                        </h6>
                    </div>
                    <div className="each-item">
                        <h6>Shipping Charges</h6>
                        <h6>{ ans===0 ? 0 : 10} </h6>
                    </div>
                    <div className="each-item">
                        <h6>Total Price</h6>
                        <h6>
                            {
                                ans===0?0:ans-10
                            }
                        </h6>
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
