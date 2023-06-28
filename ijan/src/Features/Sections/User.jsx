import React, { useState } from 'react'
import Header from '../Header';
import Service from './Service';

const User = () => {
const [username, setUsername] = useState("Michael");

  return (
    <div>
       <Header user={username}/>
       <Service />

    </div>
  )
}

export default User