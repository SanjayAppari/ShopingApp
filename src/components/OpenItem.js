import React from 'react'
import img from '../components/assets/dummy-item-img.jpg'

function OpenItem() {
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
                  <span>Top Wear</span> 
                  <span>Wrogn</span>
                  <span>Male</span>
              </div>
              <h3 style={{marginBottom:'20px'}}>Black Shirt</h3>
              <h5 style={{marginBottom:'20px'}}>₹ 1233</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti similique quibusdam accusantium esse dolorem saepe? Ullam quisquam tempora ex.</p>
              <div className="border-separate"></div>
              <button className="btn addCart-btn">Add To Cart</button>
          </div>
       </div>
    </div>
  )
}

export default OpenItem
