import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import M from 'materialize-css'


const Login = () => {
    const { state, dispatch } = useContext(UserContext)
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const PostData = () => {
        fetch("/signin", {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                password,
                email
            })
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
            .then(data => {
                console.log(data);
                if (data.error) {
                    M.toast({ html: data.error })
                }
                else {
                    localStorage.setItem('jwt', data.token)
                    localStorage.setItem('user', JSON.stringify(data.user))
                    dispatch({ type: 'USER', payload: data.user })
                    M.toast({ html: 'signedIn Success' })
                    navigate("/")
                }
            }).catch(error => {
                console.error('Error fetching data:', error);
                M.toast({ html: 'Error signing in. Please try again later.' });
            })
    }
    return (
        <div className='mycard'>
            <div className="card auth-card ">
                <h2>Instaclone</h2>
                <input type="text"
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light" onClick={() => PostData()}>
                    Login
                </button>
                <h5>
                    <Link to='/signup'>Don't have an account?</Link>
                </h5>
            </div>
        </div >
    )
}
export default Login