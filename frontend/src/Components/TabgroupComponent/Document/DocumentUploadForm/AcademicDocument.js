import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AcademicDocument = ({ academicDocumentID }) => {

    const { id } = useParams();

    const leadID = id
    console.log("thi is id from academic", academicDocumentID)

    const uploadDocuments = (values) => {
        axios.put(`http://localhost:3000/api/v1/academicDocuments/${leadID}/${academicDocumentID}`, values).then((res) => {
            toast.success("Academic document updated");
        })
    }

    return (
        <>
            <Formik
                initialValues={{
                    uploadMarkSheet: ''
                }}
                onSubmit={(values) => {
                    let formData = new FormData();
                    formData.append("uploadMarkSheet", values.uploadMarkSheet)
                    uploadDocuments(formData);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form className='w-full flex flex-col gap-5'>
                        <div className='grid grid-cols-1 gap-5'>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='font-poppins text-sm tracking-wide'>Marksheet</label>
                                <Field className='border-[1px] border-gray-300 p-2 rounded font-poppins text-sm tracking-wide' type='file'
                                    onChange={(e) => {
                                        setFieldValue("uploadMarkSheet", e.target.files[0]);

                                    }} value={undefined} />
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

export default AcademicDocument