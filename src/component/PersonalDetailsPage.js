import React, { useState } from 'react'
import Input from './Atomic/Input'
import { validateName, validateEmail,validateMobileNumber,validatePhoto } from '../utills/untility'
import './personalDetails.css'
import Button from './Atomic/Button'
const PersonalDetailsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    upload:'',
  });
  const [error,setError] = useState({
    name: '',
    email: '',
    phone: '',
    upload:'',
  });
  console.log("error",error)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const sumbitHandler = (e) => {
    e.preventDefault();
    const name= validateName(formData.name)
    setError((prev) => ({...prev,name: name}));
    const email= validateEmail(formData.email)
    setError((prev) => ({...prev,email: email}));
    const phone= validateMobileNumber(formData.phone)
    setError((prev) =>({...prev,phone:phone}));
    const photo = validatePhoto(formData.upload)
    setError((prev) =>({...prev, upload:photo}));
    console.log(formData);

  }

  return (
    <div className='container'>
      <h3>Persnol Information</h3>
      <form onSubmit={sumbitHandler} >
        <Input type='text' placeholder='Enter name' name="name" value={formData.name} label="Name" onChange={handleInputChange} error={error?.name} />
        <Input type='email' name="email" placeholder='Enter  email id' value={formData.email} label="Email Id" onChange={handleInputChange} error={error?.email}/>
        <Input type='tel' name="phone" placeholder='Enter the phone number' value={formData.phone} label="Phone Number" onChange={handleInputChange} error={error?.phone}/>
        <Input type='file' name="upload" label="upload the photo" value={formData.upload} onChange={handleInputChange} error={error?.upload}/>
        <Button type="submit" btnText="Start Game" />
      </form>
    </div>
  )
}

export default PersonalDetailsPage