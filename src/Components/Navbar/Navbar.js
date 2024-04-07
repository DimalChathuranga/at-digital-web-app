import './Navbar.css'
import React from 'react'
import logo from '../../assets/Logo.png'


const Navbar = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='d-flex justify-content-between'>
                        <a href="#" className='logo-div'>
                            <img src={logo} className='logo'></img>
                        </a>

                        <nav class="navbar navbar-expand-md">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Contact Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Careers</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>
            </header>
        </>

    )
}

export default Navbar;