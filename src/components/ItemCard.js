import React from 'react'
import img from '../components/assets/dummy-item-img.jpg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setOpenItem } from '../redux/actions/action';

function ItemCard(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

 const handleClick=(ele)=>{
    dispatch(setOpenItem(ele));
    localStorage.setItem('presentItem',JSON.stringify(ele));
    navigate(`/openItem/${ele._id}`);
 }
  return (
    
    <div className='itemCard' onClick={()=>handleClick(props.ele)}>
        <div className="image">
            <img src={props.ele.image} alt="" />
        </div>
        <div className="details">
            <h4>{props.title}</h4>
            <h6>₹{props.price}</h6>
        </div>
    </div>
  )
}

export default ItemCard
