import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { UITimeline } from '@/components/common';
import { MainLayout } from '@/components/layouts';
import Box from '@mui/material/Box';
import { dataOrder15 } from '@/data';
import { Divider } from '@mui/material';

function OrderDetailsPage() {
    return (
        <MainLayout title='OPL | Orden #340547'>
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
                        <Typography fontWeight="bolder" variant='h3' textAlign="center" m={5} color="orange">Orden # 340547</Typography>

                        <Typography textAlign="left" m={2} fontWeight="bolder" variant='h4' color="orange">Detalles Orden:</Typography>
                        <Grid container sx={{ width: "100%" }}>
                            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
                                <Box p={2}>

                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>Pedido SAP:</span> 139538
                                    </Typography>

                                    <Typography variant="h5">
                                        <span style={{ fontWeight: 'bold' }}>Orden:</span> 340547
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Remesa:</span> 310977
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>MTO:</span> 296601
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Cuenta X Cobrar:</span> $ 1.893.000
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Cuenta X Pagar:</span> $ 1.620.000
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
                                <Box p={2}>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Utilidad:</span> $ 273.000
                                    </Typography>

                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Origen:</span> CD FUNZA
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Destino:</span> MANIZALES
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Placa:</span> GUR578
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Recurso:</span> PATINETA
                                    </Typography>
                                    <Typography variant="h5" >
                                        <span style={{ fontWeight: 'bold' }}>Dia de Cargue:</span> LUNES
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography fontWeight="bolder" variant='h3' textAlign="center" m={5} color="orange">Linea de tiempo</Typography>
                    <UITimeline data={dataOrder15} />
                </Grid>
            </Grid>
        </MainLayout>
    );
}

export default OrderDetailsPage;