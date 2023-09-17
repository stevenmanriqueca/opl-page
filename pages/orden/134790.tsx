import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { UITimeline } from '@/components/common';
import { MainLayout } from '@/components/layouts';
import Box from '@mui/material/Box';
import { dataOrder2 } from '@/data';

function OrderDetailsPage() {
    return (
        <MainLayout title='OPL | Orden #134790'>
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
                        <Typography fontWeight="bolder" variant='h3' textAlign="center" m={5} color="orange">Orden # 134790</Typography>

                        <Typography textAlign="left" m={2} fontWeight="bolder" variant='h4' color="orange">Detalles Orden:</Typography>
                        <Grid container sx={{ width: "100%" }}>
                            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
                                <Box p={2}>

                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>Pedido SAP:</span> 134790
                                    </Typography>

                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>Orden:</span> 134790
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Remesa:</span> 304946
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>MTO:</span> 290632
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
                                        <span style={{ fontWeight: 'bold' }}>Placa:</span> GUR578
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Recurso:</span> PATINETA
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Dia de Cargue:</span> MARTES
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography fontWeight="bolder" variant='h3' textAlign="center" m={5} color="orange">Linea de tiempo</Typography>
                    <UITimeline data={dataOrder2} />
                </Grid>
            </Grid>
        </MainLayout>
    );
}

export default OrderDetailsPage;