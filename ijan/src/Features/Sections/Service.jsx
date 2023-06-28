import React from 'react'
import Greetings from '../Greetings'
import Greetings2 from '../Greetings2'

const Service = () => {
  return (
    <div className='ijan__main__service'>
        <div className='ijan__main__service__item'><h1>
          <Greetings2 city="Accra" country="Ghana" />
          </h1></div>
        <div className='ijan__main__service__item'><h1>
          <Greetings2 city="Lagos" country="NIgeria" />
          </h1></div>
        <div className='ijan__main__service__item'><h1>
          <Greetings name="IFEOLUWA" age="40" />
          </h1></div>

    </div>
  )
}

export default Service