import React from 'react'

const Information = ({studentDetails}) => {
    return (
        <>
            <div className='p-3'>
                <div className='w-full flex flex-col gap-3'>
                    <div className='w-fit'>
                    <p className={studentDetails && studentDetails.formData && studentDetails.formData.status == "New" ? 'w-20 text-center font-poppins text-sm p-1 border-2 border-[#96c0ff] rounded-2xl' : studentDetails && studentDetails.formData && studentDetails.formData.status == "In progress" ? 'w-32 text-center font-poppins text-sm p-1 border-2 border-[#96E3DF] rounded-2xl' : studentDetails && studentDetails.formData && studentDetails.formData.status == "Documentation" ? 'w-20 text-center font-poppins text-sm p-1 border-2 border-[#f6f797] rounded-2xl' : studentDetails && studentDetails.formData && studentDetails.formData.status == "Visa waiting" ? 'w-20 text-center font-poppins text-sm p-1 border-2 border-[#fdf3eb] rounded-2xl' : 'w-20 text-center font-poppins text-sm p-1 border-2 border-[#f9eaea] rounded-2xl'}>{studentDetails && studentDetails.formData && studentDetails.formData.status}</p>
                    </div>
                    <div className='w-fit'>
                        <p className='tracking-wide font-poppins text-sm'>Applied Country : <span>Australia</span></p>
                    </div>
                    <div className='w-fit'>
                        <p className='tracking-wide font-poppins text-sm'>Applied Course : <span>Bachelor in Information Technology</span></p>
                    </div>
                </div>
                {/* Add Task Button */}
                <button className='w-32 bg-[#6ba6ff] hover:text-[#6ba6ff] hover:bg-white border-[1px] hover:border-[#6ba6ff]  rounded-md text-white font-poppins text-sm p-2 absolute bottom-5 right-5'>Edit</button>
            </div>
        </>
    )
}

export default Information