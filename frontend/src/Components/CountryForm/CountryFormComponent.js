import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

const CountryFormComponent = () => {
    const addTasking = (formData) => {
        axios.post("http://localhost:3000/api/v1/Form1", formData).then((res) => {
            console.log('addingtask')


        }).catch((error) => {
            console.log(error)

        })
    }
    return (
        <>
            {/* Main container */}
            <div className=' border-box absolute w-[600px] h-[400px] left-1/3 top-1/4  shadow-gray-900 bg-[#FFFFFF]  '>

                <Formik initialValues={{
                    name: '',
                    continent: '',
                    countryCode: '',
                    createdAt: ''
                }}

                    onSubmit={(values) => {
                        let formData = new FormData();
                        formData.append("name", values.name)
                        formData.append(" continent", values.continent)
                        formData.append(" countryCode", values.countryCode)
                        addTasking(formData);
                    }}

                >
                    {({ values, setFieldValue }) => (
                        <Form className=' font-Poppins font-semibold text-base text-black  grid grid-cols-1 gap-6 mt-10 ml-20 rounded-md'>
                            <div className="ml-[400px]">
                                <GrClose className="w-[20px] h-[20px]  " />
                            </div>
                            {/* Assign Task */}
                            <div className=' relative grid -mt-5 '>
                                <label className='font-Poppins font-bold text-lg'>Name</label>
                                <Field required name="name" id="name" placeholder='Nepal' className='w-[24vw] h-[5vh] mt-1 border-1  border-current text-sm outline-none  font-poppins tracking-wide ' />
                            </div>
                            {/* Due Date */}
                            <div className='relative  grid'>
                                <label className='font-Poppins font-bold text-lg'>Continent</label>
                                <Field required name="continent" type="text" id="continent" placeholder='Asia' className='w-[15vw] h-[5vh] mt-1 border-1  border-current text-sm outline-none  font-poppins tracking-wide ' />
                            </div>
                            <div className='relative  grid'>
                                <label className='font-Poppins font-bold text-lg'>Country Code</label>
                                <Field required name="countryCode" type="countryCode" id="countryCode" placeholder='+977' className='w-[15vw] h-[5vh] mt-1 border-1  border-current text-sm outline-none  font-poppins tracking-wide ' />
                            </div>
                            <div className=''>
                                <Field className='w-[90px] h-[35px]  p-2 font-Poppins font-semibold  left-9 top-64   bg-[#2B7FFF] text-black  cursor-pointer  rounded-md font-poppins text-sm tracking-wide' type="submit" id="outlined-required"
                                    value="Add Now" />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default CountryFormComponent