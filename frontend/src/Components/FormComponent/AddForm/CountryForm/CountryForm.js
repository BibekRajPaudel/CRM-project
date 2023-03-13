import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CountryForm = () => {

    const addCountry = (formData) => {
        axios.post("http://localhost:3000/api/v1/country", formData).then((res) => {
            toast.success("New country updated");
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

            <Formik initialValues={{
                countryName: '',
                continent: '',
                studentEnrolled: '',
                universities: '',
                processing: '',
                countryCode: '',
                flag: '',
            }}

                onSubmit={(values) => {
                    let formData = new FormData();
                    formData.append("countryName", values.countryName)
                    formData.append("continent", values.continent)
                    formData.append("studentEnrolled", values.studentEnrolled)
                    formData.append("universities", values.universities)
                    formData.append("processing", values.processing)
                    formData.append("countryCode", values.countryCode)
                    formData.append("flag", values.flag)
                    addCountry(formData);
                }}

            >
                {({ values, setFieldValue }) => (
                    <Form className='w-full'>
                        <div className='w-full grid grid-cols-3 gap-3'>
                            <div className='w-full flex flex-col gap-2 '>
                                <label className='font-poppins text-sm tracking-wide'>Name</label>
                                <Field required name="countryName" placeholder='Enter country here' className='border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide' />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='font-poppins text-sm tracking-wide'>Continent</label>
                                <Field required name="continent" type="text" placeholder='Enter continent here' className='border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide' />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='font-poppins text-sm tracking-wide'>Country Code</label>
                                <Field required name="countryCode" type="text" placeholder='Enter country code here' className='border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide' />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='font-poppins text-sm tracking-wide'>Total Universities</label>
                                <Field required name="universities" type="number" placeholder='Enter total universities here' className='border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide' />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='font-poppins text-sm tracking-wide'>Total Enrolled</label>
                                <Field required name="studentEnrolled" type="number" placeholder='Enter total enrolled here' className='border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide' />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='font-poppins text-sm tracking-wide'>Total Processing</label>
                                <Field required name="processing" type="number" placeholder='Enter total processing here' className='border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide' />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='font-poppins text-sm tracking-wide'>Flag Image</label>
                                <Field required name="flag" type="file" className='border-[1px] p-2 rounded w-full font-poppins text-sm tracking-wide'
                                    onChange={(e) => {
                                        setFieldValue("flag", e.target.files[0])
                                    }}
                                    value={undefined}
                                />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <Field className='bg-primary-blue w-40 rounded-md p-2 font-poppins tracking-wide text-white mt-5 hover:bg-primary-lightblue' type="submit" id="outlined-required" value="Add Country" />
                        </div>
                    </Form>
                )}
            </Formik>
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

export default CountryForm