import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

function createData(
    orden: string,
    placa: string,
    origen: string,
    destino: string,
    status: string,
) {
    return {
        orden,
        placa,
        origen,
        destino,
        status,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        <Link href={`/orden/${row.orden}`}>
                            <RemoveRedEyeIcon sx={{ color: "#EB6609" }} />
                        </Link>
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.orden}
                </TableCell>
                <TableCell align="center">{row.placa}</TableCell>
                <TableCell align="center">{row.origen}</TableCell>
                <TableCell align="center">{row.destino}</TableCell>
                <TableCell align="center">
                    {
                        row.status === "Error" ?
                            <Chip icon={<PriorityHighIcon sx={{ color: "#EB6609" }} />} label={row.status} sx={{ color: "#EB6609" }} color="primary" variant="outlined" />
                            :
                            <Chip icon={<DoneOutlineOutlinedIcon sx={{ color: "#EB6609" }} />} label={row.status} sx={{ color: "red" }} color="error" variant="outlined" />
                    }
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('330806', "KNL078", "CD FUNZA", "PEREIRA", "Error"),
    createData("336360", "GZZ802", "CD FUNZA", "PEREIRA", "Ok"),
    createData("333243", "KUS333", "CD FUNZA", "ARMENIA", "Error"),
    createData("332178", "GZZ802", "CD FUNZA", "PEREIRA", "Error"),
    createData("134790", "GUR578", "CD FUNZA", "PEREIRA", "Error"),
    createData("338294", "KNL078", "CD FUNZA", "PEREIRA", "Ok"),
    createData("336051", "KUS333", "CD FUNZA", "PEREIRA", "Error"),
    createData("336003", "KNL078", "CD FUNZA", "PEREIRA", "Error"),
    createData("336028", "GUR578", "CD FUNZA", "MANIZALES", "Error"),
    createData("338321", "LCO390", "CD FUNZA", "ARMENIA", "Error"),
    createData("338443", "KUS333", "CD FUNZA", "PEREIRA", "Error"),
    createData("338998", "GZZ802", "CD FUNZA", "ARMENIA", "Error"),
    createData("340262", "KUS333", "CD FUNZA", "PEREIRA", "Error"),
    createData("340501", "KNL078", "CD FUNZA", "PEREIRA", "Error"),
    createData("340547", "GUR578", "CD FUNZA", "MANIZALES", "Error")
];

export const GraphOne = () => {
    return (
        <TableContainer component={Paper} sx={{ borderRadius: "15px" }}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow >
                        <TableCell />
                        <TableCell sx={{ color: "#EB6609", fontWeight: "bolder" }}>Orden</TableCell>
                        <TableCell sx={{ color: "#EB6609", fontWeight: "bolder" }} align="center">Placa</TableCell>
                        <TableCell sx={{ color: "#EB6609", fontWeight: "bolder" }} align="center">Origen</TableCell>
                        <TableCell sx={{ color: "#EB6609", fontWeight: "bolder" }} align="center">Destino</TableCell>
                        <TableCell sx={{ color: "#EB6609", fontWeight: "bolder" }} align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.orden} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}