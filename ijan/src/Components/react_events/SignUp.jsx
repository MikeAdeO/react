import React from 'react'
import GuestLoggin from './GuestLoggin';
import UserLoggin from './UserLoggin';

const SignUp = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn === true) {
       return <UserLoggin />
    }
  return (
    <div>  <GuestLoggin /></div>
  )
}

export default SignUp