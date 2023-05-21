import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
Chart.register(CategoryScale);

const Home = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);



  useEffect(() => {
    fetchData();
    fetchDataForLecturer();
     
  }, [data]);
// for courses 
 const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data');
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getAverageMarksData = () => {
    return data.map((item) => item.AverageMarks);
  };
  
  const getCourseTitles = () => {
    return data.map((item) => item.CourseTitle);
  };
  const chartData = {
    labels: getCourseTitles(),
    datasets: [
      {
        label: 'Average Marks Obtained by students from Each Courses',
        data: getAverageMarksData(),
        borderWidth: 1,
      },
    ],
  };const chartOptions = {
    scales: {
     x: {
      grid: {
        display: false,
      },
    },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  //for lecturer
  const fetchDataForLecturer = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data2');
      setData2(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getAverageMarksData2 = () => {
    return data2.map((item) => item.AverageMarks);
  };
  
  const getLecturersName = () => {
    return data2.map((item) => item.LecturerName);
  };
  const chartData2 = {
    labels: getLecturersName(),
    datasets: [
      {
        label: 'Lecturers Average Marks from all Courses',
        data: getAverageMarksData2(),
        backgroundColor: [
          'orange',  
          'lightblue', 
          'rgba(255, 205, 86, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'lightgreen'
        ],
        borderWidth: 1,
      },
    ],
  };
 
  return (
    <div style={{marginTop: '5%'}}>
      <h1> Lecturers Courses Analysis </h1>
                
     <div style={{ marginLeft: '10%', textAlign: 'center', width: '80%', height: '80%', color:  'black'}}>
      <Bar data={chartData} options={chartOptions} />
      </div>

      <h2 style={{marginTop: '5%',textAlign: 'center', color: 'lightblue'}}> Average Marks of All Lecturers</h2>
      <div style={{ marginTop: '2%', display: 'flex'}}>
        <div style={{width: '50%', height: '50%' }}>
          <Line data={chartData2} options={chartOptions} />
        </div>
        <div style={{width: '40%', height: '50%' }}> 
          <Pie data={chartData2} options={chartOptions} />
        </div>
    </div>
    </div>
  );
};

export default Home;