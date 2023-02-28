import React, { useState, useEffect } from 'react'

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://insta-clone-backend-c9ov.onrender.com/allpost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                // console.log(result);
                setData(result.post)
            })
    })
    return (
        <>
            <div className="home">
                {
                    data.map(item => {
                        return (
                            <div className="card home-card" key={item._id}>
                                <h5>{item.postedby.name}</h5>
                                <div className='card-image'>
                                    <img src={item.photo} alt="card" />
                                </div>
                                <div className="card-content">
                                    <i className="material-icons">favorite_border</i>
                                    <h6>{item.title}</h6>
                                    <p>{item.body}</p>
                                    <input
                                        type="text"
                                        placeholder='add comment'
                                    />

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Home