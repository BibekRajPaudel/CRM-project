import { Tooltip } from '@mui/material';
import React, { useContext, useState } from 'react'
import { AiFillCheckSquare } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { AuthContext } from '../../../Helper/AuthContext';
import { IoMdAddCircle } from 'react-icons/io'
import RemainingTask from './RemainingTaskComponent/RemainingTask';
import CompletedTask from './CompletedTaskComponent/CompletedTask';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Task = ({ studentDetails, leadID }) => {

    const [remainingTask, setRemainingTask] = useState(true);
    const [completedTask, setCompletedTask] = useState(false);
    const { addTask, setAddTask } = useContext(AuthContext);

    // Toggle tasks navbar
    const toggleRemainingTask = () => {
        setRemainingTask(true);
        setCompletedTask(false);
    }
    const toggleCompletedTask = () => {
        setRemainingTask(false);
        setCompletedTask(true);
    }

    return (
        <>
            <div className='w-full min-h-[300px]'>
                {/* Add Task Button */}
                <div className='flex justify-end items-center p-3'>
                    <button onClick={() => setAddTask(t => !t)} className='w-40 p-2 bg-primary-blue hover:bg-primary-lightblue rounded-md font-poppins flex items-center justify-center gap-3 text-sm text-white cursor-pointer'><span><IoMdAddCircle /></span> Add Task</button>
                </div>
                {/* Task completed */}
                <div className='w-full h-full flex border-t-[1px]'>
                    <div className='w-fit min-h-[300px] p-3 flex flex-col gap-4 border-r-[1px] border-gray-200'>
                        <div onClick={() => toggleRemainingTask()} className='w-36 h-fit bg-gray-100 hover:bg-gray-200 p-2 rounded-md'>
                            <p className='font-poppins text-xs text-black text-center tracking-wide cursor-pointer'>Remaining Task</p>
                        </div>
                        <div onClick={() => toggleCompletedTask()} className='w-36 h-fit bg-gray-100 hover:bg-gray-200 p-2 rounded-md'>
                            <p className='font-poppins text-xs text-black text-center tracking-wide cursor-pointer'>Completed Task</p>
                        </div>
                    </div>
                    {/* Remaining and Completed Task */}
                    {
                        remainingTask ?
                            <RemainingTask studentDetails={studentDetails} leadID={leadID} />
                            : null
                    }
                    {
                        completedTask ?
                            <CompletedTask studentDetails={studentDetails} leadID={leadID} />
                            : null
                    }

                </div>

            </div>
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

export default Task