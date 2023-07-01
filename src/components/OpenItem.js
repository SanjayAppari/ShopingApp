import React from 'react'
import img from '../components/assets/dummy-item-img.jpg'
import { useSelector } from 'react-redux'

function OpenItem() {

  const state = useSelector(state=>state);

  return (
    <div  className='openItem container'  style={{marginTop:'50px'}}>
       <div className="openLeft">
          <div className="image">
            <img src={img} alt="" />
          </div>
       </div>
       <div className="openRight">
          <div className="details">
              <div className="min-details">
                  <span>{state.Items.openItem.category}</span> 
                  <span>{state.Items.openItem.brand}</span>
                  <span>{state.Items.openItem.gender}</span>
              </div>
              <h3 style={{marginBottom:'20px'}}>{state.Items.openItem.title}</h3>
              <h5 style={{marginBottom:'20px'}}>₹ {state.Items.openItem.price}</h5>
              <p>{state.Items.openItem.description}</p>
              <div className="border-separate"></div>
              <button className="btn addCart-btn">Add To Cart</button>
          </div>
       </div>
    </div>
  )
}

export default OpenItem
