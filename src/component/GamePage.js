import React, { useState, useEffect } from 'react'
import './gamepage.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Input from './Atomic/Input';
import { validateNumber, numberOfArr } from '../utills/untility';
import Button from './Atomic/Button';
import UserDetails from './Atomic/UserDetails';
import Layout from './Atomic/Layout';
const GamePage = () => {
    const navigate = useNavigate()
    const formData = useSelector((state) => state.formData);
    const [boxes, setBoxes] = useState([])
    const [boxColor, setBoxColor] = useState('blue')
    const [error, setError] = useState('')
    const [disable, setDisable] = useState(false)
    const handleInputChange = (event) => {
        const value = validateNumber(event.target.value)
        setError(value)
        setBoxes(numberOfArr(event.target.value))
    };
    const handler = (index) => {
       const  updatedColors = [...boxes];
        if (boxColor === 'blue') {
            setBoxColor('red')
         }
        else if (boxColor ==='red' && index) {
            updatedColors[index]='yellow'
            setBoxColor(updatedColors[index])
        }
        else if (boxColor === 'yellow' && index) {
            setDisable(true)
            updatedColors[index]='pink'
            setBoxColor(updatedColors[index])
    
        }


    }
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
      }, [isStopped, endTime, startTime,navigate]);
    

    return (
        <Layout>
        <div className='container' >
            <UserDetails
             name={formData?.name}
             email={formData?.email}
             phone={ formData?.phone}
             photo={ formData.photo}
            />
            <div>
                <Input type='text' placeholder="Enter the Number to start the game" onChange={handleInputChange} error={error} />
                <div className='box-container'>
                    {boxes?.map((box, index) => (
                        <button style={{ backgroundColor: boxColor }} disabled={disable} key={index} className='box' onClick={() => handler(index)}>{box?.value}</button>
                    ))
                    }


                </div>
                 <div className='btnWrapper'>
                 <Button btnText='Reset' onClick={handleReset}/>
                 <Button  btnText={isPaused ? 'Resume' : 'Pause'} onClick={() => setPaused((prevPaused) => !prevPaused)}/>
                  <Button  btnText='Stop' onClick={() => setStopped(true)}/>
                  </div>
            </div>
        </div>
        </Layout>
    )
}

export default GamePage