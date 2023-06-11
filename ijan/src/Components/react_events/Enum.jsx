import React from 'react'
import Message from './Message'

const Enum = ({text, state}) => {
  return (
    <div>
        {{ 
            info: <Message text={text}  /> ,
            warning: <Message text={text} />
         }[state]}
    </div>
  )
}

export default Enum