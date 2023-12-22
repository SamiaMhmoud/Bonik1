import React , {useState} from 'react'
import {Link} from "react-router-dom"
const NavBar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <>
        <header>
            <div className="container c_flex">
                <div className="catgrories c_flex">
                    <span className="fa-solid fa-border-all"></span>
                    <h4>
                    Categories <i className="fa fa-chevron-down"></i>
                    </h4>
                </div>
                <div className="navlink c_flex">
                    <ul
                    className={
                        mobileMenu ? "nav-links-MobileMenu" : "link c_flex capitalize"
                    }
                    onClick={() => setMobileMenu(false)}
                    >
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/pages">pages</Link>
                    </li>
                    <li>
                        <Link to="/user">user account</Link>
                    </li>
                    <li>
                        <Link to="/vendor">vendor account</Link>
                    </li>
                    <li>
                        <Link to="/track">track my order</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                    </ul>
                    <button
                    className="toggle"
                    onClick={() => setMobileMenu(!mobileMenu)}
                    >
                    {mobileMenu ? (
                        <i className="fas fa-times close home-btn"></i>
                    ) : (
                        <i className="fas fa-bars open"></i>
                    )}
                    </button>
                </div>
            </div>
        </header>
        </>
    );
}

export default NavBar
