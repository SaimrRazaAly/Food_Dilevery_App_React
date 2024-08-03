import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";
import Cart from "./Pages/Cart/Cart";

function App() {
const [showPopUp,setShowPopUp] = useState(false)

  return (
    <>
    <div className={showPopUp ? 'hide-app' : ''} >

    {showPopUp ? <LoginPopUp setShowPopUp={setShowPopUp}/> : <></>}
      <div className='app'>
        <Navbar setShowPopUp={setShowPopUp} />
        <Home />
      </div>
      <Cart/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
