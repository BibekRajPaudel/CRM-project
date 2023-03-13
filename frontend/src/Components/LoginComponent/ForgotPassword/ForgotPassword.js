import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import axios from 'axios'
const Forgot = () => {
  const [email, setEmail] = useState('')
  // Login post
  const loginAdmin = (data) => {
    console.log(data)
    axios.post("http://localhost:3000/api/v1/password/forgot", data, { headers: { 'Content-Type': 'application/json' } }).then((res => {
      localStorage.setItem('token', res.data.token)
      setEmail("");
    })).catch((error) => {
      console.log(error.data)
    })
  }
  // Formik initial values 
  const initialValues = {
    email,
  };
  // validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .required("Required*"),
  });
  return (
    <>
      {/* Main container */}
      <div className='w-full mt-20'>
        <h1 className="mfont-poppins font-semibold text-xl text-center ">Forgot Password</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={loginAdmin}
          validationSchema={validationSchema}
        >
          <Form className='mt-5 w-full flex flex-col items-center gap-7'>
            <Field type="text" name="email" placeholder='Your email' className='w-[25vw] rounded-md text-sm p-3 outline-none border-gray-900  border-2 font-poppins tracking-wide bg-transparent' />
            <div className='p-5'>
              <Field className='h-10 bg-gradient-to-r to-blue-200 from-blue-600  hover:bg-[#729af0] cursor-pointer w-36 p-2 rounded-md font-poppins text-sm tracking-wide text-white' type="submit" value="Send to Email" />
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
}
export default Forgot