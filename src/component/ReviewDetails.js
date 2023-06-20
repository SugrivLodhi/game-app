import React from 'react'
import UserDetails from './Atomic/UserDetails'
import { useSelector } from 'react-redux'
import './reviewDetails.css'
const ReviewDetails = () => {
    const formData = useSelector((state) => state.formData)
  return (
    <div className='review_details'>
         <UserDetails
             name={formData?.name}
             email={formData?.email}
             phone={ formData?.phone}
             photo={ formData.photo}
            />
        <h3>Total Time to Finish Game : 1 hours</h3>  
    </div>
  )
}

export default ReviewDetails