import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";
import Cart from "./Pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";

function App() {
const [showPopUp,setShowPopUp] = useState(false)

  return (
    <>
    <div className={showPopUp ? 'hide-app' : ''} >

    {showPopUp ? <LoginPopUp setShowPopUp={setShowPopUp}/> : <></>}
      <div className='app'>
        <Navbar setShowPopUp={setShowPopUp} />
        <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/order" element={<PlaceOrder/>}/>
{/* <Route path="/order" element={<place}/> */}
      
   
        </Routes>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
