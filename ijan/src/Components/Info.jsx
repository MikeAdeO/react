import React from 'react'

const Info = ({username, location, accomodation}) => {
  return (
    <div>
       <p> Good Morning, {username}</p>
       <p>We are happy to have you on our platform, we hope to see you soon in {location}</p>
       <p> We have many {accomodation}</p>
    </div>
  )
}

export default Info