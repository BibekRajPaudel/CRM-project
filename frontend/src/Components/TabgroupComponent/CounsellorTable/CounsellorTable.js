import React, { useContext, useEffect } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import Table from '@mui/material/Table';
import { IoMdAddCircle } from 'react-icons/io'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import data from '../../../MaterialUICustomTheme/ApplicantTable'
import { AuthContext } from '../../../Helper/AuthContext';
import axios from 'axios';

const CounsellorTable = ({ studentDetails, leadID }) => {

    const { setAddCounselor } = useContext(AuthContext);

    const deleteCounsellor = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3000/api/v1/deleteCounsellor/${leadID}/${id}`).then((res) => {
            console.log("Counsellor Deleted Successfully")
        })
    }

    return (
        <>
            <div className="w-full p-3 flex justify-end items-center">
                <div onClick={() => setAddCounselor(true)} className='w-fit p-2 bg-primary-blue rounded'>
                    <p className='w-40 font-poppins flex items-center justify-center gap-3 text-sm text-white cursor-pointer'><span><IoMdAddCircle /></span>Add Counselor</p>
                </div>
            </div>
            {
                studentDetails && studentDetails.formData && (studentDetails.formData.addCounsellor.length > 0) ?

                    <TableContainer sx={{}}>
                        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                            <TableHead sx={{}}>
                                <TableRow sx={{}}>
                                    <TableCell align='center' sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>S.N</TableCell>
                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Name</TableCell>
                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Contact</TableCell>
                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Mail</TableCell>
                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    studentDetails && studentDetails.formData && studentDetails.formData.addCounsellor.map((table, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{index + 1}</TableCell>
                                            <TableCell align="center" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.name}</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.contact}</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.email}</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}><div className='w-full text-center flex justify-center items-center'><p onClick={() => deleteCounsellor(table._id)} className='w-fit text-lg cursor-pointer hover:text-red-500 text-center'><AiOutlineDelete /></p></div></TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>

                    </TableContainer>
                    :
                    <div className='w-full h-[300px] flex justify-center items-center'>
                        <p>No counselor assigned</p>
                    </div>
            }
        </>
    )
}

export default CounsellorTable