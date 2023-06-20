import React from 'react'
import UserDetails from './Atomic/UserDetails'
import Layout from './Atomic/Layout'
import { useSelector } from 'react-redux'
import './reviewDetails.css'
const ReviewDetails = () => {
    const formData = useSelector((state) => state.formData)
  return (
    <Layout>
    <div className='review_details'>
         <UserDetails
             name={formData?.name}
             email={formData?.email}
             phone={ formData?.phone}
             photo={ formData.photo}
            />
        <h3>Total Time to Finish Game : 1 hours</h3>  
    </div>
    </Layout>
  )
}

export default ReviewDetails