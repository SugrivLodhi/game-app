import React, { useState, useEffect } from 'react'
import './gamepage.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Input from './Atomic/Input';
import { useRef } from 'react';
import { validateNumber, numberOfArr } from '../utills/untility';
import Button from './Atomic/Button';
import UserDetails from './Atomic/UserDetails';
import Layout from './Atomic/Layout';
const GamePage = () => {
    const navigate = useNavigate()
    const formData = useSelector((state) => state.formData);
    console.log("data", formData);
    const [boxes, setBoxes] = useState([])
    const boxRef = useRef([]);
    const [boxColor, setBoxColor] = useState([])
    const [error, setError] = useState('')
    const handleInputChange = (event) => {
        const value = validateNumber(event.target.value)
        setError(value)
        setBoxes(numberOfArr(event.target.value))
    };
    const handler = (index) => {
        const updatedColors = boxRef.current[index];
        console.log("upd", updatedColors);
        
        setBoxColor((prev) => {
          const updated = [...prev];
          
          if (updated[index] === 'red') {
            updated[index] = 'yellow';
          } else if (updated[index] === 'yellow') {
            updated[index] = 'disable';
          } else {
            updated[index] = 'red';
          }
          
          return updated;
        });
      };
    const handleReset = () => {
        setPaused(false);
        setStopped(false);
        setStartTime(new Date());
        setEndTime(null);
    };

    const [isPaused, setPaused] = useState(false);
    const [isStopped, setStopped] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    useEffect(() => {
        if (isStopped) {
            const totalTime = (endTime - startTime) / 1000;
            alert(`Game Over!\nTotal Time: ${totalTime} seconds`);
            navigate('/review-detail')
        }
    }, [isStopped, endTime, startTime, navigate]);


    return (
        <Layout>
            <div className='container' >
                <UserDetails
                    name={formData?.name}
                    email={formData?.email}
                    phone={formData?.phone}
                    photo={formData.photo}
                />
                <div>
                    <Input type='text' placeholder="Enter the Number to start the game" onChange={handleInputChange} error={error} />
                    <div className='box-container'>
                        {boxes?.map((box, index) => (
                            <button ref={(ref) => (boxRef.current[index] = ref)}  key={index} className={`box ${boxColor[index]}`} onClick={() => handler(index)}>{box?.value } {index} </button>
                        ))
                        }


                    </div>
                    <div className='btnWrapper'>
                        <Button btnText='Reset' onClick={handleReset} />
                        <Button btnText={isPaused ? 'Resume' : 'Pause'} onClick={() => setPaused((prevPaused) => !prevPaused)} />
                        <Button btnText='Stop' onClick={() => setStopped(true)} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default GamePage