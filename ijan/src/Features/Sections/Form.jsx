import React, { useReducer, useState } from 'react'
const formReducer = (state, event) => {
       return {
        ...state,
        [event.name] : event.value
       } 
}
const Form = () => {

    
    const [formData, setFormData] = useReducer(formReducer, {});

    const [loading, isLoading] = useState(false);
    const [show, setShow] = useState(false);

     const handleSubmit = (e) => {
            e.preventDefault();
            isLoading(true);
            setShow(true);
            

           setTimeout(() => {
            console.log("FORM DATA", formData);
            isLoading(false);
            setShow(false);
           }, 5000);



       

     }

     const handleChange = (e) => {
    setFormData({
        name: e.target.name,       
            value: e.target.value
    })
     }
  return (
    <div>
        {
            loading && 
            <h1>Please WAIT, LOADING....</h1>
        }
        <form onSubmit={handleSubmit}>
            <label>USERNAME</label>
            <input type="text" name='name' onChange={handleChange} /> <br></br>
           
           <label>EMAIL</label> <input type='email' name='email' onChange={handleChange} /> <br></br>
           <label>PASSWORD</label> <input type='password' name='password' onChange={handleChange} /> <br></br>

            <fieldset disabled={show}>
                <label>
                    <p>Apples</p>
                    <select name="apple" onChange={handleChange}>
                            <option value="">Choose an Option --</option>
                            <option value="jonathan">JOnathan</option>
                            <option value="fuji">Fuji</option>
                            
                    </select>
                </label>
            </fieldset>
            <button type='submit' disabled={setShow}>LOGIN</button>
        </form>
    </div>
  )
}

export default Form