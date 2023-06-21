import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const headerConfig =
    [{ value: 'Home', path: '/' },
    { value: 'About', path: '/about' },
    { value: 'Service', path: '/service' },
    { value: 'Technology', path: '/technlogy' }]

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' >
                <img src="	https://www.tecmantras.com/imgs/logo.png" alt="logo" height="48px" />
            </Link>
            <div className='header-info'>
                {headerConfig.map((v) => (
                    <Link to={v.path}>
                        <li key={v.value}>{v.value}</li>
                    </Link>))}
            </div>
        </div>
    )
}

export default Header