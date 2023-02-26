import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const PostData = () => {
        fetch("https://insta-clone-backend-bj12.onrender.com/signup", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error })
                }
                else {
                    M.toast({ html: data.message })
                    navigate("/Signin")
                }
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='mycard'>
            <div className="card auth-card ">
                <h2>Instaclone</h2>
                <input type="text"
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <button className="btn waves-effect waves-light"
                    onClick={() => PostData()}>
                    SignUp
                </button>
                <h5>
                    <Link to='/signin'>Already have an account?</Link>
                </h5>
            </div>
        </div >
    )
}
export default Signup