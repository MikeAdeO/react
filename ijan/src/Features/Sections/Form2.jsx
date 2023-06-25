import React, { useState } from 'react'

const Form2 = () => {
    const [username, setUsername] = useState("");

    const handleUserSubmit = (e) => {
        e.preventDefault();
        
        // SEND DATAR TO BACKEND
        alert(`your name is ${username}`);
    }
  return (
    <div>
        <form onSubmit={handleUserSubmit}>
            <label>USERNAME</label>
            <input 
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Form2