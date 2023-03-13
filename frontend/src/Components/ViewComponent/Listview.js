import React, { useContext, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import user from '../../Assets/Images/user.png'
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete, AiOutlineMail, AiOutlinePhone, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Helper/AuthContext';
import { RxDotsVertical } from 'react-icons/rx'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Listview = ({ rowsPerPage, page }) => {

    const { leadData, setLeadData } = useContext(AuthContext);
    const [status, setStatus] = useState(false);

    const toogleStatus = (index) => {
        if (index === status) {
            setStatus(false)
            return
        }
        setStatus(index)
    }

    const patchData = (value, id) => {
        console.log(value)
        axios.put(`http://localhost:3000/api/v1/updateStatus/${id}`, { status: value }).then((res) => {
            toast.success("Lead status updated");
            setTimeout(() => {
                window.location.href = '/applicants'
            }, 2000)
        }).error((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#F4F4F4' }}>
                            <TableCell sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#616161' }}>S.N</TableCell>
                            <TableCell sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#616161' }}>Student Name</TableCell>
                            <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#616161' }}>Contact</TableCell>
                            <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#616161' }}>Status</TableCell>
                            <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#616161' }}>Country</TableCell>
                            <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#616161' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {leadData && leadData.formData && leadData.formData.filter(s => s.status == "New" || s.status == "In progress" || s.status == "Documentation" || s.status == "Visa waiting" || s.status == "Dead lead").slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((table, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, position: 'relative' }}
                            >
                                <TableCell component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}><div className='flex items-center gap-5'>{index + 1}</div></TableCell>
                                <TableCell component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}><Link to={`/profile/${table._id}`}><div className='flex items-center gap-5 hover:text-primary-blue'><img className='w-[40px] h-[40px] object-cover rounded-full' src={user} alt="user image" /> {table.firstName} {table.middleName} {table.lastName}</div></Link></TableCell>
                                <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}><p className='flex flex-col gap-1'><span className='flex items-center gap-2'><AiOutlineMail /> {table.email}</span><span className='flex items-center gap-2'><AiOutlinePhone />{table.contactNumber}</span></p></TableCell>
                                <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.status == "New" ? <span className='bg-[#96C0FF] tracking-wide p-2 rounded text-gray-800 font-poppins text-xs'>New</span> : table.status == "In progress" ? <span className='bg-[#96E3DF] tracking-wide p-2 rounded text-gray-800 font-poppins text-xs'>In progress</span> : table.status == "Documentation" ? <span className='bg-[#f6f797] tracking-wide p-2 rounded text-gray-800 font-poppins text-xs'>Documentation</span> : table.status == "Visa waiting" ? <span className='bg-[#f8cfac] tracking-wide p-2 rounded text-gray-800 font-poppins text-xs'>Visa waiting</span> : table.status == "Dead lead" ? <span className='bg-[#e7aaaa] tracking-wide p-2 rounded text-gray-800 font-poppins text-xs'>Dead lead</span> : <span className='font-poppins text-xs tracking-wide'>Unknown</span>}</TableCell>
                                <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.interestedCountry}</TableCell>
                                <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161', position: 'relative' }}><p className='flex gap-5'><span onClick={() => toogleStatus(table._id)} className='w-fit text-lg cursor-pointer hover:text-primary-blue'><FiEdit2 /></span><span className='w-fit text-lg cursor-pointer hover:text-red-500'><AiOutlineDelete /></span></p></TableCell>
                                {
                                    status === table._id &&
                                    <div className='w-fit bg-white border-[1px] rounded-md absolute z-50 top-1 border-gray-300 right-24 p-2 flex flex-col gap-3'>
                                        <div onClick={() => toogleStatus(table._id)} className='absolute h-6 w-6 flex justify-center items-center right-2 top-1 p-1 rounded-full text-xs cursor-pointer hover:bg-[#d7e4f9] transition ease-in-out duration-200'>{status === table._id ? <AiOutlineClose /> : <RxDotsVertical />}</div>
                                        <p className='font-poppins text-xs text-primary-black font-bold tracking-wide'>Move to -</p>
                                        <div className='grid grid-cols-6 gap-2'>
                                            <p onClick={() => patchData(table.status = "New", table._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#96C0FF]'>New</p>
                                            <p onClick={() => patchData(table.status = "In progress", table._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#96E3DF]'>In progress</p>
                                            <p onClick={() => patchData(table.status = "Documentation", table._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#f6f797]'>Documentation</p>
                                            <p onClick={() => patchData(table.status = "Visa waiting", table._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#f8cfac]'>Visa waiting</p>
                                            <p onClick={() => patchData(table.status = "Dead lead", table._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#e7aaaa]'>Dead Lead</p>
                                            <p onClick={() => patchData(table.status = "Successed", table._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-green-500'>Successed</p>
                                        </div>
                                    </div>
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

export default Listview