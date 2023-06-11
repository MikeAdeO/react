import React from 'react'

const Switch = ({text}) => {
    function notificationMesage(){
        switch (text) {
            case "Ali": 
                //component
                return "HI ALI";
                break;
            case "James":
            //component
            return "HI James";
                break;
            default:
                return "HI";
                //compoent
                break;
        }
    }
  return (
    <div>{notificationMesage()}</div>
  )
}

export default Switch