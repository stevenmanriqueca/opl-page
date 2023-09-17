import React from 'react'
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

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

const beneficios = [657000, 649250, 1038000, 994250, 265250];
var placas = ["GUR578", "GZZ802", "KNL078", "KUS333", "LCO390"];

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
            min: 1,
            max: 1200000
        },
        x: {
            ticks: { color: 'rgb(233, 99, 10)' }
        }
    }
};

var midata = {
    labels: placas,
    datasets: [
        {
            label: 'Utilidad',
            data: beneficios,
            backgroundColor: 'rgb(233, 99, 10)'
        }
    ]
};

export const GraphTwo = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Stack direction="column">
                <div>
                    <Typography align='center' fontWeight="bolder" variant='h6'>Utilidad X Placa</Typography>
                </div>
                <Box>
                    <Bar data={midata} options={misoptions as Object} style={matches ? { width: "320px", margin: "10px" } : { width: "400px", margin: "10px" }} />
                </Box>
            </Stack>
        </>
    )
}
