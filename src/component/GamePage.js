import React, { useState, useEffect } from 'react'
import './gamepage.css'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from './Atom/Input';
import { validateNumber, numberOfArr } from '../utills/untility';
import Button from './Atom/Button';
import UserDetails from './Atom/UserDetails';
import Layout from './Atom/Layout';
import Timer from './Atom/Timer';
import { updateTime } from '../Redux/slice/timerSlice';
const GamePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formData = useSelector((state) => state.formData);
    const [boxes, setBoxes] = useState([])
    const [boxColor, setBoxColor] = useState([])
    const [isPaused, setPaused] = useState(false);
    const [isStopped, setStopped] = useState(false);
    const [error, setError] = useState('')
    const { time } = useSelector((state) => state.timer)
    const [seconds, setSeconds] = useState(time);
    const handleInputChange = (event) => {
        const value = validateNumber(event.target.value)
        setError(value)
        if (!value) {
            setBoxes(numberOfArr(event.target.value))
        }

    };

    const handler = (index) => {
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
        setBoxColor([])
        setSeconds(0)
    };

    useEffect(() => {
        if (isStopped) {
            dispatch(updateTime({ time: 'time', value: seconds }))
            navigate('/review-detail')
        }
    }, [isStopped, navigate]);

    return (
        <Layout>
            <div className='container' >
                <UserDetails
                    name={formData?.name}
                    email={formData?.email}
                    phone={formData?.phone}
                    photo={formData.photo}
                />
                <Timer isPaused={isPaused} seconds={seconds} setSeconds={setSeconds} />
                <div>
                    <div className='btnWrapper'>
                        <Button btnText='Reset' onClick={handleReset} />
                        <Button btnText={isPaused ? 'Stop' : 'Start'} onClick={() => setPaused((prevPaused) => !prevPaused)} />
                        <Button btnText='End The Game' onClick={() => setStopped(true)} />
                    </div>
                    {isPaused  && (
                        <>
                            <Input type='text' placeholder="Enter the Number to start the game" label="Box Creater" onChange={handleInputChange} error={error} />
                            {boxes?.length > 0 && (
                                <>
                                    <div className='box-container'>
                                        {boxes?.map((box, index) => (
                                            <button key={index} className={`box ${boxColor[index]}`} onClick={() => handler(index)}>{index + 1}</button>
                                        ))
                                        }
                                    </div>

                                </>
                            )}
                        </>
                    )}


                </div>
            </div>
        </Layout>
    )
}

export default GamePage