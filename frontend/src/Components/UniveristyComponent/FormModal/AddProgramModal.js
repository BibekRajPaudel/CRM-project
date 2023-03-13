import React from 'react'
import UniversityCourseForm from '../UniveristyForm/UniversityCourseForm'

const AddProgramModal = ({ setCourseModal }) => {
    return (
        <>
            {/* Main Container */}
            <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                {/* Form container */}
                <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                    {/* Form heading */}
                    <div className='w-full flex items-center justify-between sticky'>
                        <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Add Program</h1>
                        <p onClick={() => setCourseModal(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                    </div>
                    <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                        <UniversityCourseForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProgramModal