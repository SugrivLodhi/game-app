import React, { useState, useEffect } from 'react'
import Input from './Atom/Input'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { updateField } from '../Redux/slice/formDataSlice'
import { validateName, validateEmail, validateMobileNumber, validatePhoto } from '../utills/untility'
import './personalDetails.css'
import Button from './Atom/Button'
import Layout from './Atom/Layout'
import UploadImage from './Atom/UploadImg'
const PersonalDetailsPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formData = useSelector((state) => state.formData);
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  useEffect(() => {
    if (isSubmitted && !error?.name && !error?.email && !error?.phone && !error?.photo) {
      navigate('/startGame');
    }
  }, [isSubmitted, error, navigate]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    const name = validateName(formData.name)
    const email = validateEmail(formData.email);
    const phone = validateMobileNumber(formData.phone);
    const photo = validatePhoto(formData.photo);
    setError({
      name: name,
      email: email,
      phone: phone,
      photo: photo,
    }
    );
    setIsSubmitted(true)

  }

  return (
    <Layout>
      <div className='personalinfo_container'>
        <h3>Persnol Information</h3>
        <form onSubmit={sumbitHandler} >
          <Input type='text' placeholder='Enter name' name="name" value={formData.name} label="Name" onChange={handleInputChange} error={error?.name} />
          <Input type='email' name="email" placeholder='Enter  email id' value={formData.email} label="Email Id" onChange={handleInputChange} error={error?.email} />
          <Input type='tel' name="phone" placeholder='Enter the phone number' value={formData.phone} label="Phone Number" onChange={handleInputChange} error={error?.phone} />
          <UploadImage name="photo"  value={formData.photo} error={error?.photo}/>
          <Button type="submit" btnText="Start Game" />
        </form>
      </div>
    </Layout>
  )
}

export default PersonalDetailsPage