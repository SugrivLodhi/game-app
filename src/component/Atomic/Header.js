import React from 'react'
import './header.css'
const headerConfig =
    [{ value: 'Home' },
    { value: 'About' },
    { value: 'Service' },
    { value: 'Technology' }]

const Header = () => {
    return (
        <div className='header'>
            <img src="	https://www.tecmantras.com/imgs/logo.png" alt ="logo" height="48px" />
            <div>
             {headerConfig.map((v) =>(<li>{v.value}</li>))}
            </div>
        </div>
    )
}

export default Header