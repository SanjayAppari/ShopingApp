import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemCard from './ItemCard';

function DisplayItems() {
  const { name } = useParams();

  useEffect(() => {

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
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  )
}

export default DisplayItems
