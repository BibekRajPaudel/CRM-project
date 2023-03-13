import React, { useState } from 'react'
import Information from './InformationSection/Information';

const ProcessingStatus = ({ studentDetails }) => {
    const [information, setInformation] = useState(true);
    const [university, setUniversity] = useState(false);

    // Toggle tasks navbar
    const toggleInformation = () => {
        setInformation(true);
        setUniversity(false);
    }
    const toggleUniversity = () => {
        setInformation(false);
        setUniversity(true);
    }

    return (
        <>
            <div className='w-full relative min-h-[250px] p-3'>
                {/* Task completed */}
                <div className='w-full flex'>
                    <div className='w-fit p-3 flex flex-col gap-4 border-r-[1px] border-gray-200'>
                        <div onClick={() => toggleInformation()} className='w-fit h-fit'>
                            <p className={information ? 'w-fit font-poppins text-sm text-primary-blue tracking-wide cursor-pointer' : 'w-fit font-poppins text-sm tracking-wide cursor-pointer hover:text-primary-blue'}>Information</p>
                        </div>
                        <div onClick={() => toggleUniversity()} className='w-fit'>
                            <p className={university ? 'w-fit font-poppins text-sm text-primary-blue tracking-wide cursor-pointer' : 'w-fit font-poppins text-sm tracking-wide cursor-pointer hover:text-primary-blue'}>University</p>
                        </div>
                    </div>
                    {/* Remaining and Completed Task */}
                    {
                        information ?
                            <Information studentDetails={studentDetails} />
                            : null
                    }
                    {
                        university ?
                            <div className='p-3'>

                            </div>
                            : null
                    }

                </div>

            </div>
        </>
    )
}

export default ProcessingStatus