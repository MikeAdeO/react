import React, { useState } from 'react'

const Login = () => {

    // user Login INfo
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        },
        {
            username: "user3",
            password: "pass3"
        },
    ];

    const errors = {
        uname: "Invalid username",
        password: "Invalid password"
    };


    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (item) => 
        item === errorMessages.name && (
            <div className='error'><h1>{errorMessages.message}</h1></div>
        )
    
        const handleSubmit = (e) => {
            //prevent page reload
            e.preventDefault();

            let {uname, pass} = document.forms[0];

            // find user info
            const userData  = database.find((user) => user.username === uname.value);

            // compare user info
            if(userData){
                if(userData.password !== pass.value){
                    // wrong passsord
                    setErrorMessages({
                        name: "pass",
                        message: "password does not match"
                    })
                }else{
                    setIsSubmitted(true);
                    // redirect to dashboard
                }
            }else{
                // USERNAME NOT FOUND

                setErrorMessages({
                    name: "uname",
                    message: "USER DOES EXISTS"
                });
            };
        }
      

        
  return (
    <div className='form'>

        <form onSubmit={handleSubmit}>
            <div className='input__container'>
                <label>Username</label>
                <input type='text' name="uname" required />
                {renderErrorMessage("uname")}
            </div>
            <div className='input__container'>
                <label>Password</label>
                <input type='password' name="pass" required />
                {renderErrorMessage("pass")}
            </div>
            <div className='button__container'>
                <input type='submit' />
            </div>
        </form>
        <div>
            {isSubmitted ? <h1>User Logged in Successfully</h1> : <h1>Please log in </h1>}
        </div>
    </div>
  )
}

export default Login