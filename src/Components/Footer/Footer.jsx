import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>

<div className="footer-content">
    <div className="footer-content-left"><img src={assets.logo} alt="" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad facere officiis, nesciunt molestiae recusandae debitis vel sequi doloremque impedit nostrum minima! Quidem velit quasi dolorem quaerat mollitia cumque consequatur quo.</p>
<div className="footer-social-icons">
    <img src={assets.linkedin_icon} alt="" />
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
</div>

    </div>
    <div className="footer-content-center">
        <h2>3D GB</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Dilevery</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <li>0387515625</li>
        <li>3DGB@gmail.com</li>
    </div>
</div>
<hr />
<p className='last-para'>CopyRights 2024 &copy; Food-Web.com .All Rights Reserved</p>
    </footer>
  )
}

export default Footer