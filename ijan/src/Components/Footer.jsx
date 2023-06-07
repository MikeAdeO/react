import React from 'react'
import UserDetails from './UserDetails'
import Info from './Info';

const Footer = () => {
    const user_2 = {
        name : "Bash",
        age: 70,
        height: 9.9
    };
  return (
    <div>
        <UserDetails  user={user_2}/>
        <Info username="James" location="Lagos"  accomodation="Hpouses" />
    </div>
  )
}

export default Footer