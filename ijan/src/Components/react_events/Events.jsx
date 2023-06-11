import React from 'react'

const Events = () => {
    const shoot = () => {
        alert("HE SHOT THE BALL");
    }

    const showMessage = () => {
        alert("YOU RE GOOD")
    }

    function handleSubmit(e){
        e.preventDefault();
        alert("YOU HAVE SUBMITTED");
    }
  return (
    <div>
        <button onClick={shoot}>Take the Shot</button><br/>


        <button onMouseOver={showMessage}> SHOW MESSAGE</button> <br /><br />

        <div>
            <form onSubmit={handleSubmit}>

                <input type='text'value="" />
                <button type="submit">SUBMIT FORM</button>

            </form>
        </div>
    </div>
  )
}

export default Events