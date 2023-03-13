import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

const VisaSuccessCountry = () => {

    ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);
    const options = {
        // maintainAspectRatio: false,
    }

    const data = {
        labels: ['USA', 'Australia', 'Canada', 'Denmark', 'UK', 'New Zealand'],
        datasets: [
            {
                label: 'Total visa per country',
                data: [12, 19, 20, 3, 13, 16],
                backgroundColor: 'rgba(207, 226, 255, 0.5)',
                pointBackgroundColor: '#2B7FFF',
            }
        ]
    }

    return (
        <>
            <Line options={options} data={data} height={350} width={900} />
        </>
    )
}

export default VisaSuccessCountry