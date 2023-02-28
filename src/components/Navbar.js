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
                    <li key="1"><Link to="/Profile">Profile</Link></li>
                    <li key="2"><Link to="/create"><img src={Camera} alt="Camera" className='camera' /></Link></li>
                </>
            ]
        } else {
            return (
                <>
                    <li key="3"><Link to="/Signin">Login</Link></li>
                    <li key="4"><Link to="/Signup">Signup</Link></li>
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