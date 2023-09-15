import React from "react";
import Head from "next/head";

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
                {children}
            </main>
        </>
    )
}