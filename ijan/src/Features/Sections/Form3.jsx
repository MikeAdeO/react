import React, { useState } from 'react'

const Form3 = () => {
    const [inputsData, setInputs] = useState({});

    const registerationForm = (e) => {
        e.preventDefault();
        // PRocess the form 
        // alert(inputsData);
        console.log("DATTA",inputsData );
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({...values, [name]:value}))

    }
  return (
    <div>
            <form onSubmit={registerationForm}>
                <label>YOUR NAME</label>
                <input 
                    type='text' 
                    name="username" 
                    value={inputsData.username || ""} 
                    onChange={handleChange}
                     />

                     <br></br>
                     <label>EMAIL</label>
                <input 
                    type='email' 
                    name="email" 
                    value={inputsData.email || ""} 
                    onChange={handleChange}
                     />
                     <br></br>
                     <label>AGE</label>
                <input 
                    type='number' 
                    name="age" 
                    value={inputsData.age || ""} 
                    onChange={handleChange}
                     />
                     <br></br>
                     <label>PASSWORD</label>
                <input 
                    type='password' 
                    name="password" 
                    value={inputsData.password || ""} 
                    onChange={handleChange}
                     />


                     <button type='submit'>SUBMIT</button>
            </form>
    </div>
  )
}

export default Form3