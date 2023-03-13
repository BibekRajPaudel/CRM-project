import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import user from '../../Assets/Images/user.png'

const NewlyAdded = () => {
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 500, backgroundColor: 'white', border: '1px solid #e7e7e7', borderRadius: '10px' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#F4F4F4' }}>
                            <TableCell sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 'bold', color: '#616161' }}>Name</TableCell>
                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 'bold', color: '#616161' }}>Created</TableCell>
                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 'bold', color: '#616161' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, position: 'relative' }}>
                            <TableCell component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>
                                <div className='w-fit  flex items-center gap-3'>
                                    <div className='w-9 h-19'>
                                        <img className='w-full h-full object-cover rounded' src={user} alt="User image" />
                                    </div>
                                    <p className='font-poppins text-sm'>Suresh Dhamal</p>
                                </div>
                            </TableCell>
                            <TableCell align='center' component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>15 Jan, 2023</TableCell>
                            <TableCell align='center' component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161', color: '#2B7FFF', cursor: 'pointer' }}>View Details</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, position: 'relative' }}>
                            <TableCell component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>
                                <div className='w-fit  flex items-center gap-3'>
                                    <div className='w-9 h-19'>
                                        <img className='w-full h-full object-cover rounded' src={user} alt="User image" />
                                    </div>
                                    <p className='font-poppins text-sm'>Ravi Gurung</p>
                                </div>
                            </TableCell>
                            <TableCell align='center' component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>15 Jan, 2023</TableCell>
                            <TableCell align='center' component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161', color: '#2B7FFF', cursor: 'pointer' }}>View Details</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </TableContainer>
        </>
    )
}

export default NewlyAdded