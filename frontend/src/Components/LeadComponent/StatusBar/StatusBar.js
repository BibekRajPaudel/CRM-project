import React from 'react'
import { BsCheck2 } from 'react-icons/bs'

const StatusBar = ({ studentDetails }) => {
    return (
        <>
            <div>
                <ol class="flex items-center w-full">
                    {
                        studentDetails && studentDetails.formData && studentDetails.formData.status == "New" ?
                            <>
                                <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block after:border-[#DD8787] relative">
                                    <span class="flex items-center justify-center w-10 h-10 bg-[#6BD7D1] text-white text-lg rounded-full lg:h-12 lg:w-12 shrink-0">
                                        <BsCheck2 />
                                    </span>
                                    <p className='absolute -bottom-6 left-2 text-sm tracking-wide font-poppins'>New</p>
                                </li>
                                <li class="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-[#DD8787] ">
                                    <span class="flex items-center justify-center w-10 h-10 bg-[#DD8787] rounded-full lg:h-12 lg:w-12 shrink-0">

                                    </span>
                                    <p className='absolute -bottom-6 -left-5 text-sm tracking-wide font-poppins'>In progress</p>

                                </li>
                                <li class="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-[#DD8787]">
                                    <span class="flex items-center justify-center w-10 h-10 bg-[#DD8787] rounded-full lg:h-12 lg:w-12 shrink-0">
                                    </span>
                                    <p className='absolute -bottom-6 -left-8 text-sm tracking-wide font-poppins'>Documentation</p>
                                </li>
                                <li class="flex w-fit items-center relative after:border-gray-700">
                                    <span class="flex items-center justify-center w-10 h-10 bg-[#DD8787] rounded-full lg:h-12 lg:w-12 shrink-0">
                                    </span>
                                    <p className='absolute w-24 -bottom-6 -left-5 text-sm tracking-wide font-poppins'>Visa Waiting</p>
                                </li>
                            </>

                            :
                            studentDetails && studentDetails.formData && studentDetails.formData.status == "In progress" ?
                                <>
                                    <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block after:border-[#6BD7D1] relative">
                                        <span class="flex items-center justify-center w-10 h-10 bg-[#6BD7D1] text-white text-lg rounded-full lg:h-12 lg:w-12 shrink-0">
                                            <BsCheck2 />
                                        </span>
                                        <p className='absolute -bottom-6 left-2 text-sm tracking-wide font-poppins'>New</p>
                                    </li>
                                    <li class="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-[#DD8787] ">
                                        <span class="flex items-center justify-center w-10 h-10 bg-[#6BD7D1] text-white text-lg rounded-full lg:h-12 lg:w-12 shrink-0">
                                            <BsCheck2 />
                                        </span>
                                        <p className='absolute -bottom-6 -left-5 text-sm tracking-wide font-poppins'>In progress</p>

                                    </li>
                                    <li class="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-[#DD8787]">
                                        <span class="flex items-center justify-center w-10 h-10 bg-[#DD8787] rounded-full lg:h-12 lg:w-12 shrink-0">
                                        </span>
                                        <p className='absolute -bottom-6 -left-8 text-sm tracking-wide font-poppins'>Documentation</p>
                                    </li>
                                    <li class="flex w-fit items-center relative after:border-[#DD8787]">
                                        <span class="flex items-center justify-center w-10 h-10 bg-[#DD8787] rounded-full lg:h-12 lg:w-12 shrink-0">
                                        </span>
                                        <p className='absolute w-24 -bottom-6 -left-5 text-sm tracking-wide font-poppins'>Visa Waiting</p>
                                    </li>
                                </>
                                :
                                studentDetails && studentDetails.formData && studentDetails.formData.status == "Documentation" ?
                                    <>
                                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block after:border-[#6BD7D1] relative">
                                            <span class="flex items-center justify-center w-10 h-10 bg-[#6BD7D1] text-white text-lg rounded-full lg:h-12 lg:w-12 shrink-0">
                                                <BsCheck2 />
                                            </span>
                                            <p className='absolute -bottom-6 left-2 text-sm tracking-wide font-poppins'>New</p>
                                        </li>
                                        <li class="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-[#6BD7D1] ">
                                            <span class="flex items-center justify-center w-10 h-10 bg-[#6BD7D1] text-white text-lg rounded-full lg:h-12 lg:w-12 shrink-0">
                                                <BsCheck2 />
                                            </span>
                                            <p className='absolute -bottom-6 -left-5 text-sm tracking-wide font-poppins'>In progress</p>

                                        </li>
                                        <li class="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-[#DD8787]">
                                            <span class="flex items-center justify-center w-10 h-10 bg-[#6BD7D1] text-white text-lg rounded-full lg:h-12 lg:w-12 shrink-0">
                                                <BsCheck2 />
                                            </span>
                                            <p className='absolute -bottom-6 -left-8 text-sm tracking-wide font-poppins'>Documentation</p>
                                        </li>
                                        <li class="flex w-fit items-center relative after:border-[#DD8787]">
                                            <span class="flex items-center justify-center w-10 h-10 bg-[#DD8787] rounded-full lg:h-12 lg:w-12 shrink-0">
                                            </span>
                                            <p className='absolute w-24 -bottom-6 -left-5 text-sm tracking-wide font-poppins'>Visa Waiting</p>
                                        </li>
                                    </>
                                    :
                                    studentDetails && studentDetails.formData && studentDetails.formData.status == "Visa waiting" ?
                                        <>
                                            <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block after:border-[#6BD7D1] relative">
                                                <span class="flex items-center justify-center w-10 h-10 bg-[#6BD7D1] text-white text-lg rounded-full lg:h-12 lg:w-12 shrink-0">
                                                    <BsCheck2 />
                                                </span>
                                                <p className='absolute -bottom-6 left-2 text-sm tracking-wide font-poppins'>New</p>
                                            </li>
                                            <li class="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-[#6BD7D1] ">
                                                <span class="flex items-center justify-center w-10 h-10 bg-[#6BD7D1] text-white text-lg rounded-full lg:h-12 lg:w-12 shrink-0">
                                                    <BsCheck2 />
                                                </span>
                                                <p className='absolute -bottom-6 -left-5 text-sm tracking-wide font-poppins'>In progress</p>

                                            </li>
                                            <li class="flex w-full items-center relative after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-[#6BD7D1]">
                                                <span class="flex items-center justify-center w-10 h-10 bg-[#6BD7D1] text-white text-lg rounded-full lg:h-12 lg:w-12 shrink-0">
                                                    <BsCheck2 />
                                                </span>
                                                <p className='absolute -bottom-6 -left-8 text-sm tracking-wide font-poppins'>Documentation</p>
                                            </li>
                                            <li class="flex w-fit items-center relative">
                                                <span class="flex items-center justify-center w-10 h-10 bg-[#6BD7D1] text-white text-lg rounded-full lg:h-12 lg:w-12 shrink-0">
                                                    <BsCheck2 />
                                                </span>
                                                <p className='absolute w-24 -bottom-6 -left-5 text-sm tracking-wide font-poppins'>Visa Waiting</p>
                                            </li>
                                        </>
                                        :

                                        <>
                                            <div className='w-full p-2 flex justify-center items-center'>
                                                <p className='w-fit font-poppins text-sm text-red-500'>Failed to retrive data</p>
                                            </div>
                                        </>
                    }

                </ol>
            </div>
        </>
    )
}

export default StatusBar