import React from 'react'
import './userDetail.css'
const UserDetails = ({ name, email, phone, photo }) => {
    return (
        <div className='container_info'>
            <img src={photo} alt='profile photo' width="100" height="100" />
            <div className='info'>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p>Phone : {phone}</p>
            </div>
        </div>
    )
}

export default UserDetails