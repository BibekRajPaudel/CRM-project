import React, { useContext, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FiEdit2 } from 'react-icons/fi'
import { IoMdAddCircle } from 'react-icons/io'
import { MdModeEditOutline } from 'react-icons/md'
import { AiOutlineDelete, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { AuthContext } from '../../../Helper/AuthContext';

const EnglishTest = ({ studentDetails, storeEnglishObjectID }) => {

    const { addEnglishTest, setAddEnglishTest, editEnglishTest, setEditEnglishTest } = useContext(AuthContext);


    const [ieltsNavbar, setIeltsNavbar] = useState(true);
    const [pteNavbar, setPteNavbar] = useState(false);
    const [greNavbar, setGreNavbar] = useState(false);
    const [toeflNavbar, setToeflNavbar] = useState(false);
    const [schoolLink, setSchoolLink] = useState(true);
    const [plusTwoLink, setPlusTwoLink] = useState(false);
    const [bachelorsLink, setBachelorsLink] = useState(false);
    const [mastersLink, setMastersLink] = useState(false);

    // Toogle document navbar
    const toggleIelts = () => {
        setIeltsNavbar(true);
        setPteNavbar(false);
        setGreNavbar(false);
        setToeflNavbar(false);
    }
    const togglePte = () => {
        setIeltsNavbar(false);
        setPteNavbar(true);
        setGreNavbar(false);
        setToeflNavbar(false);
    }
    const toggleGre = () => {
        setIeltsNavbar(false);
        setPteNavbar(false);
        setGreNavbar(true);
        setToeflNavbar(false);
    }
    const toggleToefl = () => {
        setIeltsNavbar(false);
        setPteNavbar(false);
        setGreNavbar(false);
        setToeflNavbar(true);
    }

    const storeTestDetailsID = (id) => {
        setEditEnglishTest(true);
        storeEnglishObjectID(id)
    }

    return (
        <>
            <div className='w-full pl-3 pr-3'>
                <div className='w-full h-20 flex items-center justify-end gap-5'>
                    <div onClick={() => setAddEnglishTest(true)} className='w-fit p-2 bg-primary-blue rounded'>
                        <p className='w-40 font-poppins flex items-center justify-center gap-3 text-sm text-white cursor-pointer'><span><IoMdAddCircle /></span>Add English Test</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-4 gap-5'>
                    <div onClick={toggleIelts} className={ieltsNavbar ? 'w-full bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer' : 'w-full bg-[#d9d9d9] hover:bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer'}>
                        <p className='text-sm font-poppins'>IELTS</p>
                    </div>
                    <div onClick={togglePte} className={pteNavbar ? 'w-full bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer' : 'w-full bg-[#d9d9d9] hover:bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer'}>
                        <p className='text-sm font-poppins'>PTE</p>
                    </div>
                    <div onClick={toggleGre} className={greNavbar ? 'w-full bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer' : 'w-full bg-[#d9d9d9] hover:bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer'}>
                        <p className='text-sm font-poppins'>GRE</p>
                    </div>
                    <div onClick={toggleToefl} className={toeflNavbar ? 'w-full bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer' : 'w-full bg-[#d9d9d9] hover:bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer'}>
                        <p className='text-sm font-poppins'>TOEFL</p>
                    </div>
                </div>
                {/* IELTS */}
                {
                    ieltsNavbar ?
                        <>
                            {
                                studentDetails && studentDetails.formData && (studentDetails.formData.englishTest.filter(test => test.testType === 'IELTS').length > 0) ?
                                    <TableContainer sx={{}}>
                                        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                                            <TableHead sx={{}}>
                                                <TableRow sx={{}}>
                                                    <TableCell align='center' sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>S.N</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>English Test</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Given Date</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Reading</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Writing</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Listening</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Speaking</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Overall Score</TableCell>
                                                    <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {studentDetails && studentDetails.formData && studentDetails.formData.englishTest.filter(test => test.testType === 'IELTS').map((table, index) => (
                                                    <TableRow
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell align="center" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{index + 1}</TableCell>
                                                        <TableCell align="center" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161', textTransform: 'uppercase' }}>{table.testType}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.givenExamDate}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Reading}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Writing}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Listening}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Speaking}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.overallScore}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}><p className='flex gap-5'><span onClick={() => storeTestDetailsID(table._id)} className='w-fit text-lg cursor-pointer hover:text-primary-blue'><FiEdit2 /></span><span className='w-fit text-lg cursor-pointer hover:text-red-500'><AiOutlineDelete /></span></p></TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>

                                    </TableContainer>
                                    :
                                    <>
                                        <div className='w-full min-h-[300px] flex justify-center items-center'>
                                            <div className='w-fit'>
                                                <p className='font-poppins text-sm tracking-wide text-red-600 font-bold '>No test detail available</p>
                                            </div>
                                        </div>
                                    </>
                            }
                        </> : null
                }
                {/* PTE */}
                {
                    pteNavbar ?
                        <>
                            {
                                studentDetails && studentDetails.formData && (studentDetails.formData.englishTest.filter(test => test.testType === 'PTE').length > 0) ?
                                    <TableContainer sx={{}}>
                                        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                                            <TableHead sx={{}}>
                                                <TableRow sx={{}}>
                                                    <TableCell align='center' sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>S.N</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>English Test</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Given Date</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Reading</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Writing</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Listening</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Speaking</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Overall Score</TableCell>
                                                    <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {studentDetails && studentDetails.formData && studentDetails.formData.englishTest.filter(test => test.testType === 'PTE').map((table, index) => (
                                                    <TableRow
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell align="center" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{index + 1}</TableCell>
                                                        <TableCell align="center" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161', textTransform: 'uppercase' }}>{table.testType}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.givenExamDate}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Reading}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Writing}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Listening}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Speaking}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.overallScore}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}><p className='flex gap-5'><span onClick={() => storeTestDetailsID(table._id)} className='w-fit text-lg cursor-pointer hover:text-primary-blue'><FiEdit2 /></span><span className='w-fit text-lg cursor-pointer hover:text-red-500'><AiOutlineDelete /></span></p></TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>

                                    </TableContainer>
                                    :
                                    <>
                                        <div className='w-full min-h-[300px] flex justify-center items-center'>
                                            <div className='w-fit'>
                                                <p className='font-poppins text-sm tracking-wide text-red-600 font-bold'>No test detail available</p>
                                            </div>
                                        </div>
                                    </>
                            }
                        </> : null
                }
                {/* GRE */}
                {
                    greNavbar ?
                        <>
                            {
                                studentDetails && studentDetails.formData && (studentDetails.formData.englishTest.filter(test => test.testType === 'GRE').length > 0) ?
                                    <TableContainer sx={{}}>
                                        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                                            <TableHead sx={{}}>
                                                <TableRow sx={{}}>
                                                    <TableCell align='center' sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>S.N</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>English Test</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Given Date</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Reading</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Writing</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Listening</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Speaking</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Overall Score</TableCell>
                                                    <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {studentDetails && studentDetails.formData && studentDetails.formData.englishTest.filter(test => test.testType === 'GRE').map((table, index) => (
                                                    <TableRow
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell align="center" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{index + 1}</TableCell>
                                                        <TableCell align="center" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161', textTransform: 'uppercase' }}>{table.testType}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.givenExamDate}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>-</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>-</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>-</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>-</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.overallScore}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}><p className='flex gap-5'><span onClick={() => storeTestDetailsID(table._id)} className='w-fit text-lg cursor-pointer hover:text-primary-blue'><FiEdit2 /></span><span className='w-fit text-lg cursor-pointer hover:text-red-500'><AiOutlineDelete /></span></p></TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>

                                    </TableContainer>
                                    :
                                    <>
                                        <div className='w-full min-h-[300px] flex justify-center items-center'>
                                            <div className='w-fit'>
                                                <p className='font-poppins text-sm tracking-wide text-red-600 font-bold'>No test detail available</p>
                                            </div>
                                        </div>
                                    </>
                            }

                        </> : null
                }
                {/* TOEFL */}
                {
                    toeflNavbar ?

                        <>
                            {
                                studentDetails && studentDetails.formData && (studentDetails.formData.englishTest.filter(test => test.testType === 'TOEFL').length > 0) ?

                                    < TableContainer sx={{}}>
                                        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                                            <TableHead sx={{}}>
                                                <TableRow sx={{}}>
                                                    <TableCell align='center' sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>S.N</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>English Test</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Given Date</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Reading</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Writing</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Listening</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Speaking</TableCell>
                                                    <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Overall Score</TableCell>
                                                    <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'black', fontWeight: '600' }}>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {studentDetails && studentDetails.formData && studentDetails.formData.englishTest.filter(test => test.testType === 'TOEFL').map((table, index) => (
                                                    <TableRow
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell align="center" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{index + 1}</TableCell>
                                                        <TableCell align="center" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161', textTransform: 'uppercase' }}>{table.testType}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.givenExamDate}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Reading}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Writing}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Listening}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.Speaking}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}>{table.overallScore}</TableCell>
                                                        <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#616161' }}><p className='flex gap-5'><span onClick={() => storeTestDetailsID(table._id)} className='w-fit text-lg cursor-pointer hover:text-primary-blue'><FiEdit2 /></span><span className='w-fit text-lg cursor-pointer hover:text-red-500'><AiOutlineDelete /></span></p></TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>

                                    </TableContainer>
                                    :
                                    <>
                                        <div className='w-full min-h-[300px] flex justify-center items-center'>
                                            <div className='w-fit'>
                                                <p className='font-poppins text-sm tracking-wide text-red-600 font-bold'>No test detail available</p>
                                            </div>
                                        </div>
                                    </>
                            }
                        </>
                        : null
                }
            </div>
        </>

    )
}

export default EnglishTest