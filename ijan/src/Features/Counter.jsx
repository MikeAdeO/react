import { useState,  useEffect } from "react";



const Counter  = () => {
     const  [ count, setCount] = useState(50);
     
     


     useEffect( ()  => {
        const interval  = setInterval(()  =>{
            setCount(count - 1)

        }, 1000);

        return  ()  => clearInterval(interval)
     })


    const  decreaseCounter = () => {
         const  data  = setInterval(  () => {
            setCount(count - 1)
         },  1000)


        return ()  =>  clearInterval(data);
    }


     const increaseCounter  = ()  => {
            setCount(count  + 1);
          
     }

    return (
        <>

   <h1> COUNTER = {count}</h1>

   <button type="button"  onClick={increaseCounter}>ADD  1</button>
   <button type="button"  onClick={decreaseCounter}>DECREASE  BUTTON </button>
        </>

    )
}
export default Counter;