import { Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CompletedTask = ({ studentDetails, leadID }) => {

    console.log(studentDetails)
    const deleteTask = (id) => {
        axios.delete(`http://localhost:3000/api/v1/deleteTask/${leadID}/${id}`).then((res) => {
            toast.success("Task has been deleted");
        })
    }

    const markCompleted = (value, id) => {
        axios.put(`http://localhost:3000/api/v1/deleteTask/${leadID}/${id}`, { progress: value }).then((res) => {
            toast.success("Task has been moved to remaining");
        })
    }

    return (
        <>
            <div className='w-full p-3 flex flex-col gap-2'>
                {
                    studentDetails && studentDetails.formData && studentDetails.formData.task.filter(task => task.progress === 'Completed').length > 0 ?
                        <div className='w-full'>
                            {
                                studentDetails && studentDetails.formData && studentDetails.formData.task.filter(task => task.progress === 'Completed').map((data, index) => (
                                    <div key={index} className='w-fit flex items-center gap-5'>
                                        <div className='flex gap-2 items-center'>
                                            <Tooltip title="Mark as completed" placement='top' arrow>
                                                <p onClick={() => markCompleted(data.isCompleted = "Completed", data._id)} className='text-xl text-green-400 cursor-pointer rounded-md'><AiFillCheckCircle /></p>
                                            </Tooltip>
                                            <Tooltip title="Delete Task" placement='top' arrow>
                                                <p onClick={() => deleteTask(data._id)} className='text-lg text-red-400 cursor-pointer'><BsFillTrashFill /></p>
                                            </Tooltip>
                                        </div>
                                        <div>

                                            < p className='font-poppins text-xs tracking-wide' > {data.task}</p>

                                        </div>
                                    </div>
                                )
                                )}
                        </div>
                        :
                        <>
                            <div className='w-full h-[250px] flex justify-center items-center'>
                                <p className='font-poppins text-sm tracking-wide text-red-600 font-bold'>No completed tasks to show !!</p>
                            </div>
                        </>
                }


            </div>
            
        </>
    )
}

export default CompletedTask