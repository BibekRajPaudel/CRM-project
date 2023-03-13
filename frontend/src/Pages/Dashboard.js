import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/SidebarComponent/Sidebar'
import Topbar from '../Components/TopbarComponent/Topbar'
import { FaUserGraduate } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { ImAirplane } from 'react-icons/im'
import { TbChecklist } from 'react-icons/tb'
import { BsCalendarDay } from 'react-icons/bs'
import '../CSS/University.css'
import ApplicantChart from '../Components/DashboardComponent/Charts/ApplicantChart'
import UniversityWiseChart from '../Components/DashboardComponent/Charts/UniversityWiseChart'
import CourseWiseChart from '../Components/DashboardComponent/Charts/CourseWiseChart'
import VisaSuccessCountry from '../Components/DashboardComponent/Charts/VisaSuccessCountry'
import user from '../Assets/Images/user.png'
import NoticeTable from '../Components/DashboardComponent/NoticeTable'
import NewlyAdded from '../Components/DashboardComponent/NewlyAdded'
import UpcommingTest from '../Components/DashboardComponent/UpcommingTest'
import "../CSS/University.css";
import axios from 'axios'

const Dashboard = () => {

    const [employeeDetails, setEmployeeDetails] = useState()
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/getDetails', { headers: headers }).then((res) => {
            setEmployeeDetails(res.data)
        })
    }, [])

    return (
        <>
            <Topbar />
            <div className='flex gap-3'>
                <Sidebar />
                {/* Main container */}
                <div id="maincontainer" className='w-full pr-5 pt-5 pb-5 h-[90vh] overflow-y-auto'>
                    {/* Top Section */}
                    <div className='w-full h-12 p-2 flex items-center justify-between'>
                        <div className='w-fit'>
                            <p className='font-poppins text-lg font-bold tracking-wide'><span className='text-secondary-orange'>Welcome,</span> {employeeDetails && employeeDetails.user && employeeDetails.user.name} to CRM</p>
                        </div>
                        {/* Add button */}
                        <div className='flex items-center'>
                            <p className='bg-primary-lightblue w-32 text-center hover:bg-white hover:border-[1px] hover:border-primary-lightblue hover:text-primary-lightblue cursor-pointer p-2 font-poppins text-sm rounded text-white'>Add Student</p>
                        </div>
                    </div>
                    {/* Second Section */}
                    <div className='w-full p-2 grid grid-cols-5 gap-5 mt-5'>
                        {/* Total student */}
                        <div className='w-full rounded-sm p-3 flex items-center gap-5 bg-[#1298EA] shadow-sm border-[1px] relative'>
                            <p className='text-5xl text-white opacity-10 absolute right-7'><FaUserGraduate /></p>
                            <div className='flex flex-col items-start text-white'>
                                <p className='font-poppins text-2xl font-bold  tracking-wide'>175</p>
                                <p className='font-poppins text-sm tracking-wide'>Total Students</p>
                            </div>
                        </div>
                        {/* Total student */}
                        <div className='w-full rounded-sm p-3 flex items-center gap-5 bg-[#6C52F3] shadow-sm border-[1px] relative'>
                            <p className='text-5xl text-white opacity-10 absolute right-5'><GiNotebook /></p>
                            <div className='flex flex-col items-start text-white'>
                                <p className='font-poppins text-2xl font-bold  tracking-wide'>65</p>
                                <p className='font-poppins text-sm tracking-wide'>Total Class Enrollment</p>
                            </div>
                        </div>
                        {/* Total student */}
                        <div className='w-full rounded-sm p-3 flex items-center gap-5 bg-[#03999F] shadow-sm border-[1px] relative'>
                            <p className='text-5xl text-white opacity-10 absolute right-5'><ImAirplane /></p>
                            <div className='flex flex-col items-start text-white'>
                                <p className='font-poppins text-2xl font-bold  tracking-wide'>43</p>
                                <p className='font-poppins text-sm tracking-wide'>Total In Progress</p>
                            </div>
                        </div>
                        {/* Total student */}
                        <div className='w-full rounded-sm p-3 flex items-center gap-5 bg-[#2A3948] shadow-sm border-[1px] relative'>
                            <p className='text-5xl text-white opacity-10 absolute right-5 rotate-6'><TbChecklist /></p>
                            <div className='flex flex-col items-start text-white'>
                                <p className='font-poppins text-2xl font-bold  tracking-wide'>11</p>
                                <p className='font-poppins text-sm tracking-wide'>Total Task Assigned</p>
                            </div>
                        </div>
                        {/* Total student */}
                        <div className='w-full rounded-sm p-3 flex items-center gap-5 bg-[#F5B800] shadow-sm border-[1px] relative'>
                            <p className='text-5xl text-white opacity-10 absolute right-5 rotate-6'><BsCalendarDay /></p>
                            <div className='flex flex-col items-start text-white'>
                                <p className='font-poppins text-2xl font-bold  tracking-wide'>5</p>
                                <p className='font-poppins text-sm tracking-wide'>Total Appointment</p>
                            </div>
                        </div>
                    </div>
                    {/* Third section / applicant chart */}
                    <div className='w-full p-2 mt-5'>
                        <div className='w-full'>
                            <ApplicantChart />
                        </div>
                    </div>
                    {/* Fourth section / university chart / Course chart */}
                    <div className='w-full grid grid-cols-2 gap-5 p-2 mt-5'>
                        <div className='w-full flex flex-col gap-3'>
                            <p className='font-poppins text-sm tracking-wide font-extrabold'>University wise chart</p>
                            <UniversityWiseChart />
                        </div>
                        <div className='w-full flex flex-col gap-3'>
                            <p className='font-poppins text-sm tracking-wide font-extrabold'>Course wise chart</p>
                            <CourseWiseChart />
                        </div>
                    </div>
                    {/* Fifth Section  / liner char /Recently viewed*/}
                    <div className='w-full flex gap-5 items-center p-2 mt-5'>
                        {/* Line Chart */}
                        <div className='w-full'>
                            <p className='font-poppins text-sm tracking-wide font-extrabold'>Visa success per country</p>
                            <VisaSuccessCountry />
                        </div>
                        {/* Recently viewed */}
                        <div className='w-full min-h-fit  flex flex-col gap-5'>
                            <p className='font-poppins text-sm tracking-wide font-extrabold'>Recently Viewed</p>
                            {/* User */}
                            <div className='w-full flex flex-col gap-5 shadow rounded-md p-5'>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='w-fit  flex items-center gap-3'>
                                        <div className='w-9 h-19'>
                                            <img className='w-full h-full object-cover rounded' src={user} alt="User image" />
                                        </div>
                                        <p className='font-poppins text-sm'>Suresh Dhamal</p>
                                    </div>
                                    <p className='font-poppins text-sm tracking-wide text-primary-blue cursor-pointer'>More details</p>
                                </div>
                                {/* User */}
                                <div className='w-full flex items-center justify-between'>
                                    <div className='w-fit  flex items-center gap-3'>
                                        <div className='w-9 h-19'>
                                            <img className='w-full h-full object-cover rounded' src={user} alt="User image" />
                                        </div>
                                        <p className='font-poppins text-sm'>Anjan Basnet</p>
                                    </div>
                                    <p className='font-poppins text-sm tracking-wide text-primary-blue cursor-pointer'>More details</p>
                                </div>
                                {/* User */}
                                <div className='w-full flex items-center justify-between'>
                                    <div className='w-fit  flex items-center gap-3'>
                                        <div className='w-9 h-19'>
                                            <img className='w-full h-full object-cover rounded' src={user} alt="User image" />
                                        </div>
                                        <p className='font-poppins text-sm'>Pawan Dahal</p>
                                    </div>
                                    <p className='font-poppins text-sm tracking-wide text-primary-blue cursor-pointer'>More details</p>
                                </div>
                                {/* User */}
                                <div className='w-full flex items-center justify-between'>
                                    <div className='w-fit  flex items-center gap-3'>
                                        <div className='w-9 h-19'>
                                            <img className='w-full h-full object-cover rounded' src={user} alt="User image" />
                                        </div>
                                        <p className='font-poppins text-sm'>Ravi Gurung</p>
                                    </div>
                                    <p className='font-poppins text-sm tracking-wide text-primary-blue cursor-pointer'>More details</p>
                                </div>
                                {/* User */}
                                <div className='w-full flex items-center justify-between'>
                                    <div className='w-fit  flex items-center gap-3'>
                                        <div className='w-9 h-19'>
                                            <img className='w-full h-full object-cover rounded' src={user} alt="User image" />
                                        </div>
                                        <p className='font-poppins text-sm'>Bibek Raj Poudel</p>
                                    </div>
                                    <p className='font-poppins text-sm tracking-wide text-primary-blue cursor-pointer'>More details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sixth section / Important notice */}
                    <div className='w-full flex flex-col gap-5 items-center p-2 mt-5'>
                        <p className='w-full font-poppins text-sm font-bold tracking-wide'>Important Notice</p>
                        <div className='w-full'>
                            <NoticeTable />
                        </div>
                    </div>
                    {/* Seventh section / newly added / upcomming test*/}
                    <div className='w-full grid grid-cols-2 gap-5 p-2 mt-5'>
                        {/* Newly added */}
                        <div className='w-full flex flex-col gap-2'>
                            <p className='font-poppins text-sm tracking-wide font-extrabold'>Newly Added</p>
                            <NewlyAdded />
                        </div>
                        {/* Upcomming test */}
                        <div className='w-full flex flex-col gap-2'>
                            <p className='font-poppins text-sm tracking-wide font-extrabold'>Upcomming Test</p>
                            <UpcommingTest />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard