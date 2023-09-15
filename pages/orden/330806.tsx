import { MainLayout } from '@/components/layouts'
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
// 4
const OrderOne = () => {
    return (
        <MainLayout title="OPL | Orden #330806">
            <Paper elevation={10} sx={{ width: { xs: "calc(100vw - 20px)", lg: "calc(100vw - 80px)", xl: "calc(100vw - 80px)" }, m: { xs: 1, lg: 4, xl: 4 }, border: "4px solid orange" }}>
                <Typography align="center" fontWeight="bolder" variant="h2" sx={{ color: "orange" }}> Orden #330806</Typography>

                <Grid container spacing={4} sx={{ p: 1 }} >
                    <Grid item xs={4}>
                        <Card>
                            <Typography>Remesa: 302499</Typography>
                            <Typography>Cuenta X Cobrar: $ 2,059,000</Typography>
                            <Typography>Cuenta X Pagar: $ 1,750,000</Typography>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <Typography>Origen: CD FUNZA</Typography>
                            <Typography>Destino: PEREIRA</Typography>
                            <Typography>Placa: KNL078</Typography>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <Typography>Remesa: 302499</Typography>
                        </Card>
                    </Grid>

                </Grid>

                <Box>
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                <Typography>
                                    24/08/2023
                                </Typography>
                                <Typography>
                                    15:00:00
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <FastfoodIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '16px' }}  >
                                <Typography variant="h6" component="span">
                                    Cita Pegado Plancha
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                10:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <LaptopMacIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Code
                                </Typography>
                                <Typography>Because it&apos;s awesome!</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <HotelIcon />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Sleep
                                </Typography>
                                <Typography>Because you need rest</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary">
                                    <RepeatIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Repeat
                                </Typography>
                                <Typography>Because this is the life you love!</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Box>
            </Paper>
        </MainLayout >
    )
}

export default OrderOne