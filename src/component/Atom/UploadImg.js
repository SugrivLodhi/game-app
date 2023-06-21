import React from 'react';
import Input from './Input';
import './upload.css'
import { useDispatch } from 'react-redux';
import { updateField } from '../../Redux/slice/formDataSlice';
import { useSelector } from 'react-redux';
const UploadImage = ({name, error}) => {
  const dispatch = useDispatch()
  const selectedImage= useSelector((state) => state.formData);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const value = URL.createObjectURL(file);
    dispatch(updateField({field:event.target.name, value}))
  };
  return (
    <div className='upload_image'>
      <Input type="file" name={name} label='Upload the image'  error={error} onChange={handleImageUpload} />
      {selectedImage?.photo && (
        <img src={selectedImage.photo} alt="image" width='90px' height='100px'/> 
      )}    
      </div>
  );
};

export default UploadImage