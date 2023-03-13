import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const EditPaymentReceipt = ({ paymentID }) => {

    const [paymentReceipt, setPaymentReceipt] = useState()
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/paymentdelget/${id}/${paymentID}`).then((res) => {
            setPaymentReceipt(res.data.paymentbyid)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const uploadPaymentReceipt = (value) => {
        axios.put(`http://localhost:3000/api/v1/paymentReceipt/${id}/${paymentID}`, value).then((res) => {
            toast.success("Payment receipt updated");
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
                initialValues={paymentReceipt}
                onSubmit={(values) => {
                    let formData = new FormData();
                    formData.append("receipt", values.receipt)
                    uploadPaymentReceipt(formData);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <div className='w-full grid grid-rows-2 grid-cols-1 gap-2'>

                            <div className='w-full flex flex-col gap-2'>
                                <label className='w-full font-poppins text-sm'>Receipt</label>
                                <Field type="file" name="Upload receipt here" placeholder='Temporary Address' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'
                                    onChange={(e) => {
                                        setFieldValue("receipt", e.target.files[0]);

                                    }} />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <Field type="submit" value="Add Payment" className='bg-primary-blue w-40 rounded-md p-3 text-sm font-poppins tracking-wide text-white' />
                            </div>
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

export default EditPaymentReceipt