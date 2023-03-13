import React, { useContext, useState } from 'react'
import { AiFillFilePdf } from 'react-icons/ai'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IoMdAddCircle } from 'react-icons/io'
import '../../../CSS/Sidebar.css'
import { AuthContext } from '../../../Helper/AuthContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Payment = ({ studentDetails, storePaymentObjectID }) => {

    const { setAddPayment, setEditPaymentDetails, setEditPaymentReceipt } = useContext(AuthContext);

    const { id } = useParams();

    const storePaymentID = (id) => {
        setEditPaymentReceipt(true);
        storePaymentObjectID(id)
    }
    const storePaymentDetailID = (id) => {
        setEditPaymentDetails(true);
        storePaymentObjectID(id)
    }

    // Delete payment
    const deletePaymentReceipt = (paymentID) => {
        axios.delete(`http://localhost:3000/api/v1/paymentdelget/${id}/${paymentID}`).then((res) => {
            console.log("Receipt deleted")
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <>
            <div className='w-full pl-3 pr-3 pb-2'>
                <div className='w-full flex justify-end'>
                    <div onClick={() => setAddPayment(true)} className='w-fit p-2 bg-primary-blue rounded'>
                        <p className='w-40 font-poppins flex items-center justify-center gap-3 text-sm text-white cursor-pointer'><span><IoMdAddCircle /></span>Add Payment</p>
                    </div>
                </div>
                {
                    studentDetails && studentDetails.formData && studentDetails.formData.payment.length > 0 ?
                        <TableContainer id='visa_payment' sx={{ width: 1182 }}>
                            <Table aria-label="simple table">
                                <TableHead sx={{}}>
                                    <TableRow sx={{}}>
                                        <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'black', fontWeight: '600' }}>Name</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'black', fontWeight: '600' }}>Bank</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'black', fontWeight: '600' }}>Payment For</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'black', fontWeight: '600' }}>Date</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'black', fontWeight: '600' }}>Amount</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'black', fontWeight: '600' }}>Receipt</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'black', fontWeight: '600' }}>Upload</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'black', fontWeight: '600' }}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        studentDetails && studentDetails.formData && studentDetails.formData.payment.map((table, index) => (
                                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell align="left" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>{table.name}</TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>{table.bank}</TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>{table.paymentFor}</TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>{table.date}</TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>{table.totalAmount}</TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}><a href={`http://localhost:3000/${table.receipt}`} target="_blank"><p className='flex items-center gap-2 hover:text-blue-600 cursor-pointer'><span className='text-xl text-[#FF1B0E]'><AiFillFilePdf /></span>Receipt.pdf</p></a></TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}><button onClick={() => storePaymentID(table._id)} className='w-32 bg-[#6ba6ff] hover:text-[#6ba6ff] hover:bg-white border-[1px] hover:border-[#6ba6ff]  rounded-md text-white font-poppins text-sm p-2'>Update Receipt</button></TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161', display: 'flex', columnGap: '5px' }}><button onClick={() => storePaymentDetailID(table._id)} className='w-fit bg-[#6ba6ff] hover:text-[#6ba6ff] hover:bg-white border-[1px] hover:border-[#6ba6ff]  rounded-md text-white font-poppins text-sm p-2'>Edit</button> <button onClick={() => deletePaymentReceipt(table._id)} className='w-fit bg-[#ed4646] hover:text-[#ed4646] hover:bg-white border-[1px] hover:border-[#ed4646]  rounded-md text-white font-poppins text-sm p-2'>Delete</button></TableCell>
                                            </TableRow>
                                        ))
                                    }

                                </TableBody>
                            </Table>

                        </TableContainer >
                        :
                        <>
                            <div className='w-full h-[150px] flex justify-center items-center'>
                                <p className='font-poppins text-sm tracking-wide text-red-600'>No data available</p>
                            </div>
                        </>

                }

            </div>
        </>
    )
}

export default Payment