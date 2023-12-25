import React from 'react'
import './navbar.scss';
import Logo from "../../assets/Kmg.png"

const Navbar = () => {
    return (
        
        <div className="row shadow pt-3">
                <div class="col-sm-12 col-md-12 col-lg-1"></div>
                <div class="col-sm-12 col-md-12 col-lg-10">
        <div className='bg-primary'>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Project</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Resume</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                </div>
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div class="col-sm-12 col-md-12 col-lg-8"></div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Project</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Resume</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
        
    )
}

export default Navbar
