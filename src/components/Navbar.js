import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
import Logo from '../images/logo.PNG'
import Camera from '../images/camera_icon.jpg'
const Navbar = () => {
    const { state, dispatch } = useContext(UserContext)
    const renderList = () => {
        if (state) {
            return [
                <>
                    <li><Link to="/Profile">Profile</Link></li>
                    <li><Link to="/create"><img src={Camera} alt="Camera" className='camera' /></Link></li>
                </>
            ]
        } else {
            return (
                <>
                    <li><Link to="/Signin">Login</Link></li>
                    <li><Link to="/Signup">Signup</Link></li>
                </>
            )
        }
    }
    return (
        <nav>
            <div className="nav-wrapper white">
                <Link to={state ? "/" : "/signin"} className="brand-logo"><img src={Logo} alt="Logo" className='logo' /></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderList()}
                </ul>
            </div>
        </nav >
    )
}

export default Navbar