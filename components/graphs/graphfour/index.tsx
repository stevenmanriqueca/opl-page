import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const data = {
    labels: [
        "330806",
        "333243",
        "332178",
        "134790",
        "336051",
        "336003",
        "336028",
        "336360",
        "338294",
        "338321",
        "338443",
        "338998",
        "340262",
        "340501",
        "340547",
    ],
    datasets: [
        {
            label: "Utilidad",
            data: [
                309000,
                265250,
                309000,
                309000,
                111000,
                111000,
                75000,
                75000,
                309000,
                265250,
                309000,
                265250,
                309000,
                309000,
                273000,
            ],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(75, 192, 192, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(75, 192, 192, 1)",
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export const GraphFour = () => {
    return (
        <>
            <Stack direction="column">
                <div>
                    <Typography align='center' fontWeight="bolder" variant='h6'>Utilidad X Orden</Typography>
                </div>
                <Box>
                    {/* <Pie data={data} options={options as Object} style={{ width: "500px", margin: "10px" }} /> */}
                    <Line data={data} options={options} width={"600px"} height={"200px"} />

                    {/* <Bar data={midata} options={misoptions as Object} style={{ width: "500px" }} /> */}
                </Box>
            </Stack>
        </>
    );
};