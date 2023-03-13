import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const PersonalDocument = () => {

    const { id } = useParams();
    const uploadDocuments = (values) => {
        console.log(values)
        axios.put(`http://localhost:3000/api/v1/fileUpload/${id}`, values).then((res) => {
            toast.success("Personal document updated")
        })
    }

    return (
        <>
            <Formik
                initialValues={{
                    uploadCitizenship: '',
                    uploadPassport: '',
                }}
                onSubmit={(values) => {
                    let formData = new FormData();
                    formData.append("uploadCitizenship", values.uploadCitizenship)
                    formData.append("uploadPassport", values.uploadPassport)
                    uploadDocuments(formData);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form className='w-full flex flex-col gap-5'>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='font-poppins text-sm tracking-wide'>Citizenship</label>
                                <Field className='border-[1px] border-gray-300 p-2 rounded font-poppins text-sm tracking-wide' type='file' name="file"
                                    onChange={(e) => {
                                        setFieldValue("uploadCitizenship", e.target.files[0]);

                                    }} />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='font-poppins text-sm tracking-wide'>Passport</label>
                                <Field className='border-[1px] border-gray-300 p-2 rounded font-poppins text-sm tracking-wide' type='file' name="file"
                                    onChange={(e) => {
                                        setFieldValue("uploadPassport", e.target.files[0]);

                                    }} />
                            </div>
                        </div>
                        <div className='w-fit flex flex-col gap-2'>
                            <Field className='w-36 bg-primary-blue hover:bg-primary-lightblue text-white  p-2 rounded font-poppins text-sm tracking-wide' type='submit' value="Add Documents" />
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

export default PersonalDocument