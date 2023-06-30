import React from 'react'
import img from '../components/assets/dummy-item-img.jpg'
import { useNavigate } from 'react-router-dom'

function ItemCard() {
    const navigate = useNavigate();

 const handleClick=()=>{
    navigate('/openItem');
 }
  return (
    
    <div className='itemCard' onClick={handleClick}>
        <div className="image">
            <img src={img} alt="" />
        </div>
        <div className="details">
            <h4>Black Shirt</h4>
            <h6>₹1233</h6>
        </div>
    </div>
  )
}

export default ItemCard
