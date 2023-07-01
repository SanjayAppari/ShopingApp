import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ItemCard from './ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayItems, setMaleItems } from '../redux/actions/action';

function DisplayItems() {
  const { name } = useParams();
  const backendHost = process.env.REACT_APP_BACKEND_HOST;

  const navigate = useNavigate();
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


  const handleGender = async(gender)=>{
    if(gender==='Both') fecthAllClothings();
    else{
      try {
        const response = await fetch(`${backendHost}/clothing/getClothingsgender/${gender}`,{
          method:'GET',
        });
        const json = await response.json();
        dispatch(setDisplayItems(json));
      } 
      catch(err) {
         console.log(err.message);
      }    
    }
  }

  const fecthAllClothingByCategory = async(category)=>{
    try {
      const response = await fetch(`${backendHost}/clothing/getClothings/${category}`,{
        method:'GET',
      });
      const json = await response.json();
      dispatch(setDisplayItems(json));
    } 
    catch(err) {
       console.log(err.message);
    }    
  }

  useEffect(() => {
      if(name!="clothing"){
        fecthAllClothingByCategory(name);
      }
      else if(name=="clothing"){
        fecthAllClothings();
      }
  },[name]);
  return (
    <div className='displayItems' style={{ marginTop: '50px' }}>
      <h3>All {name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      <div className="filter">
          <li class="nav-item dropdown list-unstyled mx-2">
            <Link class="nav-link  active" to="" aria-expanded="">
              Gender  <i class="fa-sharp fa-solid fa-caret-down"></i>
            </Link>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item  bg-transparent" onClick={()=>handleGender("Male")} to="">Male</Link></li>
              <li><hr class="dropdown-divider text-white" /></li>
              <li><Link class="dropdown-item  bg-transparent" onClick={()=>handleGender("Female")} to="">Female</Link></li>
              <li><hr class="dropdown-divider text-white" /></li>
              <li><Link class="dropdown-item  bg-transparent" onClick={()=>handleGender("Both")} to="">Both</Link></li>
            </ul>
          </li>
      </div>
      <div className="container">

        {
            state.Items.displayItems.map((ele)=>{
               return <ItemCard key={ele._id} title={ele.title} ele={ele} price={ele.price}/>
            })
        }

      </div>
    </div>
  )
}

export default DisplayItems
