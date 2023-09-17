import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box, useMediaQuery, useTheme } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: true,
};

var data = {
    labels: ['KNL078', 'KUS333', 'GZZ802', 'GUR578', 'LCO390'],
    datasets: [
        {
            label: '# Ordenes',
            data: [4, 4, 3, 3, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export const GraphThree = () => {


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (

        <>
            <Stack direction="column">
                <div>
                    <Typography align='center' fontWeight="bolder" variant='h6'>Ordenes X Placa</Typography>
                </div>
                <Box>
                    <Pie data={data} options={options as Object} style={matches ? { width: "380px", margin: "10px" } : { width: "500px", margin: "10px" }} />
                    {/* <Pie data={data} options={options as Object} style={{ width: "auto", margin: "10px" }} /> */}
                    {/* <Bar data={midata} options={misoptions as Object} style={{ width: "500px" }} /> */}
                </Box>
            </Stack>
        </>
    )
}