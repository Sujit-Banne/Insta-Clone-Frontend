import React from 'react'

const Profile = () => {
    return (
        <div style={{ maxWidth: "950px", margin: "0px auto" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                margin: "35px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div>
                    <img src="https://images.unsplash.com/photo-1621355310264-03958a95f6d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="profile" style={{ width: "200px", height: "200px", borderRadius: "100px", marginLeft: "150px" }} />
                </div>
                <div>
                    <h4>Sujit</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "110%" }}>
                        <h6>6 posts</h6>
                        <h6>134 followers</h6>
                        <h6>200 following</h6>
                    </div>
                </div>



            </div>
            <div className='gallary'>
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80" alt="cars" className='item' />
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80" alt="cars" className='item' />
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80" alt="cars" className='item' />
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80" alt="cars" className='item' />
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80" alt="cars" className='item' />
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80" alt="cars" className='item' />
            </div>
        </div>
    )
}
export default Profile