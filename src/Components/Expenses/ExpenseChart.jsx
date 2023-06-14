import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, layouts } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(239, 68, 68)',
                'rgb(16, 185, 129)',
                'rgb(66, 153, 225)',
                'rgb(252, 211, 77)',
                'rgb(130, 92, 193)',
                'rgb(250, 139, 50)',
            ],
            borderColor: [
                'rgb(239, 68, 68)',
                'rgb(16, 185, 129)',
                'rgb(66, 153, 225)',
                'rgb(252, 211, 77)',
                'rgb(130, 92, 193)',
                'rgb(250, 139, 50)',
            ],
            borderWidth: 1,
            padding: 90
        },
    ],
};

const options = {
    layout: {
        padding: 25
    },
    plugins: {
        legend: {
            display: true,
            labels: {
                color: 'rgb(255,250,250)'
            }
        }
    }
}

function ExpenseChart() {
    return (
        <div className='flex'>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default ExpenseChart