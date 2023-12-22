import React from 'react'
import logo from'../assets/logo.svg'
import {Link} from 'react-router-dom'
const Search = ({ cartItem }) => {
  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <Link to={'/'} className="logo width">
            <img src={logo} alt="" />
          </Link>
          <div className="search-box">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>
          <div className="icons f_flex">
            <div className="search-icon-mobile">
              <i className="fa fa-search icon-circle"></i>
            </div>
            <div className="user">
              <Link to="/user">
                <i className="fa fa-user icon-circle"></i>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search
