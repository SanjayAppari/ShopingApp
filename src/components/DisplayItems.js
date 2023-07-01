import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemCard from './ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayItems } from '../redux/actions/action';

function DisplayItems() {
  const { name } = useParams();
  const backendHost = process.env.REACT_APP_BACKEND_HOST;


  const dispatch = useDispatch();
  const state = useSelector(state=>state);

  const fecthAllClothings=async()=>{
    try {
      const response = await fetch(`${backendHost}/clothing/getClothings`,{
        method:'GET',
      });
      const json = await response.json();
      dispatch(setDisplayItems(json));
    } 
    catch(err) {
       console.log(err.message);
    }
    
  };

  useEffect(() => {
      if(name=="clothing"){
        fecthAllClothings();
      }
  }, []);
  return (
    <div className='displayItems' style={{ marginTop: '50px' }}>
      <h3>All {name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      <div className="filter">
          <li class="nav-item dropdown list-unstyled mx-2">
            <Link class="nav-link  active" to="/all/clothing" aria-expanded="">
              Gender  <i class="fa-sharp fa-solid fa-caret-down"></i>
            </Link>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item  bg-transparent" to="/">Male</Link></li>
              <li><hr class="dropdown-divider text-white" /></li>
              <li><Link class="dropdown-item  bg-transparent" to="/">Female</Link></li>
            </ul>
          </li>
          <li class="nav-item dropdown list-unstyled mx-2">
            <Link class="nav-link  active" to="/all/clothing" aria-expanded="">
              Brand  <i class="fa-sharp fa-solid fa-caret-down"></i>
            </Link>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item  bg-transparent" to="/">Male</Link></li>
              <li><hr class="dropdown-divider text-white" /></li>
              <li><Link class="dropdown-item  bg-transparent" to="/">Female</Link></li>
            </ul>
          </li>
      </div>
      <div className="container">

        {
            state.Items.displayItems.map((ele)=>{
               return <ItemCard title={ele.title} ele={ele} price={ele.price}/>
            })
        }

      </div>
    </div>
  )
}

export default DisplayItems
