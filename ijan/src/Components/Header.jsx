import React from 'react'
import UserDetails from './UserDetails';


const Header = () => {
    const user = {
        name : "sola",
        age: 40,
        height: 5.9
    };
  return (
    <div>
        <UserDetails user={user}  /> 
    </div>

  )
}

export default Header