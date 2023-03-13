import { TabGroup } from '@statikly/funk'
import React, { useEffect, useState } from 'react'
import ActivitiesTimeline from './ActivitiesTimeline/ActivitiesTimeline'
import CounsellorTable from './CounsellorTable/CounsellorTable'
import Document from './Document/Document'
import EnglishTest from './EnglishTest/EnglishTest'
import Task from './Task/Task'
import { AiOutlineCalendar, AiOutlineMail } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import ProcessingStatus from './ProcessingStatus/ProcessingStatus'
import Payment from './Payment/Payment'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProfileTab = ({ storeObjectID, storeEnglishObjectID, storePaymentObjectID }) => {

    const [studentDetails, setStudentDetails] = useState();
    const { id } = useParams()
    const leadID = id;
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/leadFormData/${id}`).then((res) => {
            setStudentDetails(res.data);

        })
    }, [])
    return (
        <>
            <div className='w-full min-h-[300px] flex gap-2 pb-3'>
                <div className='w-full bg-white border-[1px]'>
                    <TabGroup numTabs={8} direction={TabGroup.direction.HORIZONTAL}>
                        {/* Tab navigation */}
                        <div className='w-full grid grid-cols-7 bg-gray-100'>
                            <TabGroup.Tab index={0} activeClassName="text-primary-blue border-b-4 border-primary-blue outline-none p-2 transition ease-in-out duration-300 font-semibold" inactiveClassName=''>
                                <p className='font-poppins text-subbody1 tracking-wide'>Activities</p>
                            </TabGroup.Tab>
                            <TabGroup.Tab index={1} activeClassName="text-primary-blue border-b-4 border-primary-blue outline-none p-2 transition ease-in-out duration-300 font-semibold">
                                <p className='font-poppins text-subbody1 tracking-wide'>Counselor</p>
                            </TabGroup.Tab>
                            <TabGroup.Tab index={2} activeClassName="text-primary-blue border-b-4 border-primary-blue outline-none p-2 transition ease-in-out duration-300 font-semibold">
                                <p className='font-poppins text-subbody1 tracking-wide'>Documents</p>
                            </TabGroup.Tab>
                            <TabGroup.Tab index={3} activeClassName="text-primary-blue border-b-4 border-primary-blue outline-none p-2 transition ease-in-out duration-300 font-semibold">
                                <p className='font-poppins text-subbody1 tracking-wide'>English Test/Classes</p>
                            </TabGroup.Tab>
                            <TabGroup.Tab index={4} activeClassName="text-primary-blue border-b-4 border-primary-blue outline-none p-2 transition ease-in-out duration-300 font-semibold">
                                <p className='font-poppins text-subbody1 tracking-wide'>Task</p>
                            </TabGroup.Tab>
                            <TabGroup.Tab index={5} activeClassName="text-primary-blue border-b-4 border-primary-blue outline-none p-2 transition ease-in-out duration-300 font-semibold">
                                <p className='font-poppins text-subbody1 tracking-wide'>Processing Status</p>
                            </TabGroup.Tab>
                            <TabGroup.Tab index={6} activeClassName="text-primary-blue border-b-4 border-primary-blue outline-none p-2 transition ease-in-out duration-300 font-semibold">
                                <p className='font-poppins text-subbody1 tracking-wide'>Payment</p>
                            </TabGroup.Tab>
                        </div>
                        {/* Tab body */}
                        <div className='w-full h-full'>
                            {/* Profile */}
                            <TabGroup.TabPanel index={0} className="w-full transition-all transform mt-5" activeClassName="opacity-100 duration-500 translate-x-0" inactiveClassName="hidden">
                                <div className='w-full pt-3 pb-3 pl-24'>
                                    <ActivitiesTimeline />
                                </div>
                            </TabGroup.TabPanel>
                            {/* Counselor */}
                            <TabGroup.TabPanel index={1} className="w-full transition-all transform mt-5" activeClassName="opacity-100 duration-500 translate-x-0" inactiveClassName="hidden">
                                <div className='w-full'>
                                    <CounsellorTable studentDetails={studentDetails} leadID={leadID} />
                                </div>
                            </TabGroup.TabPanel>
                            {/* Document */}
                            <TabGroup.TabPanel index={2} className="w-full transition-all transform mt-5" activeClassName="opacity-100 duration-500 translate-x-0" inactiveClassName="hidden">
                                <Document studentDetails={studentDetails} storeObjectID={storeObjectID} />
                            </TabGroup.TabPanel>
                            {/* English Test */}
                            <TabGroup.TabPanel index={3} className="w-full transition-all transform mt-5" activeClassName="opacity-100 duration-500 translate-x-0" inactiveClassName="hidden">
                                <EnglishTest studentDetails={studentDetails} storeEnglishObjectID={storeEnglishObjectID} />
                            </TabGroup.TabPanel>
                            {/* Task Reamaining */}
                            <TabGroup.TabPanel index={4} className="w-full h-full transition-all transform mt-5" activeClassName="opacity-100 duration-500 translate-x-0" inactiveClassName="hidden">
                                <div className='w-full'>
                                    <Task studentDetails={studentDetails} leadID={leadID} />
                                </div>
                            </TabGroup.TabPanel>
                            {/* Classes */}
                            <TabGroup.TabPanel index={5} className="w-full transition-all transform mt-5" activeClassName="opacity-100 duration-500 translate-x-0" inactiveClassName="hidden">
                                <div className='w-full'>
                                    <ProcessingStatus studentDetails={studentDetails} />
                                </div>
                            </TabGroup.TabPanel>
                            {/* Payment */}
                            <TabGroup.TabPanel index={6} className="w-full transition-all transform mt-5" activeClassName="opacity-100 duration-500 translate-x-0" inactiveClassName="hidden">
                                <div className='w-full'>
                                    <Payment studentDetails={studentDetails} storePaymentObjectID={storePaymentObjectID} />
                                </div>
                            </TabGroup.TabPanel>
                        </div>
                    </TabGroup>
                </div>
                {/* Connect Tab */}
                <div className='w-fit bg-white border-[1px]'>
                    <TabGroup numTabs={1} direction={TabGroup.direction.HORIZONTAL}>
                        <div className='bg-gray-100'>
                            <TabGroup.Tab index={0} activeClassName='outline-none p-2' inactiveClassName=''>
                                <p className='font-poppins text-subbody1 flex items-center tracking-wide'>Connect</p>
                            </TabGroup.Tab>
                        </div>
                        {/* Contact tab data*/}
                        <TabGroup.TabPanel index={0} className="w-full transition-all transform mt-5" activeClassName="opacity-100 duration-500 translate-x-0" inactiveClassName="hidden">
                            <div className='w-full h-[150px] p-2 grid grid-cols-1 grid-rows-3'>
                                <div className='w-full h-fit flex justify-center items-center'>
                                    <p className='text-2xl w-fit hover:text-primary-blue cursor-pointer'><AiOutlineCalendar /></p>
                                </div>
                                <div className='w-full h-fit flex justify-center items-center'>
                                    <p className='text-2xl w-fit text-green-500 cursor-pointer'><IoLogoWhatsapp /></p>
                                </div>
                                <div className='w-full h-fit flex justify-center items-center'>
                                    <p className='text-2xl w-fit hover:text-primary-blue cursor-pointer'><AiOutlineMail /></p>
                                </div>
                            </div>
                        </TabGroup.TabPanel>
                    </TabGroup>
                </div>
            </div >
        </>
    )
}

export default ProfileTab