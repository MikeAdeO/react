import React from 'react'
import "../Styles/Header.css";
import Greetings from './Greetings';
const Header = ({user}) => {
  return (
    <div className='header__main'>
        <div className='logo'>IJAN REACT</div>
        <span className='menu'>Home</span>
        <span className='menu'>About</span>
        <span className='menu'>Service</span>
        <span className='menu'>Contact</span>
        <span className='menu'>
          <Greetings name="Sola" age="17" />
        </span>
        <div className='sign__up'><button>SIGN UP</button></div>
    </div>
  )
}

export default Header