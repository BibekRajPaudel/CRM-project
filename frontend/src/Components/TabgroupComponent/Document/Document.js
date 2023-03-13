import React, { useContext, useState } from 'react'
import pdf from '../../../Assets/Images/pdf.png'
import { IoMdAddCircle } from 'react-icons/io'
import { MdModeEditOutline } from 'react-icons/md'
import { AiFillFilePdf } from 'react-icons/ai'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AuthContext } from '../../../Helper/AuthContext'

const Document = ({ studentDetails, storeObjectID }) => {

    const [personalDocement, setPersonalDocument] = useState(true);
    const [academicDocument, setAcademicDocument] = useState(false);
    const [financialDocement, setFinancialDocument] = useState(false);
    const [academicID, setAcademicID] = useState();
    const { addPersonalDocument, setAddPersonalDocument, addAcademicDocument, addFinancialDocument,
        setAddAcademicDocument, setAddFinancialDocument, editAcademicDetails, setEditAcademicDetails } = useContext(AuthContext);
    // const [schoolLink, setSchoolLink] = useState(true);
    // const [plusTwoLink, setPlusTwoLink] = useState(false);
    // const [bachelorsLink, setBachelorsLink] = useState(false);
    // const [mastersLink, setMastersLink] = useState(false);

    // Toogle document navbar
    const tooglePersonal = () => {
        setPersonalDocument(true);
        setAcademicDocument(false);
        setFinancialDocument(false);
    }
    const toogleAcademic = () => {
        setPersonalDocument(false);
        setAcademicDocument(true);
        setFinancialDocument(false);
    }
    const toogleFinancial = () => {
        setPersonalDocument(false);
        setAcademicDocument(false);
        setFinancialDocument(true);
    }
    // Toogle education navbar
    // const toogleSchool = () => {
    //     setSchoolLink(true);
    //     setPlusTwoLink(false);
    //     setBachelorsLink(false);
    //     setMastersLink(false);
    // }
    // const tooglePlusTwo = () => {
    //     setSchoolLink(false);
    //     setPlusTwoLink(true);
    //     setBachelorsLink(false);
    //     setMastersLink(false);
    // }
    // const toogleBachelors = () => {
    //     setSchoolLink(false);
    //     setPlusTwoLink(false);
    //     setBachelorsLink(true);
    //     setMastersLink(false);
    // }
    // const toogleMasters = () => {
    //     setSchoolLink(false);
    //     setPlusTwoLink(false);
    //     setBachelorsLink(false);
    //     setMastersLink(true);
    // }

    // function to store id and state

    const storeAcademicDetailsDocumentID = (id) => {
        setAddAcademicDocument(true);
        storeObjectID(id)
    }
    const storeAcademicDetailsID = (id) => {
        setEditAcademicDetails(true);
        storeObjectID(id)
    }
    return (
        <>
            <div className='w-full pl-3 pr-3'>
                <div className='w-full grid grid-cols-3 gap-5'>
                    <div onClick={tooglePersonal} className={personalDocement ? 'w-full bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer' : 'w-full bg-[#d9d9d9] hover:bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer'}>
                        <p className='text-sm font-poppins'>Personal Document</p>
                    </div>
                    <div onClick={toogleAcademic} className={academicDocument ? 'w-full bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer' : 'w-full bg-[#d9d9d9] hover:bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer'}>
                        <p className='text-sm font-poppins'>Academic Document</p>
                    </div>
                    <div onClick={toogleFinancial} className={financialDocement ? 'w-full bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer' : 'w-full bg-[#d9d9d9] hover:bg-[#e6f0ff] flex items-center justify-center p-2 rounded-sm cursor-pointer'}>
                        <p className='text-sm font-poppins'>Financial Document</p>
                    </div>
                </div>
                {
                    personalDocement ?
                        <>
                            <div className='w-full flex flex-col gap-3 pb-2'>
                                <div className='w-full h-20 flex items-center justify-end gap-5'>
                                    <div onClick={() => setAddPersonalDocument(p => !p)} className='w-fit p-2 bg-primary-blue rounded'>
                                        <p className='w-52 font-poppins flex items-center justify-center gap-3 text-sm text-white cursor-pointer'><span><IoMdAddCircle /></span>Update Document</p>
                                    </div>

                                </div>
                                {/* Document */}
                                <div className='flex gap-5'>

                                    <a href={`http://localhost:3000/${studentDetails && studentDetails.formData && studentDetails.formData.uploadCitizenship}`} target="blank">
                                        <div className='w-[300px] h-[250px] bg-gray-200 border-[1px] border-gray-300 cursor-pointer flex flex-col gap-2 items-center justify-between hover:bg-gray-200 transition-all ease-in-out rounded-md'>
                                            <div className='w-full h-full flex justify-center items-center p-2'>
                                                <img className='w-32' src={pdf} alt="PDF logo" />
                                            </div>
                                            <div className='w-full h-14 flex justify-center items-center bg-white rounded-b-md p-2 border-t-[1px] border-gray-300'>
                                                <p className='font-poppins text-xs text-gray-900 flex gap-2 items-center'><span className='text-red-600 text-lg'><AiFillFilePdf /></span> {studentDetails && studentDetails.formData && studentDetails.formData.firstName} {studentDetails && studentDetails.formData && studentDetails.formData.lastName}-Citizenship</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href={`http://localhost:3000/${studentDetails && studentDetails.formData && studentDetails.formData.uploadPassport}`} target="blank">
                                        <div className='w-[300px] h-[250px] bg-gray-200 border-[1px] border-gray-300 cursor-pointer flex flex-col gap-2 items-center justify-between transition-all ease-in-out rounded-md'>
                                            <div className='w-full h-full flex justify-center items-center p-2'>
                                                <img className='w-32' src={pdf} alt="PDF logo" />
                                            </div>
                                            <div className='w-full h-14 flex justify-center items-center bg-white rounded-b-md p-2 border-t-[1px] border-gray-300'>
                                                <p className='font-poppins text-xs text-gray-900 flex gap-2 items-center'><span className='text-red-600 text-lg'><AiFillFilePdf /></span> {studentDetails && studentDetails.formData && studentDetails.formData.firstName} {studentDetails && studentDetails.formData && studentDetails.formData.lastName}-Passport</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </> : null
                }
                {
                    academicDocument ?
                        <>
                            <TableContainer id='visa_payment' sx={{}}>
                                <Table sx={{}} aria-label="simple table">
                                    <TableHead sx={{}}>
                                        <TableRow sx={{}}>
                                            <TableCell align="left" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'black', fontWeight: '600' }}>Level</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'black', fontWeight: '600' }}>Institution</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'black', fontWeight: '600' }}>Joined Year</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'black', fontWeight: '600' }}>Passed Year</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'black', fontWeight: '600' }}>Document</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'black', fontWeight: '600' }}>Upload</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'black', fontWeight: '600' }}>Edit</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {studentDetails && studentDetails.formData && studentDetails.formData.academicDetails.map((academics, index) => (
                                            <TableRow key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>{academics.Education}</TableCell>
                                                <TableCell align="center" component="th" scope="row" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>{academics.collegeName}</TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>{academics.joinedYear}</TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}>{academics.passedYear}</TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}><a href={`http://localhost:3000/${academics.uploadMarkSheet}`} target="_blank"><p className='flex items-center gap-2'><span className='text-xl text-[#FF1B0E]'><AiFillFilePdf /></span>Marksheet</p></a></TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}><button onClick={() => storeAcademicDetailsDocumentID(academics._id)} className='w-fit bg-[#6ba6ff] hover:text-[#6ba6ff] hover:bg-white border-[1px] hover:border-[#6ba6ff]  rounded-md text-white font-poppins text-sm p-2'>Upload Document</button></TableCell>
                                                <TableCell align="center" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#616161' }}><button onClick={() => storeAcademicDetailsID(academics._id)} className='w-24 bg-[#6ba6ff] hover:text-[#6ba6ff] hover:bg-white border-[1px] hover:border-[#6ba6ff]  rounded-md text-white font-poppins text-sm p-2'>Edit</button></TableCell>
                                            </TableRow>
                                        ))

                                        }

                                    </TableBody>
                                </Table>

                            </TableContainer >
                        </> : null
                }
                {
                    financialDocement ?
                        <>
                            <div className='w-full flex flex-col gap-3 pb-2'>
                                <div className='w-full h-20 flex items-center justify-end gap-5'>
                                    <div onClick={() => setAddFinancialDocument(p => !p)} className='w-fit p-2 bg-primary-blue rounded'>
                                        <p className='w-40 font-poppins flex items-center justify-center gap-3 text-sm text-white cursor-pointer'><span><IoMdAddCircle /></span>Add Document</p>
                                    </div>
                                    <div className='w-fit p-2 bg-green-600 rounded'>
                                        <p className='w-40 font-poppins flex items-center justify-center  gap-3 text-sm cursor-pointer text-white'><span><MdModeEditOutline /></span>Edit Document</p>
                                    </div>
                                </div>
                                {/* Document */}
                                <div className='flex gap-5'>
                                    <a href={studentDetails && studentDetails.formData && studentDetails.formData.uploadCitizenship}>
                                        <div className='w-[200px]  h-fit bg-gray-200 border-[1px] border-gray-300 cursor-pointer flex flex-col gap-2 items-center hover:bg-gray-200 transition-all ease-in-out rounded-md'>
                                            <div className='w-24 p-2'>
                                                <img src={pdf} alt="PDF logo" />
                                            </div>
                                            <div className='w-full h-14 flex justify-center items-center bg-white rounded-b-md p-2 border-t-[1px] border-gray-300'>
                                                <p className='font-poppins text-sm text-gray-900 flex gap-2 items-center'><span className='text-red-600 text-lg'><AiFillFilePdf /></span> Loan</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div className='w-[200px] h-fit bg-gray-200 border-[1px] border-gray-300 cursor-pointer flex flex-col gap-2 items-center transition-all ease-in-out rounded-md'>
                                        <div className='w-24 p-2'>
                                            <img src={pdf} alt="PDF logo" />
                                        </div>
                                        <div className='w-full h-14 flex justify-center items-center bg-white rounded-b-md p-2 border-t-[1px] border-gray-300'>
                                            <p className='font-poppins text-sm text-gray-900 flex gap-2 items-center'><span className='text-red-600 text-lg'><AiFillFilePdf /></span> Bank</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </> : null
                }
            </div>
        </>
    )
}

export default Document