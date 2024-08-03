import React from 'react'
import { assets } from '../../assets/assets'
import './Mobile_App.css'
const Mobile_App = () => {
  return (
    <>
    <div className="mobile-section">
        <div className="mobile-content">
            <div className="mobile-heading">
For Better Experience Download Our App
            </div>
            <div className="mobile-logo">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Mobile_App