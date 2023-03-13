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


const UniversityWiseChart = () => {

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
        labels: ['Western Sydney Uni', 'Stanford University', 'University of Toronto', 'Western Sydney Uni.', 'Western Sydney Uni.', 'Western Sydney Uni.'],
        datasets: [
            {
                label: 'No of students per university',
                data: [12, 19, 20, 3, 13, 16],
                backgroundColor: '#2266D1',
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

export default UniversityWiseChart