import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Box, Grid, Typography } from '@mui/material'
const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { token } = useParams()
    const navigate = useNavigate()
    const resetPassword = (data) => {
        console.log(data)
        axios.put(`http://localhost:3000/api/users/password/reset/${token}`, data).then((res) => {
            toast.success("Password updated successfully");
            setTimeout(() => {
                navigate('/login');
            }, 3000)
        }).catch((error) => {
            console.log(error)
        })
    }
    const validationSchema = Yup.object().shape({
        password: Yup.string().min(8, "Password must be atleat 8 character").max(20).required("Required*"),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Password does not match"
        ).required("Required*"),
    });

    const initialValues = {
        password,
        confirmPassword,
    };

    return (
        <>
            <Box sx={{ backgroundColor: '', width: '100%', height: '88.8vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative' }}>

                <Box sx={{ width: '100%', backgroundColor: '', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                    <Typography sx={{ width: 'fit-content', fontFamily: "'Poppins', sans-serif", fontSize: '28px', letterSpacing: '0.5px', fontWeight: 'bold' }}>Update Password</Typography>
                </Box>
                <Box sx={{ width: '100%', backgroundColor: '', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <Box sx={{ backgroundColor: '', display: 'flex', flexDirection: 'column', borderRadius: '10px', padding: '20px' }}>

                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    height: '100%',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: ''
                                }}
                            >
                                {/* Formik form */}
                                <Box sx={{ backgroundColor: '', width: '100%', height: '100%' }}>
                                    <Formik
                                        initialValues={initialValues}
                                        onSubmit={resetPassword}
                                        validationSchema={validationSchema}
                                    >
                                        <Form style={{ backgroundColor: '', width: '100%', height: '100%' }}>
                                            <Grid container sx={{ backgroundColor: '', height: '100%', justifyContent: 'center', alignItems: 'center', rowGap: '30px' }}>


                                                <Grid item xs={12} sm={12} sx={{ backgroundColor: '', rowGap: '20px' }}>
                                                    <label style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', letterSpacing: '0.5px', position: 'relative', width: '100%' }}>New Password &nbsp;</label>
                                                    <Typography style={{ backgroundColor: '', width: '100%', color: 'red', fontSize: '14px' }}><ErrorMessage name="password" component="span" /></Typography>
                                                    <Field
                                                        type="password"
                                                        autoComplete="off"
                                                        id="password"
                                                        name="password"
                                                        placeholder="New Password"
                                                        style={{ width: '100%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', marginTop: '10px' }}

                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12} sx={{ backgroundColor: '', rowGap: '20px' }}>
                                                    <label style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', letterSpacing: '0.5px', position: 'relative', width: '100%' }}>Confirm Password &nbsp;</label>
                                                    <Typography style={{ backgroundColor: '', width: '100%', color: 'red', fontSize: '14px' }}><ErrorMessage name="confirmPassword" component="span" /></Typography>
                                                    <Field
                                                        type="password"
                                                        autoComplete="off"
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        placeholder="Confirm Password"
                                                        style={{ width: '100%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', marginTop: '10px' }}

                                                    />
                                                </Grid>


                                                <Grid item xs={12} sm={12}>
                                                    <Field
                                                        type="submit"
                                                        autoComplete="off"
                                                        id="register"
                                                        name="register"
                                                        style={{ width: '100%', height: '50px', borderRadius: '10px', outline: 'none', border: 'none', color: 'white', fontSize: '18px', fontFamily: '"Poppins", sans-serif', letterSpacing: '0.5px' }}
                                                        value="Update"
                                                        className="button"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    </Formik>
                                </Box>
                            </Box>
                        </Box>
                    </Box >
                </Box>
            </Box>
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

export default ResetPassword