import React, { useState } from 'react'
import Input from './Atomic/Input'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { updateField } from '../Redux/slice/slice'
import { validateName, validateEmail, validateMobileNumber, validatePhoto } from '../utills/untility'
import './personalDetails.css'
import Button from './Atomic/Button'
import Layout from './Atomic/Layout'
const PersonalDetailsPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formData = useSelector((state) => state.formData);
  const [error, setError] = useState({
    name: '',
    email: '',
    phone: '',
    photo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("v",value)
    dispatch(updateField({ field: name, value }));
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    const name = validateName(formData.name)
    setError((prev) => ({ ...prev, name: name }));
    const email = validateEmail(formData.email)
    setError((prev) => ({ ...prev, email: email }));
    const phone = validateMobileNumber(formData.phone)
    setError((prev) => ({ ...prev, phone: phone }));
    const photo = validatePhoto(formData.photo)
    setError((prev) => ({ ...prev, photo: photo }));
    console.log("error", error)
    if (!error?.name && !error?.email && !error?.phone && !error?.photo) {
      navigate('/startGame')
    }

  }

  return (
   <Layout>
    <div className='container'>
      <h3>Persnol Information</h3>
      <form onSubmit={sumbitHandler} >
        <Input type='text' placeholder='Enter name' name="name" value={formData.name} label="Name" onChange={handleInputChange} error={error?.name} />
        <Input type='email' name="email" placeholder='Enter  email id' value={formData.email} label="Email Id" onChange={handleInputChange} error={error?.email} />
        <Input type='tel' name="phone" placeholder='Enter the phone number' value={formData.phone} label="Phone Number" onChange={handleInputChange} error={error?.phone} />
        <Input type='file' name="photo" label="upload the photo" value={formData.photo} onChange={handleInputChange} error={error?.photo} />
        <Button type="submit" btnText="Start Game" />
      </form>
    </div>
    </Layout>  
  )
}

export default PersonalDetailsPage