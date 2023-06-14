import React from 'react'
import People from '../People';

const About = () => {
  const people  = [
    {
      id: 1, 
      name: "Bash"
    },
    {
      id: 2, 
      name: "MIKE"
    },
    {
      id: 3, 
      name: "AYO"
    },
    {
      id: 4, 
      name: "KUNLE"
    }
  ];

  const listItems = people.map(student => 
    <li key={student.id}>{student.name}</li>
    );
  return (
    <div className='about__ijan'>
        <h4>Rendering Lists</h4>
        <ul>
          <li>MAP</li>
          <li>FILTER</li>
        </ul>

        <ul>
          <li>BASH</li>
          <li>CHI CHI</li>
          <li>KAY</li>
          <li>THAMES</li>
          <li>MICHAEL</li>
        </ul>

        {/* MAP */}
        <h1>APPROACH 1</h1>
        <ul>
          {listItems}
        </ul>

        <h1>APPROACH 2</h1>

        <ul>
          {
            people.map(item => 
              <li key={item.id}>{item.name}</li>
            )
          }
        </ul>

        <h1>APPROACH 3</h1>
        <table>
          <th>
            id
          </th>
          <th>Name</th>
          <tbody>
            {
              people.map(ty => 
                <tr key={ty.id}>
                  <td>{ty.id}</td>
                  <td>{ty.name}</td>
                </tr>
                )
            }
          </tbody>
        </table>
    </div>
  )
}

export default About