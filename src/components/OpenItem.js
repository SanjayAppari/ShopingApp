import React, { useEffect, useState } from 'react'
import img from '../components/assets/dummy-item-img.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../redux/actions/action';
import { useNavigate } from 'react-router-dom';

function OpenItem() {

  const state = useSelector(state=>state);
  const dispatch = useDispatch();
  const backendHost = process.env.REACT_APP_BACKEND_HOST;
  const navigate = useNavigate();
  const [item,setItem] = useState('');

  const handleAddToCart = async()=>{
      try {
         const title=state.Items.openItem.title;
         const description=state.Items.openItem.description;
         const price=state.Items.openItem.price;
         const brand=state.Items.openItem.brand;
         const category=state.Items.openItem.category;
         const gender=state.Items.openItem.gender;
         const image=state.Items.openItem.image;

         console.log(title,description,price,brand,category,gender,image)
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
      navigate('/cart')
  }

  useEffect(()=>{
      setItem(JSON.parse(localStorage.getItem('presentItem')))
  },[]);

  return (
    <div  className='openItem container'  style={{marginTop:'50px'}}>
       <div className="openLeft">
          <div className="image">
            <img src={item.image} alt="" />
          </div>
       </div>
       <div className="openRight">
          <div className="details">
              <div className="min-details">
                  <span>{item.category}</span> 
                  <span>{item.brand}</span>
                  <span>{item.gender}</span>
              </div>
              <h3 style={{marginBottom:'20px'}}>{item.title}</h3>
              <h5 style={{marginBottom:'20px'}}>₹ {item.price}</h5>
              <p>{item.description}</p>
              <div className="border-separate"></div>
              <button className="btn addCart-btn" onClick={handleAddToCart}>Add To Cart</button>
          </div>
       </div>
    </div>
  )
}

export default OpenItem
