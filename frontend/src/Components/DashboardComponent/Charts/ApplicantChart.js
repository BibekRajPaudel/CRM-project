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
const ApplicantChart = () => {

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'No of applicants per month',
                data: [12, 19, 20, 3, 13, 16, 7, 50, 41, 33, 11, 18],
                backgroundColor: '#2B7FFF'
            }
        ]
    }
    return (
        <>
            <Bar options={options} data={data} height={400} width={600} />
        </>
    )
}

export default ApplicantChart