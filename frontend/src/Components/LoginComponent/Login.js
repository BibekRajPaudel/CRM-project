import React, { useState, useEffect } from 'react'
import { usePasswordToggle } from '../../Hooks/usePasswordToggle'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { gapi } from 'gapi-script'
import GLogin from './GoogleLogin/GLogin';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const clientId = '480547441435-v94trieukkbeivtrr3no9k4urooolujg.apps.googleusercontent.com'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const navigate = useNavigate()

  const responseGoogle = (response) => {
    console.log(response);
  }

  // Login post

  const loginAdmin = (data) => {
    axios.post("http://localhost:3000/api/v1/login", data, { headers: { 'Content-Type': 'application/json' } }).then((res => {
      localStorage.setItem('token', res.data.token)
      setEmail("");
      setPassword("");
      toast.promise(
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 2000)
        }),
        {
          pending: "Please wait...",
          success: "Welcome to CRM",
          error: "Error encountered"
        }
      )
      setTimeout(() => {
        window.location.href = '/'
      }, 3000)
    })).catch((error) => {
      console.log(error.data)
    })

  }
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load('client:auth2', start)
  }, [])

  // Formik initial values 
  const initialValues = {
    email,
    password,

  };

  // validation

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
          onSubmit={loginAdmin}
          validationSchema={validationSchema}
        >
          <Form className='w-full flex flex-col items-center gap-7'>
            <Field type="text" name="email" placeholder='Your email' className='w-full text-sm p-3 outline-none border-b-2 font-poppins tracking-wide bg-transparent' />
            <div className='w-full relative'>
              <Field type={PasswordInputType} name="password" placeholder='Your Password' className='w-full text-sm p-3 outline-none border-b-2 font-poppins tracking-wide bg-transparent' />
              <span className='absolute right-5 text-2xl text-gray-500 cursor-pointer w-fit'>{ToggleIcon}</span>
            </div>
            {/* Remember me & Forgot password*/}
            <div className='w-full grid grid-cols-2 grid-rows-1'>
              <div className='w-full flex items-center gap-2'>
                <Field type="checkbox" id="remember" name="remember" value="remember" />
                <label for="remember" className='font-poppins text-sm'>Remember Me</label>
              </div>
              {/* Forgot password */}
              <div className='flex justify-end'>
                <p className='font-poppins text-sm text-blue-500 cursor-pointer w-fit'><Link to='/forgot'>Forgot Password ?</Link></p>
              </div>
            </div>
            {/* Login button */}
            <div className='p-5'>
              <Field className='h-10 bg-gradient-to-r to-blue-200 from-blue-600  hover:bg-[#729af0] cursor-pointer w-36 p-2 rounded-md font-poppins text-sm tracking-wide text-white' type="submit" value="Sign in" />
            </div>
          </Form>
        </Formik>

        {/* Or section */}
        <div className='w-full flex items-center justify-center '>
          <p className='w-fit relative before:content-[""] before:w-72 before:h-[0.5px] before:absolute before:bg-gray-200 before:-left-[300px] before:top-3 after:content-[""] after:w-72 after:h-[0.5px] after:absolute after:bg-gray-200 after:-right-[300px] after:top-3 font-poppins text-sm'>or</p>
        </div>
        {/* Google login */}
        <div className='w-full flex p-5 justify-center items-center '>
          {/* <GoogleLogin
          clientId="480547441435-v94trieukkbeivtrr3no9k4urooolujg.apps.googleusercontent.com"
          buttonText="Continue with google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          className="bg-white drop-shadow-sm font-poppins text-black tracking-wide"
        /> */}
          <GLogin className="bg-white drop-shadow-sm font-poppins text-black tracking-wide" />

        </div>
        {/* Terms and condition */}
        <div className='w-full mt-2'>
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

export default Login