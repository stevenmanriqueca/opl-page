import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";

interface Props {
    title: string;
    children: React.ReactNode | React.ReactNode[]
}

export const MainLayout: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Box>
                    {children}
                </Box>
            </main>
        </>
    )
}