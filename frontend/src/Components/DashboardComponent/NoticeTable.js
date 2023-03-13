import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const NoticeTable = () => {
    return (
        <>
            <TableContainer>
                <Table sx={{ backgroundColor: 'white', minWidth: 1000, border: '1px solid #e7e7e7', borderRadius: '10px' }} aria-label="simple table">
                    <TableHead>
                        < TableRow sx={{ backgroundColor: '#F4F4F4' }}>
                            <TableCell sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 'bold', color: '#616161' }}>S.N</TableCell>
                            <TableCell sx={{ width: '900px', fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 'bold', color: '#616161' }}>Title</TableCell>
                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 'bold', color: '#616161' }}>Created</TableCell>
                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 'bold', color: '#616161' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, position: 'relative' }}>
                            <TableCell component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>1</TableCell>
                            <TableCell component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>Meeting with Western Sydney university</TableCell>
                            <TableCell align='center' component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>15 Jan, 2023</TableCell>
                            <TableCell align='center' component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}><Checkbox /></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, position: 'relative' }}>
                            <TableCell component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>2</TableCell>
                            <TableCell component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>Meeting with Western Sydney university</TableCell>
                            <TableCell align='center' component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>15 Jan, 2023</TableCell>
                            <TableCell align='center' component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}><Checkbox /></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, position: 'relative' }}>
                            <TableCell component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>3</TableCell>
                            <TableCell component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>Meeting with Western Sydney university</TableCell>
                            <TableCell align='center' component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>15 Jan, 2023</TableCell>
                            <TableCell align='center' component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}><Checkbox /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </TableContainer >
        </>
    )
}

export default NoticeTable