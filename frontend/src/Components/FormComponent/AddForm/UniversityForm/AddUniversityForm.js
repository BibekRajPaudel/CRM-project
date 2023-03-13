import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AddUniversity = () => {

    const univeristyFormList = (formData) => {
        console.log(formData)
        axios.post("http://localhost:3000/api/v1/addUniversity", formData).then((res) => {
            toast.success("New university added");
            setTimeout(() => {
                window.location.href = "/university"
            }, 2000)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            {/* Main container */}
            <Formik
                initialValues={{
                    universityName: '',
                    streetNo: '',
                    location: '',
                    country: '',
                    universityType: '',
                    established: '',
                    contact: '',
                    enrolledDate: '',
                    email: '',
                    universityLink: '',
                    livingAndAccomendation: '',
                    askAnyQuestions: '',
                    programOffered: '',
                    descriptionAboutUniversity: '',
                    profile: "",
                    background: ""
                }}
                onSubmit={(values) => {
                    let formData = new FormData();
                    formData.append("universityName", values.universityName)
                    formData.append("streetNo", values.streetNo)
                    formData.append("location", values.location)
                    formData.append("country", values.country)
                    formData.append("universityType", values.universityType)
                    formData.append("established", values.established)
                    formData.append("contact", values.contact)
                    formData.append("enrolledDate", values.enrolledDate)
                    formData.append("email", values.email)
                    formData.append("universityLink", values.universityLink)
                    formData.append("livingAndAccomendation", values.livingAndAccomendation)
                    formData.append("askAnyQuestions", values.askAnyQuestions)
                    formData.append("programOffered", values.programOffered)
                    formData.append("descriptionAboutUniversity", values.descriptionAboutUniversity)
                    formData.append("profile", values.profile)
                    formData.append("background", values.background)
                    univeristyFormList(formData)
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form className='w-full bg-red-300p pr-5'>
                        <div className='w-full flex flex-col gap-5'>
                            <div className='w-full flex flex-col gap-5'>
                                {/* University Name */}
                                <div className='flex flex-col gap-2'>
                                    <label className="font-poppins text-sm tracking-wide">Univeristy Name</label>
                                    <Field
                                        type="text"
                                        required
                                        name="universityName"
                                        placeholder="Enter university name here"
                                        className='p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className="font-poppins text-sm tracking-wide">University Type</label>
                                    <Field
                                        type="text"
                                        required
                                        name="universityType"
                                        placeholder="Enter university type here"
                                        className='p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                    />
                                </div>
                                {/*Location */}

                                <div className='grid grid-cols-3 gap-3'>
                                    {/*country */}
                                    <div className='flex flex-col gap-2'>
                                        <label className="font-poppins text-sm tracking-wide">Country</label>
                                        <Field
                                            type="text"
                                            required
                                            name="country"
                                            placeholder="Enter country here"
                                            className='w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                        />
                                    </div>
                                    {/* location */}
                                    <div className='flex flex-col gap-2'>
                                        <label className="font-poppins text-sm tracking-wide">Location</label>
                                        <Field
                                            required
                                            type="text"
                                            name="location"
                                            placeholder="Enter location here"
                                            className='w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                        />
                                    </div>
                                    {/* Street no */}
                                    <div className='flex flex-col gap-2'>
                                        <label className='font-poppins text-sm tracking-wide'>Street No</label>
                                        <Field
                                            required
                                            type="number"
                                            name="streetNo"
                                            placeholder="Enter street no here"
                                            className='w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                        />
                                    </div>


                                </div>
                                <div className='w-full grid grid-cols-2 gap-3'>
                                    {/*  Established */}
                                    <div className='flex flex-col gap-2'>
                                        <label className="font-poppins text-sm tracking-wide">Established</label>
                                        <Field
                                            type="date"
                                            required
                                            name="established"
                                            placeholder="DD/MM/YYYY"
                                            className='p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                        />
                                    </div>
                                    {/* Contact */}
                                    <div className='flex flex-col gap-2'>
                                        <label className="font-poppins text-sm tracking-wide">Contact </label>
                                        <Field
                                            type="number"
                                            required
                                            name="contact"
                                            placeholder="Enter contact here"
                                            className='p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                        />
                                    </div>
                                </div>

                                <div className='w-full grid grid-cols-2 gap-3'>
                                    {/*  University Email */}
                                    <div className='flex flex-col gap-2'>
                                        <label className="font-poppins text-sm tracking-wide">E-mail</label>
                                        <Field
                                            type="text"
                                            required
                                            name="email"
                                            placeholder="xyz@gail.com"
                                            className='p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                        />
                                    </div>
                                    {/* Website link */}
                                    <div className='flex flex-col gap-2'>
                                        <label className="font-poppins text-sm tracking-wide">Website Link</label>
                                        <Field
                                            type="text"
                                            required
                                            name="universityLink"
                                            placeholder="www.example.com"
                                            className='p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                        />
                                    </div>

                                </div>
                                {/* Programs Offered by University: */}
                                <div className=" w-full flex flex-col gap-2">
                                    <div className=''>
                                        <p className='font-poppins text-sm tracking-wide font-bold'>Programs Offered by University</p>
                                    </div>
                                    <div className=''>
                                        <div role="group" className="w-full grid grid-cols-3">
                                            <div className='w-full flex gap-2 items-center'>
                                                <Field type="radio" name="programOffered" value="Bachelor" className='font-poppins text-sm' />
                                                <p className=''>Bachelor</p>
                                            </div>
                                            <div className='w-full flex gap-2 items-center' >
                                                <Field type="radio" name="programOffered" value="Masters" className='font-poppins text-sm' />
                                                <p className=''>Masters</p>
                                            </div>
                                            <div className='w-full flex gap-2 items-center' >
                                                <Field type="radio" name="programOffered" value="Diploma" className='font-poppins text-sm' />
                                                <p className=''>Diploma</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className='w-full grid grid-cols-2  gap-3'>
                                    {/* Living and accomodation */}
                                    <div className="flex flex-col gap-2">
                                        <label className="font-poppins text-sm tracking-wide">Living & Accomendation:</label>
                                        <Field
                                            type="text"
                                            required
                                            name="livingAndAccomendation"
                                            placeholder="Enter expenses here"
                                            className='p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                        />
                                    </div>
                                    {/* Established */}
                                    <div className="flex flex-col gap-2">
                                        <label className="font-poppins text-sm tracking-wide">Estd</label>
                                        <Field
                                            type="date"
                                            required
                                            name="enrolledDate"
                                            placeholder="$2000"
                                            className='p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                        />
                                    </div>
                                </div>
                                {/* University Image */}
                                <div className=' grid grid-cols-2 gap-3'>
                                    <div className='w-full flex flex-col gap-2'>
                                        <p className='w-full font-poppins text-sm'>Logo</p>
                                        <input type="file"
                                            name="profile" onChange={(e) => {
                                                setFieldValue("profile", e.target.files[0]);
                                            }}
                                            value={undefined}
                                            className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px] bg-white' />
                                    </div>
                                    <div className='w-full flex flex-col gap-2'>
                                        <p className='w-full font-poppins text-sm'>Background</p>
                                        <input type="file"
                                            name="profile" onChange={(e) => {
                                                setFieldValue("background", e.target.files[0]);
                                            }}
                                            value={undefined}
                                            className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px] bg-white' />
                                    </div>
                                </div>
                                {/*Ask any question */}
                                <div className="flex flex-col gap-2">
                                    <label className="font-poppins text-sm tracking-wide">Ask any Questions</label>
                                    <Field
                                        type="text"
                                        required
                                        name="askAnyQuestions"
                                        placeholder="Ask any Questions"
                                        className='p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                    />
                                </div>
                                {/*Description*/}
                                <div className="flex flex-col gap-2">
                                    <label className="font-poppins text-sm tracking-wide">University Description</label>
                                    <Field
                                        type="text"
                                        required
                                        name="descriptionAboutUniversity"
                                        placeholder="Enter description here"
                                        className='p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray'
                                    />
                                </div>
                            </div>
                            <div className=''>
                                <Field className='w-32 font-poppins text-sm p-2 bg-primary-blue hover:bg-primary-lightblue rounded-md text-white tracking-wide' type="submit" id="outlined-required" value="Update" />
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
    );
}

export default AddUniversity