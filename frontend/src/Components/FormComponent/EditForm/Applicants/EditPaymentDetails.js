import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const EditPaymentDetails = ({ paymentID }) => {

  const [paymentDetail, setPaymentDetail] = useState()
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/paymentdelget/${id}/${paymentID}`).then((res) => {
      setPaymentDetail(res.data.paymentbyid)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  const updatePaymentDetails = (value) => {
    axios.put(`http://localhost:3000/api/v1/editPayment/${id}/${paymentID}`, value).then((res) => {
      toast.success("Payment details updated");
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
        initialValues={paymentDetail}
        onSubmit={(values) => { updatePaymentDetails(values) }}
      >
        {({ values, setFieldValue }) => (
          <Form className='flex flex-col gap-3'>
            <div className='w-full grid grid-rows-3 grid-cols-2 gap-2'>
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
            </div>
            <div className='w-full flex flex-col gap-2'>
              <Field type="submit" value="Update Payment" className='bg-primary-blue w-40 rounded-md p-3 text-sm font-poppins tracking-wide text-white' />
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

export default EditPaymentDetails