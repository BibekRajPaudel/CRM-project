import React, { useState } from 'react'
import { Field, FieldArray, Form, Formik } from 'formik';
import * as Yup from "yup";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { AiFillMinusCircle } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {

    const { id } = useParams();

    const addTasking = (values) => {
        axios.post(`http://localhost:3000/api/v1/addTask/${id}`, values).then((res) => {
            toast.success("Task has been added");
            setTimeout(() => {
                window.location.reload(true);
            }, 2000)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
            {/* Main container */}
            <div className=''>

                <Formik initialValues={{
                    task: '',
                    dueDate: ''
                }}
                    onSubmit={(values) => { addTasking(values) }}
                >

                    <Form className='flex flex-col gap-5'>
                        {/* Assign Task */}
                        < div className='w-full grid grid-cols-2 gap-5' >
                            <div className='flex flex-col gap-2'>
                                <label className='font-poppins text-sm tracking-wide'>Assign Task</label>
                                <Field required name="task" placeholder='Assign Task' className='w-full p-2 border-[1px] border-gray-300 rounded font-poppins text-sm tracking-wide' />
                            </div>
                            {/* Due Date */}
                            <div className='flex flex-col gap-2'>
                                <label className='font-poppins text-sm tracking-wide'>Due Date</label>
                                <Field required name="dueDate" type="date" className='w-full p-2 border-[1px] border-gray-300 rounded font-poppins text-sm tracking-wide' />
                            </div>
                        </div>

                        <div className='w-fit'>
                            <Field className='w-24 bg-primary-blue font-poppins rounded p-2 text-white text-sm hover:bg-primary-lightblue' type="submit" id="outlined-required" value="Add Task" />
                        </div>
                    </Form>

                </Formik>
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
export default AddTask