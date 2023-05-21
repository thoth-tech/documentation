import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Teachers = () => {
    const [data, setData] = useState([]);
     
  
  
    useEffect(() => {
      fetchData();
           
    }, [data]);
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/lecturers');
          setData(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  return (
    <div style={{marginTop: '5%'}}>
      
      <h1>List of all Lectuers</h1>
      <table>
        <th> Lecturer Name </th>
        <th> Joining Date </th>      
      {data.map((lecturer) => ( 
      <tbody >       
        <td key={lecturer.lecturerId} >
          {lecturer.lecturerName}
        </td>
        <td >
          {lecturer.joiningDate}
        </td>
     
      </tbody> ))}
      </table>
      
      
    </div>
  );
};

export default Teachers;
