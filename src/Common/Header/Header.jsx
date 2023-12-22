import React from 'react'
import Head from './Head'
import Search from './Search';
import NavBar from './NavBar';
import './Header.css'
const Header = ({ cartItem }) => {
  return (
    <>
      <Head />
      <Search cartItem={cartItem} />
      <NavBar />
    </>
  );
};

export default Header
