import React, { useState, useEffect } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import axios from 'axios'
import GLogin from '../LoginComponent/GoogleLogin/GLogin';
import { usePasswordToggle } from '../../Hooks/usePasswordToggle'
import GoogleLogin from 'react-google-login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const [name, setname] = useState('')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const register = (data) => {
    axios.post("http://localhost:3000/api/v1/register", data).then((res) => {
      toast.success("User Registered");
      setTimeout(() => {
        window.location.href = '/login'
      }, 2000)
    }).catch((error) => {
    })
  }
  // Formik validation
  const initialValues = {
    name,
    email,
    password,
    confirmPassword,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .required("Required*"),
    password: Yup.string().min(8, "Password must be atleat 8 character").max(20).required("Required*"),

  });
  return (
    <>
      {/* Main container */}
      <div className='w-full mt-5'>
        <Formik
          initialValues={initialValues}
          onSubmit={register}
          validationSchema={validationSchema}
        >
          <Form className='w-full flex flex-col items-center gap-7'>
            {/* Email address */}
            <div className='w-full relative'>
              <Field type="text"
                autoComplete="off"
                id="email"
                name="email"
                placeholder='Enter your email' className='w-full text-sm p-3 outline-none border-b-2 font-poppins tracking-wide bg-transparent' />
            </div>
            {/* username */}
            <div className='w-full relative'>
              <Field type="text"
                autoComplete="off"
                id="name"
                placeholder='name' name='name' className='w-full text-sm p-3 outline-none border-b-2 font-poppins tracking-wide bg-transparent' />
            </div>
            {/* password */}
            <div className='w-full relative'>
              <Field type={PasswordInputType}
                autoComplete="off"
                id="password"
                name="password"
                placeholder="Password"
                className='w-full text-sm p-3 outline-none border-b-2 font-poppins tracking-wide bg-transparent' />
              <span className='absolute right-5 text-2xl text-gray-500 cursor-pointer w-fit'>{ToggleIcon}</span>
            </div>
            {/* confirm password */}
            <div className='w-full relative'>
              <Field type={PasswordInputType}
                autoComplete="off"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password" className='w-full text-sm p-3 outline-none border-b-2 font-poppins tracking-wide bg-transparent' />
              <span className='absolute right-5 text-2xl text-gray-500 cursor-pointer w-fit'>{ToggleIcon}</span>
            </div>
            {/* Login button */}
            <div className='p-5'>
              <Field
                type="submit"
                autoComplete="off"
                id="register"
                name="register"

                className='h-10 bg-gradient-to-r to-blue-200 from-blue-600  hover:bg-[#0052D4] cursor-pointer w-36 p-2 rounded-md font-poppins text-sm tracking-wide text-white' value="Submit" />
            </div>
          </Form>
        </Formik>
        {/* Or section */}
        {/* <div className='w-full flex items-center justify-center '>
          <p className='w-fit relative before:content-[""] before:w-72 before:h-[0.5px] before:absolute before:bg-gray-200 before:-left-[300px] before:top-3 after:content-[""] after:w-72 after:h-[0.5px] after:absolute after:bg-gray-200 after:-right-[300px] after:top-3 font-poppins text-sm'>or</p>
        </div> */}
        {/* Google login */}
        {/* <div className='w-full flex p-5 justify-center items-center ml-5'>
          <GLogin />
        </div> */}

        {/* Terms and condition */}
        <div className='w-full'>
          <p className='text-center font-poppins text-xs'>By continuing, you agree to our <span className='text-blue-500 cursor-pointer'>Terms & Conditions</span></p>
        </div>
      </div>
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

export default Register