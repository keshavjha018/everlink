import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" class="d-inline-block " />
                        <span className="brand-text">
                            E V E R L I N K
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success search-btn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar