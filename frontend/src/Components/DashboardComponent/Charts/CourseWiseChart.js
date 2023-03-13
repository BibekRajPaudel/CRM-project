import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


const CourseWiseChart = () => {

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const options = {
        indexAxis: 'y',
        // maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    const data = {
        labels: ['Bachelor in Accounting', 'Bachelor of Design in Graphic Designers', 'Bachelor in IT', 'Bachelor in Physics', 'Bachelor in Music', 'Bachelor in Economics'],
        datasets: [
            {
                label: 'No of student per course',
                data: [12, 19, 20, 3, 13, 16],
                backgroundColor: '#00BAB0',
                barThickness: 25,
            }
        ]
    }

    return (
        <>
            <Bar options={options} data={data} height={300} width={600} />
        </>
    )
}

export default CourseWiseChart
