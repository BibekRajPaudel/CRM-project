import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import data from '../../MaterialUICustomTheme/ApplicantTable'
import userIMG from '../../Assets/Images/user.png'
import { AiOutlineClose, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { RxDotsVertical } from 'react-icons/rx'
import { AuthContext } from '../../Helper/AuthContext'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const GridView = () => {

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
            {/* Main container */}
            <div className='min-w-full p-2'>
                {/* Dragabble container */}
                <div className='w-full grid grid-cols-5 gap-2'>
                    {/* New section */}
                    <div className='w-full p-2'>
                        <p className='w-full p-2 bg-[#96C0FF] text-center rounded-lg font-poppins text-sm sticky'>New</p>
                        <div id="gridViewScrollbar" className='w-full max-h-[100vh] flex flex-col gap-3 mt-6 overflow-y-auto'>
                            {
                                leadData && leadData.formData && leadData.formData.filter(s => s.status == "New" || s.status == "new").map((user, index) => (
                                    <div key={index} className='w-full rounded bg-[#96C0FF] p-2 flex flex-col gap-2 relative'>
                                        <div className='w-full flex gap-2 items-center'>
                                            <div className=''>
                                                <img className='w-10 h-10 rounded-full object-cover' src={userIMG} alt="Applicant image" />
                                            </div>
                                            <div className=''>
                                                <Link to={`/profile/${user._id}`}><p className='font-poppins text-sm'>{user.firstName} {user.lastName}</p></Link>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className='w-full'>
                                            <p className='font-poppins text-[10px] flex items-center text-primary-black'><span><AiOutlineMail /></span>&nbsp;{user.email}</p>
                                            <p className='font-poppins text-sm flex items-center text-primary-black'><span><AiOutlinePhone /></span>&nbsp;+977-{user.contactNumber}</p>
                                        </div>
                                        <div onClick={() => toogleStatus(user._id)} className='absolute h-6 w-6 flex justify-center items-center right-2 p-1 rounded-full text-xs cursor-pointer hover:bg-[#d7e4f9] transition ease-in-out duration-200'>{status === user._id ? <AiOutlineClose /> : <RxDotsVertical />}</div>
                                        {
                                            status === user._id &&
                                            <div className='w-[233px] h-[103px] bg-white border-[1px] rounded-md absolute z-50 top-0 border-gray-300 right-0 p-2 flex flex-col gap-3'>
                                                <div onClick={() => toogleStatus(user._id)} className='absolute h-6 w-6 flex justify-center items-center right-2 top-1 p-1 rounded-full text-xs cursor-pointer hover:bg-[#d7e4f9] transition ease-in-out duration-200'>{status === user._id ? <AiOutlineClose /> : <RxDotsVertical />}</div>
                                                <p className='font-poppins text-xs text-primary-black font-bold tracking-wide'>Move to -</p>
                                                <div className='grid grid-cols-2 gap-2'>
                                                    <p onClick={() => patchData(user.status = "In progress", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#96E3DF]'>In progress</p>
                                                    <p onClick={() => patchData(user.status = "Documentation", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#f6f797]'>Documentation</p>
                                                    <p onClick={() => patchData(user.status = "Visa waiting", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#f8cfac]'>Visa waiting</p>
                                                    <p onClick={() => patchData(user.status = "Dead lead", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#e7aaaa]'>Dead Lead</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Inprogress section */}
                    <div className='w-full p-2'>
                        <p className='w-full p-2 bg-[#96E3DF] text-center rounded-lg font-poppins text-sm sticky'>In progress</p>
                        <div id="gridViewScrollbar" className='w-full min-h-fit max-h-[100vh] flex flex-col gap-3 mt-6 overflow-y-auto relative'>
                            {
                                leadData && leadData.formData && leadData.formData.filter(s => s.status == "In progress" || s.status == "in progress").map((user, index) => (
                                    <div key={index} className='w-full rounded-lg bg-[#96E3DF] p-2 flex flex-col gap-2 relative'>
                                        <div className='w-full flex gap-2 items-center'>
                                            <div className=''>
                                                <img className='w-10 h-10 rounded-full object-cover' src={userIMG} alt="Applicant image" />
                                            </div>
                                            <div className=''>
                                                <Link to={`/profile/${user._id}`}> <p className='font-poppins text-prima text-sm'>{user.firstName} {user.lastName}</p></Link>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className='w-full'>
                                            <p className='font-poppins text-[10px] flex items-center text-primary-black'><span><AiOutlineMail /></span>&nbsp;{user.email}</p>
                                            <p className='font-poppins text-sm flex items-center text-primary-black'><span><AiOutlinePhone /></span>&nbsp;+977-{user.contactNumber}</p>
                                        </div>
                                        <div onClick={() => toogleStatus(user._id)} className='absolute h-6 w-6 flex justify-center items-center right-2 p-1 rounded-full text-xs cursor-pointer hover:bg-[#cae6e5] transition ease-in-out duration-200'><RxDotsVertical /></div>
                                        {
                                            status === user._id &&
                                            <div className='w-[233px] h-[103px] bg-white border-[1px] rounded-md absolute z-50 top-0 border-gray-300 right-0 p-2 flex flex-col gap-3'>
                                                <div onClick={() => toogleStatus(user._id)} className='absolute h-6 w-6 flex justify-center items-center right-2 top-1 p-1 rounded-full text-xs cursor-pointer hover:bg-[#d7e4f9] transition ease-in-out duration-200'>{status === user._id ? <AiOutlineClose /> : <RxDotsVertical />}</div>
                                                <p className='font-poppins text-xs text-primary-black font-bold tracking-wide'>Move to -</p>
                                                <div className='grid grid-cols-2 gap-2'>
                                                    <p onClick={() => patchData(user.status = "New", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#96C0FF]'>New</p>
                                                    <p onClick={() => patchData(user.status = "Documentation", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#f6f797]'>Documentation</p>
                                                    <p onClick={() => patchData(user.status = "Visa Waiting", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#f8cfac]'>Visa waiting</p>
                                                    <p onClick={() => patchData(user.status = "Dead lead", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#e7aaaa]'>Dead Lead</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Documentation section */}
                    <div className='w-full p-2'>
                        <p className='w-full p-2 bg-[#f6f797] text-center rounded-lg font-poppins text-sm sticky'>Documentation</p>
                        <div id="gridViewScrollbar" className='w-full  max-h-[100vh] flex flex-col gap-3 mt-6 overflow-y-auto'>
                            {
                                leadData && leadData.formData && leadData.formData.filter(s => s.status == "Documentation" || s.status == "documentation").map((user, index) => (
                                    <div key={index} className='w-full rounded bg-[#f9faca] p-2 flex flex-col gap-2 relative'>
                                        <div className='w-full flex gap-2 items-center'>
                                            <div className=''>
                                                <img className='w-10 h-10 rounded-full object-cover' src={userIMG} alt="Applicant image" />
                                            </div>
                                            <div className=''>
                                                <Link to={`/profile/${user._id}`}><p className='font-poppins text-prima text-sm'>{user.firstName} {user.lastName}</p></Link>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className='w-full'>
                                            <p className='font-poppins text-[10px] flex items-center text-primary-black'><span><AiOutlineMail /></span>&nbsp;{user.email}</p>
                                            <p className='font-poppins text-sm flex items-center text-primary-black'><span><AiOutlinePhone /></span>&nbsp;+977-{user.contactNumber}</p>
                                        </div>
                                        <div onClick={() => toogleStatus(user._id)} className='absolute h-6 w-6 flex justify-center items-center right-2 p-1 rounded-full text-xs cursor-pointer hover:bg-[#cae6e5] transition ease-in-out duration-200'><RxDotsVertical /></div>
                                        {
                                            status === user._id &&
                                            <div className='w-[233px] h-[103px] bg-white border-[1px] rounded-md absolute z-50 top-0 border-gray-300 right-0 p-2 flex flex-col gap-3'>
                                                <div onClick={() => toogleStatus(user._id)} className='absolute h-6 w-6 flex justify-center items-center right-2 top-1 p-1 rounded-full text-xs cursor-pointer hover:bg-[#d7e4f9] transition ease-in-out duration-200'>{status === user._id ? <AiOutlineClose /> : <RxDotsVertical />}</div>
                                                <p className='font-poppins text-xs text-primary-black font-bold tracking-wide'>Move to -</p>
                                                <div className='grid grid-cols-2 gap-2'>
                                                    <p onClick={() => patchData(user.status = "New", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#96C0FF]'>New</p>
                                                    <p onClick={() => patchData(user.status = "In progress", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#96E3DF]'>In progress</p>
                                                    <p onClick={() => patchData(user.status = "Visa waiting", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#f8cfac]'>Visa waiting</p>
                                                    <p onClick={() => patchData(user.status = "Dead lead", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#e7aaaa]'>Dead Lead</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Visa waiting section */}
                    <div className='w-full p-2'>
                        <p className='w-full p-2 bg-[#f8cfac] text-center rounded-lg font-poppins text-sm sticky'>Visa Waiting</p>
                        <div id="gridViewScrollbar" className='w-full max-h-[100vh]  flex flex-col gap-3 mt-6 overflow-y-auto'>
                            {
                                leadData && leadData.formData && leadData.formData.filter(s => s.status == "Visa waiting" || s.status == "Visa Waiting" || s.status == "visa Waiting").map((user, index) => (
                                    < div key={index} className='w-full rounded bg-[#f8cfac] p-2 flex flex-col gap-2 relative' >
                                        <div className='w-full flex gap-2 items-center'>
                                            <div className=''>
                                                <img className='w-10 h-10 rounded-full object-cover' src={userIMG} alt="Applicant image" />
                                            </div>
                                            <div className=''>
                                                <Link to={`/profile/${user._id}`}><p className='font-poppins text-prima text-sm'>{user.firstName} {user.lastName}</p></Link>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        < div className='w-full' >
                                            <p className='font-poppins text-[10px] flex items-center text-primary-black'><span><AiOutlineMail /></span>&nbsp;{user.email}</p>
                                            <p className='font-poppins text-sm flex items-center text-primary-black'><span><AiOutlinePhone /></span>&nbsp;+977-{user.contactNumber}</p>
                                        </div>
                                        <div onClick={() => toogleStatus(user._id)} className='absolute h-6 w-6 flex justify-center items-center right-2 p-1 rounded-full text-xs cursor-pointer hover:bg-[#f9e6d6] transition ease-in-out duration-200'><RxDotsVertical /></div>
                                        {
                                            status === user._id &&
                                            <div className='w-[233px] h-[103px] bg-white border-[1px] rounded-md absolute z-50 top-0 border-gray-300 right-0 p-2 flex flex-col gap-3'>
                                                <div onClick={() => toogleStatus(user._id)} className='absolute h-6 w-6 flex justify-center items-center right-2 top-1 p-1 rounded-full text-xs cursor-pointer hover:bg-[#d7e4f9] transition ease-in-out duration-200'>{status === user._id ? <AiOutlineClose /> : <RxDotsVertical />}</div>
                                                <p className='font-poppins text-xs text-primary-black font-bold tracking-wide'>Move to -</p>
                                                <div className='grid grid-cols-2 gap-2'>
                                                    <p onClick={() => patchData(user.status = "New", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#96C0FF]'>New</p>
                                                    <p onClick={() => patchData(user.status = "In progress", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#96E3DF]'>In progress</p>
                                                    <p onClick={() => patchData(user.status = "Documentation", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#f6f797]'>Documentation</p>
                                                    <p onClick={() => patchData(user.status = "Dead lead", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#e7aaaa]'>Dead Lead</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Dead lead section */}
                    <div className='w-full p-2'>
                        <p className='w-full p-2 bg-[#e7aaaa] text-center rounded-lg font-poppins text-sm sticky'>Dead Lead</p>
                        <div id="gridViewScrollbar" className='w-full  max-h-[100vh] flex flex-col gap-3 mt-6 overflow-y-auto'>
                            {
                                leadData && leadData.formData && leadData.formData.filter(s => s.status == "Dead lead" || s.status == "Dead Lead" || s.status == "dead lead").map((user, index) => (
                                    < div key={index} className='w-full rounded bg-[#e7aaaa] p-2 flex flex-col gap-2 relative' >
                                        <div className='w-full flex gap-2 items-center'>
                                            <div className=''>
                                                <img className='w-10 h-10 rounded-full object-cover' src={userIMG} alt="Applicant image" />
                                            </div>
                                            <div className=''>
                                                <Link to={`/profile/${user._id}`}><p className='font-poppins text-prima text-sm'>{user.firstName} {user.lastName}</p></Link>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        < div className='w-full' >
                                            <p className='font-poppins text-[10px] flex items-center text-primary-black'><span><AiOutlineMail /></span>&nbsp;{user.email}</p>
                                            <p className='font-poppins text-sm flex items-center text-primary-black'><span><AiOutlinePhone /></span>&nbsp;+977-{user.contactNumber}</p>
                                        </div>
                                        <div onClick={() => toogleStatus(user._id)} className='absolute h-6 w-6 flex justify-center items-center right-2 p-1 rounded-full text-xs cursor-pointer hover:bg-[#e5d3d3] transition ease-in-out duration-200'><RxDotsVertical /></div>
                                        {
                                            status === user._id &&
                                            <div className='w-[233px] h-[103px] bg-white border-[1px] rounded-md absolute z-50 top-0 border-gray-300 right-0 p-2 flex flex-col gap-3'>
                                                <div onClick={() => toogleStatus(user._id)} className='absolute h-6 w-6 flex justify-center items-center right-2 top-1 p-1 rounded-full text-xs cursor-pointer hover:bg-[#d7e4f9] transition ease-in-out duration-200'>{status === user._id ? <AiOutlineClose /> : <RxDotsVertical />}</div>
                                                <p className='font-poppins text-xs text-primary-black font-bold tracking-wide'>Move to -</p>
                                                <div className='grid grid-cols-2 gap-2'>
                                                    <p onClick={() => patchData(user.status = "New", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#96C0FF]'>New</p>
                                                    <p onClick={() => patchData(user.status = "In progress", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#96E3DF]'>In progress</p>
                                                    <p onClick={() => patchData(user.status = "Documentation", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#f6f797]'>Documentation</p>
                                                    <p onClick={() => patchData(user.status = "Visa waiting", user._id)} className='w-full p-1 rounded-sm font-poppins text-xs text-center cursor-pointer bg-[#f8cfac]'>Visa waiting</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div >
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

export default GridView