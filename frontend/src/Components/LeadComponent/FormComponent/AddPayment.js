import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AddPayment = () => {

    const { id } = useParams()
    const uploadPayment = (values) => {
        axios.post(`http://localhost:3000/api/v1/payment/${id}`, values).then((res) => {
            toast.success("Payment details has been added");
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
                initialValues={{
                    name: '',
                    bank: '',
                    paymentFor: '',
                    totalAmount: '',
                    date: '',
                    receipt: ''
                }}
                onSubmit={(values) => {
                    let formData = new FormData();
                    formData.append("name", values.name)
                    formData.append("bank", values.bank)
                    formData.append("paymentFor", values.paymentFor)
                    formData.append("totalAmount", values.totalAmount)
                    formData.append("date", values.date)
                    formData.append("receipt", values.receipt)
                    uploadPayment(formData);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <div className='w-full grid grid-rows-3 grid-cols-3 gap-2'>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='w-full font-poppins text-sm'>Name</label>
                                <Field name="name" placeholder='Enter name here' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='w-full font-poppins text-sm'>Bank Name</label>
                                <Field name="bank" placeholder='Enter bank here' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='w-full font-poppins text-sm'>Payment For</label>
                                <Field name="paymentFor" placeholder='Enter payment here' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='w-full font-poppins text-sm'>Amount</label>
                                <Field name="totalAmount" placeholder='Enter amount here' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <label className='w-full font-poppins text-sm'>Date</label>
                                <Field type="date" name="date" placeholder='Temporary Address' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                            </div>
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

export default AddPayment