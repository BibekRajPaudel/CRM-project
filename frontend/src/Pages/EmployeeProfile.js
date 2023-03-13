import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/SidebarComponent/Sidebar'
import Topbar from '../Components/TopbarComponent/Topbar'
import userIMG from '../Assets/Images/user.png'
import { BsGenderAmbiguous, BsPencil, BsClock } from 'react-icons/bs'
import { GrDocumentText } from 'react-icons/gr'
import { Tooltip } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'

const EmployeeProfile = () => {

    const [togglePhoto, setTogglePhoto] = useState(false)
    const [togglePassword, setTogglePassword] = useState(false)
    const [toggleDetails, setToggleDetails] = useState(false)
    const [toggleReport, setToggleReport] = useState(false)

    const [employeeDetails, setEmployeeDetails] = useState()

    const headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/getDetails', { headers: headers }).then((res) => {
            setEmployeeDetails(res.data)
        })
    }, [])

    const updateEmpoyeeDetails = (values) => {
        console.log(values)
        axios.put('http://localhost:3000/api/v1/editDetails', values, { headers: headers }).then((res) => {
            console.log("Employee updated")
        }).then((error) => {
            console.log(error)
        })
    }
    const addReport = (formData) => {
        axios.put('http://localhost:3000/api/v1/addReport', formData, { headers: headers }).then((res) => {
            console.log("Report updated")
        }).then((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <Topbar />
            <div className='flex gap-3'>
                <div>
                    <Sidebar />
                </div>
                <div className='w-full pr-5 pt-5 pb-5 h-[90vh] overflow-y-auto'>
                    {/* Button */}
                    <div className='flex items-center gap-5 justify-end h-12'>
                        <p onClick={() => setTogglePassword(true)} className='bg-primary-lightblue w-44 text-center hover:bg-white hover:border-[1px] hover:border-primary-lightblue hover:text-primary-lightblue cursor-pointer p-2 font-poppins text-sm rounded text-white'>Change Password</p>
                        <p onClick={() => setToggleReport(true)} className='bg-primary-lightblue w-32 text-center hover:bg-white hover:border-[1px] hover:border-primary-lightblue hover:text-primary-lightblue cursor-pointer p-2 font-poppins text-sm rounded text-white'>Add Reports</p>
                        <p onClick={() => setToggleDetails(true)} className='bg-primary-lightblue w-32 text-center hover:bg-white hover:border-[1px] hover:border-primary-lightblue hover:text-primary-lightblue cursor-pointer p-2 font-poppins text-sm rounded text-white'>Update Details</p>

                    </div>
                    {/* Details section */}
                    <div className='w-full flex gap-5 mt-5'>
                        {/* Image Section */}
                        <div className='bg-[#E6F0FF] w-[20%] flex flex-col gap-3 items-center justify-center p-3 rounded'>
                            <div className='relative'>
                                <img className='w-44 h-44 rounded-full border-2 border-primary-blue' src={userIMG} alt="Employeee Image" />
                                <Tooltip title="Edit photo" placement='right'>
                                    <div onClick={() => setTogglePhoto(true)} className='w-fit absolute bottom-2 right-4 bg-primary-blue p-2 rounded-full'>
                                        <p className='text-white'><BsPencil /></p>
                                    </div>
                                </Tooltip>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='font-poppins text-lg tracking-wide font-extrabold capitalize'>{employeeDetails && employeeDetails.user && employeeDetails.user.name}</p>
                                <p className='font-poppins text-sm tracking-wide capitalize text-gray-500'>{employeeDetails && employeeDetails.user && employeeDetails.user.role}</p>
                            </div>
                            {/* Edit button */}

                        </div>
                        {/* Employee detail */}
                        <div className='w-[80%] bg-white grid grid-cols-3 grid-rows-3 p-3 rounded'>
                            <div className='w-full flex flex-col gap-1'>
                                <p className='font-poppins text-base tracking-wide text-primary-black font-bold'>Gender</p>
                                <p className='font-poppins text-sm text-gray-500'>{employeeDetails && employeeDetails.user && employeeDetails.user.gender}</p>
                            </div>
                            <div className='w-[full] flex flex-col gap-1'>
                                <p className='font-poppins text-base tracking-wide text-primary-black font-bold'>Permanent Address</p>
                                <p className='font-poppins text-sm text-gray-500'>{employeeDetails && employeeDetails.user && employeeDetails.user.permanentAddress}</p>
                            </div>
                            <div className='w-[full] flex flex-col gap-1'>
                                <p className='font-poppins text-base tracking-wide text-primary-black font-bold'>Temporary Address</p>
                                <p className='font-poppins text-sm text-gray-500'>{employeeDetails && employeeDetails.user && employeeDetails.user.temporaryAddress}</p>
                            </div>
                            <div className='w-[full] flex flex-col gap-1'>
                                <p className='font-poppins text-base tracking-wide text-primary-black font-bold'>Joined</p>
                                <p className='font-poppins text-sm text-gray-500'>{employeeDetails && employeeDetails.user && employeeDetails.user.createdAt}</p>
                            </div>
                            <div className='w-[full] flex flex-col gap-1'>
                                <p className='font-poppins text-base tracking-wide text-primary-black font-bold'>Date of birth</p>
                                <p className='font-poppins text-sm text-gray-500'>{employeeDetails && employeeDetails.user && employeeDetails.user.dateOfBirth}</p>
                            </div>
                            <div className='w-[full] flex flex-col gap-1'>
                                <p className='font-poppins text-base tracking-wide text-primary-black font-bold'>Phone</p>
                                <p className='font-poppins text-sm text-gray-500'>{employeeDetails && employeeDetails.user && employeeDetails.user.contact}</p>
                            </div>
                            <div className='w-[full] flex flex-col gap-1'>
                                <p className='font-poppins text-base tracking-wide text-primary-black font-bold'>Email</p>
                                <p className='font-poppins text-sm text-gray-500'>{employeeDetails && employeeDetails.user && employeeDetails.user.email}</p>
                            </div>
                        </div>
                    </div>
                    {/* Other details */}
                    <div className='w-full flex gap-5 mt-5'>
                        {/* Attendance */}
                        <div className='w-[20%] flex flex-col gap-2 p-2'>
                            <p className='font-poppins text-sm'>Attendance</p>
                        </div>
                        {/*Activity log */}
                        <div className='w-[60%] bg-white shadow flex flex-col gap-2'>
                            <p className='font-poppins text-sm p-2 border-b-2'>Activity Log</p>
                            <div className='w-full'>
                                <div className='w-full flex gap-5'>
                                    {/* Timeline */}

                                    <div className='activities_container flex flex-col gap-6 p-5'>
                                        <div className='activities flex gap-4 justify-center items-center'>
                                            <p className=' font-poppins text-xs text-gray-400'>Dec 20, 2019</p>
                                            <div className='w-[40px]'>
                                                <img src={userIMG} alt="" />
                                            </div>
                                            <p className='font-poppins text-sm '>Meeting with him.</p>
                                        </div>
                                        <div className='activities flex gap-4 justify-center items-center'>
                                            <p className=' font-poppins text-xs text-gray-400'>Dec 20, 2019</p>
                                            <div className='w-[40px]'>
                                                <img src={userIMG} alt="" />
                                            </div>
                                            <p className='font-poppins text-sm '>Meeting with him.</p>
                                        </div>
                                        <div className='activities flex gap-4 justify-center items-center'>
                                            <p className=' font-poppins text-xs text-gray-400'>Dec 20, 2019</p>
                                            <div className='w-[40px]'>
                                                <img src={userIMG} alt="" />
                                            </div>
                                            <p className='font-poppins text-sm '>Meeting with him.</p>
                                        </div>
                                        <div className='activities flex gap-4 justify-center items-center'>
                                            <p className=' font-poppins text-xs text-gray-400'>Dec 20, 2019</p>
                                            <div className='w-[40px]'>
                                                <img src={userIMG} alt="" />
                                            </div>
                                            <p className='font-poppins text-sm '>Meeting with him.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Reports */}
                        <div className='w-[20%] bg-white shadow flex flex-col gap-2'>
                            <p className='font-poppins text-sm p-2 border-b-2'>Reports</p>
                            <div className='w-full h-full flex flex-col gap-2 p-2'>
                                {employeeDetails && employeeDetails.user && employeeDetails.user.report.map((report, index) => (
                                    < div key={index} className='w-full flex items-start gap-2 bg-gray-100 p-2' >
                                        <p className='text-sm pt-1'><GrDocumentText /></p>
                                        <div className='flex flex-col gap-1'>
                                            <a href={`http://localhost:3000/${report.pdf}`} target="_blank"><p className='font-poppins text-sm cursor-pointer hover:text-primary-blue'>{report.name}</p></a>
                                            <p className='font-poppins text-[10px] text-gray-400 flex items-center gap-1'><BsClock />02/03/2023</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal for photo */}
            {
                togglePhoto &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Update user photo</h1>
                            <p onClick={() => setTogglePhoto(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <Formik>
                                <Form>
                                    <div className='w-full '>
                                        <Field type="file" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide" />
                                    </div>
                                    <Field type="submit" value="Update" className="bg-primary-blue w-40 rounded-md p-2 font-poppins tracking-wide text-white mt-5 hover:bg-primary-lightblue" />
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            }
            {/* Modal for password */}
            {
                togglePassword &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Update password</h1>
                            <p onClick={() => setTogglePassword(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <Formik>
                                <Form className='w-full flex flex-col gap-3'>
                                    <div className='w-full flex flex-col gap-2 font-poppins text-sm tracking-wide'>
                                        <label>Old Password</label>
                                        <Field type="text" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide" />
                                    </div>
                                    <div className='w-full flex flex-col gap-2 font-poppins text-sm tracking-wide'>
                                        <label>New Password</label>
                                        <Field type="text" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide" />
                                    </div>
                                    <div className='w-full flex flex-col gap-2 font-poppins text-sm tracking-wide'>
                                        <label>Confirm Password</label>
                                        <Field type="text" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide" />
                                    </div>
                                    <Field type="submit" value="Update" className="bg-primary-blue w-40 rounded-md p-2 font-poppins tracking-wide text-white mt-5 hover:bg-primary-lightblue" />
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            }
            {/* Modal for report */}
            {
                toggleReport &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Add report</h1>
                            <p onClick={() => setToggleReport(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <Formik
                                initialValues={{
                                    name: '',
                                    pdf: ''
                                }}
                                onSubmit={(values) => {
                                    let formData = new FormData();
                                    formData.append("name", values.name)
                                    formData.append("pdf", values.pdf)
                                    addReport(formData);
                                }}
                            >
                                {({ values, setFieldValue }) => (
                                    <Form>
                                        <div className='w-full grid grid-cols-2 gap-3'>
                                            <div className='w-full flex flex-col gap-2'>
                                                <label className='font-poppins text-sm'>File name</label>
                                                <Field type="text" name="name" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide" placeholder="Enter file name here" />
                                            </div>
                                            <div className='w-full flex flex-col gap-2'>
                                                <label className='font-poppins text-sm'>Report</label>
                                                <Field type="file" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide"
                                                    onChange={(e) => {
                                                        setFieldValue("pdf", e.target.files[0]);

                                                    }} value={undefined}
                                                />
                                            </div>
                                        </div>
                                        <Field type="submit" value="Add Report" className="bg-primary-blue w-40 rounded-md p-2 font-poppins tracking-wide text-white mt-5 hover:bg-primary-lightblue" />
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            }
            {/* Modal for details */}
            {
                toggleDetails &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Update user details</h1>
                            <p onClick={() => setToggleDetails(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <Formik
                                enableReinitialize
                                initialValues={employeeDetails && employeeDetails.user}
                                onSubmit={(values) => { updateEmpoyeeDetails(values) }}
                            >
                                <Form className='w-full'>
                                    <div className='w-full grid grid-cols-2 gap-3'>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label className='font-poppins text-sm'>Name</label>
                                            <Field type="text" name="name" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide" />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label className='font-poppins text-sm'>Gender</label>
                                            <Field type="text" name="gender" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide" />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label className='font-poppins text-sm'>Permanent Address</label>
                                            <Field type="text" name="permanentAddress" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide" />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label className='font-poppins text-sm'>Temporary Address</label>
                                            <Field type="text" name="temporaryAddress" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide" />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label className='font-poppins text-sm'>Date of Birth</label>
                                            <Field type="date" name="dateOfBirth" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide" />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label className='font-poppins text-sm'>Phone</label>
                                            <Field type="number" name="contact" className="border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide" />
                                        </div>
                                    </div>
                                    <Field type="submit" value="Update" className="bg-primary-blue w-40 rounded-md p-2 font-poppins tracking-wide text-white mt-5 hover:bg-primary-lightblue" />
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default EmployeeProfile