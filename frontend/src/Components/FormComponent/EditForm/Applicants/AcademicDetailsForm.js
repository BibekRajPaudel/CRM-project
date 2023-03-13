import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AcademicDetailsForm = ({ academicDocumentID }) => {

    console.log("This is something", academicDocumentID)
    const [academicDetails, setAcademicDetails] = useState()
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/academicDetails/${id}/${academicDocumentID}`).then((res) => {
            setAcademicDetails(res.data.academicDetail)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const editAcademicDetails = (value) => {
        axios.put(`http://localhost:3000/api/v1/academicDetails/${id}/${academicDocumentID}`, value).then((res) => {
            toast.success("Academic details updated");
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
                initialValues={academicDetails}
                onSubmit={(values) => { editAcademicDetails(values) }}
            >
                {({ values, setFieldValue }) => (
                    <Form className='w-full pr-2 flex flex-col gap-7'>
                        <>
                            <div className="w-full grid grid-cols-2 grid-rows-2 gap-3">
                                <div className="flex flex-col gap-2">
                                    <label className='w-full font-poppins text-sm'>Education</label>
                                    <Field
                                        className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'
                                        id="outlined-select-education"
                                        as="select"
                                        name="Education"
                                    >
                                        <option value="None">Select your Education level</option>
                                        <option value="+2">+2 Level</option>
                                        <option value="Bachelor Level">Bachelor level</option>
                                        <option value="Master Level">Master level</option>
                                    </Field>

                                </div>
                                {/* College Section */}
                                <div className="w-full flex flex-col gap-2">
                                    <label className='w-full font-poppins text-sm'>College Name</label>
                                    <Field className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'
                                        name="collegeName" id="outlined-required"
                                        placeholder="Your college name here *"
                                    />
                                </div>
                                <div className='w-full flex flex-col gap-2'>
                                    <p className="w-full font-poppins text-sm">Joined Year:</p>
                                    <Field type="date" id="date" name="joinedYear" className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'

                                        placeholder="start Date"
                                    />
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <p className="w-full font-poppins text-sm">Passed Year:</p>
                                    <Field type="date" id="date" name="passedYear" className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'

                                        placeholder="End Date"
                                    />
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

export default AcademicDetailsForm