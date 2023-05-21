import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();           
    }, []);
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/courses');
          setData(response.data.data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  return (
    <div style={{marginTop: '5%'}}>
      
    <h1>List of all Courses</h1>
    <table>
      <th> Course Name </th>
      <th> Lecturer Name </th>      
    {data.map((lecturer) => ( 
    <tbody >       
      <td key={lecturer.courseID} >
        {lecturer.courseTitle}
      </td>
      <td >
        {lecturer.lecturerName}
      </td>
   
    </tbody> ))}
    </table>
    </div>
  );
};

export default About;