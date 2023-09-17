import { Grid, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode | React.ReactNode[]
}

export const UIOrderCard: React.FC<Props> = ({ children }) => {
    return (
        <Grid item xs={12} sm={4} md={8} lg={4} xl={4}>
            <Card
                sx={{
                    m: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "auto",
                    height: "170px",
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: '8px',
                    border: "1px solid gray",
                    boxShadow: '10x 10px 10px 10px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        boxShadow: '2px 2px 2px 2px rgb(233, 99, 10)',
                    },
                }}
            >
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </Grid >
    )
}
