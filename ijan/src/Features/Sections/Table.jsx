import React from "react";
import "../../Styles/Table.css";
const Table = () => {
  const teachers_names = [
    {
      id: 1,
      teacher_name: "James",
      subject: "Math",
    },
    {
      id: 2,
      teacher_name: "Sola",
      subject: "Biology",
    },
    {
      id: 3,
      teacher_name: "James",
      subject: "English",
    },
    {
        id: 4,
        teacher_name: "Jacob",
        subject: "Yoruba",
      },
      {
        id: 5,
        teacher_name: "Adewale",
        subject: "Physics",
      },
      {
        id: 6,
        teacher_name: "Kunlke",
        subject: "Physics",
      },
  ];
  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>Teacher Name</th>
          <th>Subject</th>
        </tr>
        <tbody>
          {
          
            teachers_names.map((data, key) => (
              <tr key={data.id}>
                <td>{key + 10}</td>
                <td>{data.teacher_name}</td>
                <td>{data.subject}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
