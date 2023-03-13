import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const EnglishTestForm = ({ englishTestID }) => {

    const [testDetail, setTestDetail] = useState()
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/updateEnglishTest/${id}/${englishTestID}`).then((res) => {
            setTestDetail(res.data.engTest)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const editEnglishTest = (values) => {
        axios.put(`http://localhost:3000/api/v1/updateEnglishTest/${id}/${englishTestID}`, values).then((res) => {
            toast.success("English test updated");
            setTimeout(() => {
                window.location.reload(true);
            }, 2000)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
            <Formik
                enableReinitialize
                initialValues={testDetail}
                onSubmit={(values) => { editEnglishTest(values) }}
            >
                {({ values, setFieldValue }) => (
                    <Form className='w-full pr-2 flex flex-col gap-7'>
                        <>
                            < p className="" > Select the type of Test</p>
                            <div className=''>
                                <div className="flex flex-col gap-2">
                                    <div role="group" className="grid grid-cols-4">
                                        <div className='flex gap-2 items-center'>
                                            <Field type="radio" name="testType" value="IELTS" className='' />
                                            <p className='font-poppins text-sm'>IELTS</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <Field type="radio" name="testType" value="TOEFL" className='' />
                                            <p className='font-poppins text-sm'>TOFEL</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <Field type="radio" name="testType" value="GRE" className='' />
                                            <p className='font-poppins text-sm'>GRE</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <Field type="radio" name="testType" value="PTE" className='' />
                                            <p className='font-poppins text-sm'>PTE</p>
                                        </div>
                                    </div>
                                    <p className="font-poppins text-sm mt-2">Given Exam Date</p>
                                    <div className="w-full grid grid-cols-2 grid-rows-1 gap-3">
                                        <Field type="date" id="date" name="givenExamDate" className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]" />

                                    </div>
                                </div>
                            </div>
                            {/* Score */}
                            < div className="w-full grid" >
                                <div className="w-full grid grid-cols-5 gap-3">
                                    <div className='w-full flex flex-col gap-2'>
                                        <label className="font-poppins text-sm">Reading</label>
                                        <Field
                                            type='number'
                                            name="Reading" className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                    </div>
                                    <div className='w-full flex flex-col gap-2'>
                                        <label className='font-poppins text-sm'>Writing</label>
                                        <Field
                                            type='number'
                                            name="Writing" className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                    </div>
                                    <div className='w-full flex flex-col gap-2'>
                                        <label className='font-poppins text-sm'>Speaking</label>
                                        <Field
                                            type='number'
                                            name="Speaking" className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                    </div>
                                    <div className='w-full flex flex-col gap-2'>
                                        <label className='font-poppins text-sm'>Listening</label>
                                        <Field id="outlined-required"
                                            type='number'
                                            name="Listening" className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                    </div>
                                    <div className='w-full flex flex-col gap-2'>
                                        <label className="font-poppins text-sm" >Overall score</label>
                                        <Field id="outlined-required"
                                            type='number'
                                            name="overallScore" className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                    </div>
                                </div>
                            </div>
                        </>

                        <div className=''>
                            <Field className='bg-primary-blue w-40 rounded-md p-3 font-poppins tracking-wide text-white' type="submit" id="outlined-required" value="Submit" />
                        </div>
                    </Form>
                )}
            </Formik >
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

export default EnglishTestForm