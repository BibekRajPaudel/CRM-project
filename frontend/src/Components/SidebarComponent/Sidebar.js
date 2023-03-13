import React, { useState } from 'react'
import { AiOutlineUser, AiOutlineUserSwitch, AiOutlineBook, AiOutlineCalendar } from 'react-icons/ai'
import { BiChevronRight, BiUserCircle, BiGlobe } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { MdOutlineDashboard } from 'react-icons/md'
import { FiUserCheck } from 'react-icons/fi'
import { SlGraduation, SlBookOpen } from 'react-icons/sl'



import { NavLink, Link } from 'react-router-dom'


const Sidebar = () => {

  const [managerDropdown, setManagerDropdown] = useState(false)
  const [counsellorDropdown, setCounsellorDropdown] = useState(false)
  const [universityDropdown, setUniversityDropdown] = useState(false)
  const [classDropdown, setClassDropdown] = useState(false)

  return (
    <>
      {/* Main container */}
      <div id="sidebarDropdown" className='bg-white min-w-[200px] min-h-[90vh] max-h-[90vh] drop-shadow-sm border-r-[1px] flex flex-col gap-6 overflow-y-scroll'>
        {/* Navigation Container */}
        <div className='w-full flex flex-col gap-3'>
          <div className='w-full flex flex-col items-start'>
            <NavLink to='/dashboard' className={({ isActive }) => isActive ? "w-full bg-[#E6F0FF] text-primary-blue  border-l-2 border-blue-500" : "w-full cursor-pointer hover:text-primary-lightblue transition-all duration-100 ease-in-out hover:bg-slate-100"}><p className='w-full text-subbody2 tracking-wide flex items-center gap-2 pl-7 pt-5 pb-5 font-poppins'><span className='text-lg'><MdOutlineDashboard /></span> Dashboard</p></NavLink>
            <NavLink to='/applicants' className={({ isActive }) => isActive ? "w-full bg-[#E6F0FF] text-primary-blue border-l-2 border-blue-500" : "w-full cursor-pointer hover:text-primary-lightblue transition-all duration-100 ease-in-out hover:bg-slate-100"}><p className='w-full text-subbody2 tracking-wide flex items-center gap-2 pl-7 pt-5 pb-5  font-poppins'><span className='text-lg'><BiUserCircle /></span> Applicants</p></NavLink>
            <NavLink to='/country' className={({ isActive }) => isActive ? "w-full bg-[#E6F0FF] text-primary-blue border-l-2 border-blue-500" : "w-full cursor-pointer hover:text-primary-lightblue transition-all duration-100 ease-in-out hover:bg-slate-100"}><p className='w-full text-subbody2 tracking-wide flex items-center gap-2 pl-7 pt-5 pb-5  font-poppins'><span className='text-lg'><BiGlobe /></span> Country</p></NavLink>
            <NavLink to='/manager' className={({ isActive }) => isActive ? "w-full bg-[#E6F0FF] text-primary-blue border-l-2 border-blue-500" : "w-full cursor-pointer hover:text-primary-lightblue transition-all duration-100 ease-in-out hover:bg-slate-100"}><p className='w-full text-subbody2 tracking-wide flex items-center gap-2 pl-7 pt-5 pb-5  font-poppins'><span className='text-lg'><AiOutlineUser /></span> Manager</p></NavLink>
            <NavLink to='/counsellor' className={({ isActive }) => isActive ? "w-full bg-[#E6F0FF] text-primary-blue border-l-2 border-blue-500" : "w-full cursor-pointer hover:text-primary-lightblue transition-all duration-100 ease-in-out hover:bg-slate-100"}><p className='w-full text-subbody2 tracking-wide flex items-center gap-2 pl-7 pt-5 pb-5  font-poppins'><span className='text-lg'><AiOutlineUserSwitch /></span> Counsellor</p></NavLink>
            <NavLink to='/university' className={({ isActive }) => isActive ? "w-full bg-[#E6F0FF] text-primary-blue border-l-2 border-blue-500" : "w-full cursor-pointer hover:text-primary-lightblue transition-all duration-100 ease-in-out hover:bg-slate-100"}><p className={universityDropdown ? 'relative w-full text-subbody2 text-primary-blue  bg-[#E6F0FF] border-l-2 border-blue-500 tracking-wide flex items-center gap-2 hover:bg-slate-100 pl-7 pt-5 pb-5 font-poppins' : 'relative w-full text-subbody2 tracking-wide flex items-center gap-2 hover:text-primary-lightblue hover:bg-slate-100 pl-7 pt-5 pb-5 font-poppins'}><span className='text-lg'><SlGraduation /></span> University</p></NavLink>
            {/* <NavLink to='/course' className={({ isActive }) => isActive ? "w-full bg-[#E6F0FF] text-primary-blue border-l-2 border-blue-500" : "w-full cursor-pointer hover:text-primary-lightblue transition-all duration-100 ease-in-out hover:bg-slate-100"}><p className='w-full text-subbody2 tracking-wide flex items-center gap-2 pl-7 pt-5 pb-5  font-poppins'><span className='text-base'><SlBookOpen /></span> Courses</p>
            </NavLink> */}
            <NavLink to='/' className={({ isActive }) => isActive ? "w-full bg-[#E6F0FF] text-primary-blue border-l-2 border-blue-500" : "w-full cursor-pointer hover:text-primary-lightblue transition-all duration-100 ease-in-out hover:bg-slate-100"}><p className='w-full text-subbody2 tracking-wide flex items-center gap-2 pl-7 pt-5 pb-5  font-poppins'><span className='text-lg'><AiOutlineCalendar /></span> Attendence</p></NavLink>
            <NavLink to='/succeeded' className={({ isActive }) => isActive ? "w-full bg-[#E6F0FF] text-primary-blue border-l-2 border-blue-500" : "w-full cursor-pointer hover:text-primary-lightblue transition-all duration-100 ease-in-out hover:bg-slate-100"}><p className='w-full text-subbody2 tracking-wide flex items-center gap-2 pl-7 pt-5 pb-5  font-poppins'><span className='text-lg'><FiUserCheck /></span> Successed</p></NavLink>
            <NavLink to='/classPages' className={({ isActive }) => isActive ? "w-full bg-[#E6F0FF] text-primary-blue border-l-2 border-blue-500" : "w-full cursor-pointer hover:text-primary-lightblue transition-all duration-100 ease-in-out hover:bg-slate-100"}><p className='w-full text-subbody2 tracking-wide flex items-center gap-2 pl-7 pt-5 pb-5  font-poppins'><span className='text-lg'><AiOutlineBook /></span> Class</p></NavLink>
            <NavLink to='/' className={({ isActive }) => isActive ? "w-full bg-[#E6F0FF] text-primary-blue border-l-2 border-blue-500" : "w-full cursor-pointer hover:text-primary-lightblue transition-all duration-100 ease-in-out hover:bg-slate-100"}><p className='w-full text-subbody2 tracking-wide flex items-center gap-2 pl-7 pt-5 pb-5  font-poppins'><span className='text-lg'><BsTrash /></span> Bin</p></NavLink>
          </div>

        </div>


      </div>
    </>
  )
}

export default Sidebar