import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar fixed-top navbar-dark navbar-expand-lg bg-black" style={{height:'50px'}}>
                <div class="container-fluid">
                    <Link class="navbar-brand ms-4" to="/">Ivan</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="mx-auto"></div>
                        <ul class="navbar-nav me-5">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active" to="/all/clothing"  aria-expanded="">
                                    Clothing
                                </Link>
                                <ul class="dropdown-menu bg-black ">
                                    <li><Link class="dropdown-item text-white bg-transparent" to="/">Top Wear</Link></li>
                                    <li><hr class="dropdown-divider text-white" /></li>
                                    <li><Link class="dropdown-item text-white bg-transparent" to="/">Bottom Wear</Link></li>
                                </ul>
                            </li>
                            <li>
                            <Link class="nav-link active" aria-current="page" to="#">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
