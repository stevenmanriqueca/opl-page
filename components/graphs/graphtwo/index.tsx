import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const beneficios = [3, 3, 4, 4, 1];
var meses = ["KNL078", "KUS333", "GZZ802", "GUR578", "LCO390"];

var misoptions = {
    responsive: true,
    animation: true,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            min: 0,
            max: 8
        },
        x: {
            ticks: { color: 'rgb(233, 99, 10)' }
        }
    }
};

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'ordenes',
            data: beneficios,
            backgroundColor: 'rgb(233, 99, 10)'
        }
    ]
};

export const GraphTwo = () => {


    return (
        <>
            <Stack direction="column">
                <div>
                    <Typography align='center'>Ordenes X Placa</Typography>
                </div>
                <Box>
                    <Bar data={midata} options={misoptions as Object} style={{ width: "500px" }} />
                </Box>
            </Stack>

        </>
    )
}
