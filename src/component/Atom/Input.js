import React from 'react'
import './input.css'
import Errors from './Errors'
const Input = ({ type, placeholder, label, name, onChange, error ,value}) => (
    <div className='input-container'>
        <label>{label}</label>
        <input className='input_box' name={name} onChange={onChange} value={value} type={type} placeholder={placeholder} />
        {error && (<Errors error={error} />)}
    </div>)
export default Input