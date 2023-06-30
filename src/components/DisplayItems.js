import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCard from './ItemCard';

function DisplayItems() {
  const {name} = useParams();

  useEffect(()=>{

  },[]);
  return (
    <div className='displayItems' style={{marginTop:'50px'}}>
         <h3>All {name.charAt(0).toUpperCase()+name.slice(1)}</h3>
         <div className="container">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
         </div>
    </div>
  )
}

export default DisplayItems
