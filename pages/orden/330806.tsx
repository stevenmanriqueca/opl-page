import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { UIOrderCard, UITimeline } from '@/components/common';
import { MainLayout } from '@/components/layouts';
import Box from '@mui/material/Box';
import { dataOrder1 } from '../../data/order1';

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
            data: [2059000, 1750000, 309000],
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
        <MainLayout title='OPL | Orden #330806'>
            <Grid container style={{ margin: 0, width: '100%' }}>
                <Grid item xs={12} md={5} >
                    <div
                        style={{
                            position: 'sticky',
                            top: '2px', // Ajusta la distancia desde la parte superior
                            zIndex: 1, // Asegura que las tarjetas estén por encima de la línea de tiempo
                            overflow: 'hidden', // Permite el scroll vertical si es necesario
                        }}
                    >
                        <Typography fontWeight="bolder" variant='h3' textAlign="center" m={5} color="orange">Orden # 330806</Typography>

                        <Typography textAlign="left" m={2} fontWeight="bolder" variant='h4' color="orange">Detalles Orden:</Typography>
                        <Grid container sx={{ width: "100%" }}>
                            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
                                {/* <div style={{ marginLeft: "80px" }}>

                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>Pedido SAP:</span> 134790
                                    </Typography>

                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>Orden:</span> 134790
                                    </Typography>
                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>Remesa:</span> 134790
                                    </Typography>
                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>MTO:</span> 134790
                                    </Typography>

                                </div> */}
                                <Box p={2}>

                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>Pedido SAP:</span> 134790
                                    </Typography>

                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>Orden:</span> 330806
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Remesa:</span> 302499
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>MTO:</span> 288222
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Cuenta X Cobrar:</span> $ 2.059.000
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Cuenta X Pagar:</span> $ 1.750.000
                                    </Typography>


                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
                                <Box p={2}>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Utilidad:</span> $ 309.000
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Origen:</span> CD FUNZA
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Destino:</span> PEREIRA
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Placa:</span> KNL078
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Recurso:</span> PATINETA
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Dia de Cargue:</span> VIERNES

                                    </Typography>
                                </Box>
                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut sequi, cumque cupiditate repudiandae veniam commodi quisquam architecto quia nihil! */}
                            </Grid>
                            {/* <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Card
                                    sx={{
                                        backgroundColor: 'white', // Fondo blanco
                                        color: 'black', // Texto en color negro
                                        borderRadius: '8px', // Bordes redondeados
                                        border: "1px solid gray",
                                        boxShadow: '10x 10px 10px 10px rgba(0, 0, 0, 0.1)', // Sombra suave
                                        '&:hover': {
                                            boxShadow: '2px 2px 2px 2px rgb(233, 99, 10)', // Cambio de sombra al pasar el cursor
                                        },
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h5" component="div" fontWeight="bolder">
                                            Detalles de la Orden
                                        </Typography>
                                        <Typography variant="body1">
                                            Utilidad: $ 309.000
                                        </Typography>
                                        <Typography variant="body1">
                                            Placa: KNL078
                                        </Typography>
                                        <Typography variant="body1">
                                            Dia Cargue: Viernes
                                        </Typography>
                                        <Typography variant="body1">
                                            Recurso: Patineta
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid> */}


                            {/* <UIOrderCard>
                                <Typography variant="h5" textAlign="center" fontWeight="bolder">
                                    Cuenta X Pagar:
                                </Typography>
                                <Typography variant="h5" textAlign="center">
                                    $ 1.750.000
                                </Typography>
                            </UIOrderCard>



                            <UIOrderCard>
                                <Typography variant="h5" textAlign="center" fontWeight="bolder">
                                    Cuenta X Cobrar:
                                </Typography>

                                <Typography variant="h5" textAlign="center">
                                    $ 2.059.000
                                </Typography>
                            </UIOrderCard>


                            <UIOrderCard>
                                <CardContent>
                                    <Typography variant="h5" fontWeight="bolder" textAlign="left">
                                        Pedido SAP: 134790
                                    </Typography>

                                    <Typography variant="h5" fontWeight="bolder" textAlign="left">
                                        Remesa: 302499
                                    </Typography>
                                    <Typography variant="h5" fontWeight="bolder" textAlign="left">
                                        MTO: 288222
                                    </Typography>
                                </CardContent>
                            </UIOrderCard>

                            <UIOrderCard>
                                <Typography variant="h5" fontWeight="bolder" component="div" textAlign="center">Origen - Destino</Typography>
                                <Typography variant="h5" component="div" textAlign="center">CD Funza {"►"} Pereira</Typography>
                            </UIOrderCard> */}
                            <Grid item xs={12} md={12} mt={8}>
                                <Bar data={data} options={options} />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} md={7} sx={{ borderLeft: "2px solid orange" }}>
                    <Typography fontWeight="bolder" variant='h3' textAlign="center" m={5} color="orange">Linea de tiempo</Typography>
                    <UITimeline data={dataOrder1} />
                </Grid>
            </Grid>
        </MainLayout>
    );
}

export default OrderDetailsPage;
