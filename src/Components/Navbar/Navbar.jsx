import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import './Navbar.css'
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowPopUp}) => {
  const [menu,setmenu] =useState('home')
  const [mobile,setmobile]= useState(false)
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
            <img src={assets.logo} alt="Logo" />
        </div>
        <ul className={`menu-list ${mobile ? 'show' : 'hide'  }`}>
          <div className={`cross ${mobile ? 'cross' : 'hide'}`  } onClick={()=> setmobile(false)}>X</div>
          <li onClick={()=> setmenu("home")} className={menu==='home' ? 'active' : ''}>home</li>
          <li onClick={()=> setmenu("menu")} className={menu==='menu' ? 'active' : ''}>menu</li>
          <li onClick={()=> setmenu("mobile-app")} className={menu==='mobile-app' ? 'active' : ''}>mobile-app</li>
          <li onClick={()=> setmenu("contact-us")} className={menu==='contact-us' ? 'active' : ''}>contact</li>
        </ul>
        <div className="nav-right">
            <img src={assets.search_icon} alt="" className="search-icon"/>
            <div className="nav-icon">
          <a href="#Cart-Page"> <img src={assets.basket_icon} alt="" /></a>
              {/* <div className='dot'></div> */}
              <div className={getTotalCartAmount()==0? '':'dot' }></div>
            </div>
            <button onClick={()=> setShowPopUp(true)}>sign in</button>
        <div className={`hide ${mobile ?  'hide':'burger'}`  } onClick={()=> setmobile(true)}>
          =
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
