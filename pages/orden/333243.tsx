import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { UITimeline } from '@/components/common';
import { MainLayout } from '@/components/layouts';
import Box from '@mui/material/Box';
import { dataOrder4 } from '@/data';

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

const data = {
    labels: ['Cuenta X Cobrar', 'Cuenta X Pagar', 'UTILIDAD'],
    datasets: [
        {
            label: 'Valores en Pesos',
            data: [1865250, 1600000, 265250],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 205, 86, 0.6)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 205, 86, 1)'],
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Valores en Pesos',
            },
        },
    },
};

function OrderDetailsPage() {
    return (
        <MainLayout title='OPL | Orden #333243'>
            <Grid container style={{ margin: 0, width: '100%' }}>
                <Grid item xs={12} md={5}>
                    <div
                        style={{
                            position: 'sticky',
                            top: '2px',
                            zIndex: 1,
                            overflow: 'hidden',
                        }}
                    >
                        <Typography fontWeight="bolder" variant='h3' textAlign="center" m={5} color="orange">Orden # 333243</Typography>

                        <Typography textAlign="left" m={2} fontWeight="bolder" variant='h4' color="orange">Detalles Orden:</Typography>
                        <Grid container sx={{ width: "100%" }}>
                            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
                                <Box p={2}>

                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>Pedido SAP:</span> 134791
                                    </Typography>

                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>Orden:</span> 333243
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Remesa:</span> 304597
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>MTO:</span> 290298
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Cuenta X Cobrar:</span> $ 1.865.250
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Cuenta X Pagar:</span> $ 1.600.000
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
                                <Box p={2}>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Utilidad:</span> $ 265.250
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Origen:</span> CD FUNZA
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Destino:</span> ARMENIA
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Placa:</span> KUS333
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Recurso:</span> PATINETA
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Dia de Cargue:</span> LUNES
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12} mt={8}>
                                <Bar data={data} options={options} />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} md={7} sx={{ borderLeft: "2px solid orange" }}>
                    <Typography fontWeight="bolder" variant='h3' textAlign="center" m={5} color="orange">Linea de tiempo</Typography>
                    <UITimeline data={dataOrder4} />
                </Grid>
            </Grid>
        </MainLayout>
    );
}

export default OrderDetailsPage;