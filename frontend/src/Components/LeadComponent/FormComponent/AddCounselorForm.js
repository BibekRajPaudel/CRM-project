import axios from 'axios'
import { Field, FieldArray, Form, Formik } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const AddCounselorForm = () => {

  const { id } = useParams();

  const addTasking = (values) => {
    console.log(values)
    axios.post(`http://localhost:3000/api/v1/addCounsellor/${id}`, values).then((res) => {
      toast.success("Counselor has been added");
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
          email: '',
          contact: ''
        }}
        onSubmit={(values) => { addTasking(values) }}
      >
        {({ values, setFieldValue }) => (
          <Form className='w-full pr-2 flex flex-col gap-7'>
            <>
              < div className='w-full grid grid-cols-3 gap-5' >
                <div className='flex flex-col gap-2'>
                  <label className='font-poppins text-sm tracking-wide'>Counselor Name</label>
                  <Field required name="name" placeholder='Counselor Name' className='w-full p-2 border-[1px] border-gray-300 rounded font-poppins text-sm tracking-wide' />
                </div>
                {/* Contact */}
                <div className='flex flex-col gap-2'>
                  <label className='font-poppins text-sm tracking-wide'>Contact</label>
                  <Field required name="contact" placeholder="Contact" type="text" className='w-full p-2 border-[1px] border-gray-300 rounded font-poppins text-sm tracking-wide' />
                </div>
                {/* Email */}
                <div className='flex flex-col gap-2'>
                  <label className='font-poppins text-sm tracking-wide'>Email</label>
                  <Field required name="email" placeholder="Email" type="text" className='w-full p-2 border-[1px] border-gray-300 rounded font-poppins text-sm tracking-wide' />
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

export default AddCounselorForm