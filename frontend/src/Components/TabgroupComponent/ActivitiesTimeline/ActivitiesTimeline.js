import React from 'react'
import '../../../CSS/ActivitiesTimeline.css'
const ActivitiesTimeline = () => {
    return (
        <>
            <div className='w-full'>
                <div className='w-full flex gap-5'>
                    {/* Timeline */}
                    <div className='activities_timeline w-[20px] relative'>
                    </div>
                    <div className='activities_container flex flex-col gap-5'>
                        <div className='activities relative flex justify-center items-center'>
                            <p className='absolute -left-[118px] font-poppins text-xs text-gray-400'>Dec 20, 2019</p>
                            <p className='font-poppins text-sm '>Meeting with him.</p>
                        </div>
                        <div className='activities relative flex justify-center items-center'>
                            <p className='absolute -left-[118px] font-poppins text-xs text-gray-400'>Dec 20, 2019</p>
                            <p className='font-poppins text-sm '>Meeting with him.</p>
                        </div>
                        <div className='activities relative flex justify-center items-center'>
                            <p className='absolute -left-[118px] font-poppins text-xs text-gray-400'>Dec 20, 2019</p>
                            <p className='font-poppins text-sm '>Meeting with him.</p>
                        </div>
                        <div className='activities relative flex justify-center items-center'>
                            <p className='absolute -left-[118px] font-poppins text-xs text-gray-400'>Dec 20, 2019</p>
                            <p className='font-poppins text-sm '>Meeting with him.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivitiesTimeline