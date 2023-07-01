import React from 'react'
import img from '../components/assets/dummy-item-img.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setCart } from '../redux/actions/action';

function CartItem(props) {
  const dispatch = useDispatch();
  const backendHost = process.env.REACT_APP_BACKEND_HOST;
  const navigate = useNavigate();


  const handleMinus = async ()=>{
      try {
          const response = await fetch(`${backendHost}/auth/deleteCartItem/${props.ele._id}`,{
            method:'DELETE',
            headers:{
              'auth-Token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMDRjYWU2YzMxNzgxZjlmOGQ2YjVmIn0sImlhdCI6MTY4ODIyNjk5MH0.fOdG8i8X5QUjWFpCiUXVk0sIp8rrGUVMIpYnixER7Qo'
            }
          });
          const json = await response.json();
          console.log(json);
          dispatch(setCart(json));
      } catch (error) {
         console.log(error.message);
      }
  }

  const handleAdd= async()=>{
    try {
      const title=props.ele.title;
      const description=props.ele.description;
      const price=props.ele.price;
      const brand=props.ele.brand;
      const category=props.ele.category;
      const gender=props.ele.gender;
      const image=props.ele.image;

      const response = await fetch(`${backendHost}/auth/addToCart`,{
       method:'POST',
       headers:{
         "Content-Type":"application/json",
         "auth-Token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMDRjYWU2YzMxNzgxZjlmOGQ2YjVmIn0sImlhdCI6MTY4ODIyNjk5MH0.fOdG8i8X5QUjWFpCiUXVk0sIp8rrGUVMIpYnixER7Qo",
       },
       body: JSON.stringify({title,description,price,brand,category,gender,image})
      });
      const json = await response.json();
      console.log(json);
      dispatch(setCart(json));
   }
   catch(err){
     console.log(err.message); 
   }
  //  navigate('/cart')
  }

  return (
    <div className='cartItem row'>
        <div className="item-left col-md-3">
                <img src={props.ele.image} alt="" />
        </div>
        <div className="item-right col-md-9">
            <div className="details">
                <h3>{props.ele.title}</h3>
                <p>Brand : {props.ele.brand}</p>
                <p>Gender : {props.ele.gender}</p>
                <p>Item Price : ₹{props.ele.price}</p>
            </div>
            <div className="pricing">
                <h5>Quantity : <span onClick={handleMinus} style={{cursor:'pointer'}}>-</span> {props.ele.quantity} <span onClick={handleAdd} style={{cursor:'pointer'}}>+</span></h5>
                <h4 >Total Price : ₹{props.ele.quantity*props.ele.price}</h4>
            </div>
        </div>
    </div>
  )
}

export default CartItem
