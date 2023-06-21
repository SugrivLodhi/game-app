import React from 'react'
import UserDetails from './Atom/UserDetails'
import Layout from './Atom/Layout'
import { useSelector } from 'react-redux'
import './reviewDetails.css'
import { timeFormater } from '../utills/untility'
const ReviewDetails = () => {
  const formData = useSelector((state) => state.formData)
  const { time } = useSelector((state) => state.timer)
  const formatTime = timeFormater(time)

  return (
    <Layout>
      <div className='review_details'>
        <UserDetails
          name={formData?.name}
          email={formData?.email}
          phone={formData?.phone}
          photo={formData.photo}
        />
        <h3>Total Time : &nbsp;{`${formatTime?.hours} : ${formatTime?.minutes} : ${formatTime?.remainingSeconds}`}</h3>
      </div>
    </Layout>
  )
}

export default ReviewDetails