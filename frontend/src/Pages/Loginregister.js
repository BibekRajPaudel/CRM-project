import React, { useState } from 'react'
import image from '../Assets/Images/login.png'
import Login from '../Components/LoginComponent/Login'
import Register from '../Components/RegisterComponent/Register'

const Loginregister = () => {

    // State
    const [signinNavbar, setSigninNavbar] = useState(true)
    const [signupNavbar, setSignupNavbar] = useState(false)

    const navbarlogin = () => {
        setSignupNavbar(false)
        setSigninNavbar(true)
    }
    const navbarregister = () => {
        setSignupNavbar(true)
        setSigninNavbar(false)
    }

    return (
        <>
            {/* Main container */}
            <div className='w-full h-[100vh]'>
                {/* Secondary conatiner */}
                <div className='w-full h-full grid grid-cols-2 '>
                    {/* Image section */}
                    <div className='w-full h-[100vh] relative'>
                        <img className='w-full h-[100vh] object-cover' src={image} alt="login image" />
                        {/* logo section */}
                        <div className=''>
                            <h1 className='font-bold text-2xl absolute top-10 left-5 font-poppins'>LOGO</h1>
                        </div>
                    </div>
                    {/* Form section container */}

                    <div className='w-full flex flex-col'>
                        {/* Form navbar */}
                        <div className='w-full grid grid-cols-2 grid-rows-1'>
                            <p onClick={navbarlogin} className={signinNavbar ? 'p-5 font-poppins text-sm font-semibold tracking-wide text-center cursor-pointer text-[#0052D4] transition ease-in duration-400 border-b-2 border-b-[#0052D4]' : 'p-5 font-poppins text-sm font-semibold tracking-wide text-center cursor-pointer hover:bg-[#E6F0FF] hover:text-[#0052D4] transition ease-in duration-400 border-b-2'}>Sign In</p>
                            <p onClick={navbarregister} className={signupNavbar ? 'p-5 font-poppins text-sm font-semibold tracking-wide text-center cursor-pointer text-[#0052D4] transition ease-in duration-400 border-b-2 border-b-[#0052D4]' : 'p-5 font-poppins text-sm font-semibold tracking-wide text-center cursor-pointer hover:bg-[#E6F0FF] hover:text-[#0052D4] transition ease-in duration-400 border-b-2'}>Sign Up</p>
                        </div>

                        {/* Heading section */}
                        {
                            signinNavbar &&
                            <div className='w-full p-6 flex flex-col gap-3 mt-2'>
                                <h1 className='font-poppins text-3xl font-bold tracking-wide text-[#ED8936]'>Hello,</h1>
                                <h1 className='font-poppins text-3xl font-bold tracking-wide'>Welcome Back</h1>
                                <Login />

                            </div>
                        }

                        {
                            signupNavbar &&
                            <div className='w-full h-fit p-6 flex flex-col gap-3 mt-2'>
                                <h1 className='font-poppins text-3xl font-bold tracking-wide text-[#ED8936]'>Welcome,</h1>
                                <h1 className='font-poppins text-3xl font-bold tracking-wide'>Register here</h1>
                                <Register />

                            </div>
                        }


                    </div>
                    {/* <Register /> */}
                </div>

            </div>
        </>
    )
}

export default Loginregister