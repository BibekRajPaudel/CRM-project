import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { AiFillMinusCircle } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const PersonalDetailsForm = () => {

    const [personaldetail, setPersonalDetail] = useState()
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/leadFormData/${id}`).then((res) => {
            console.log("Hello", res.data.formData)
            setPersonalDetail(res.data.formData);

        })
    }, [])

    const updatePersonalDetail = (values) => {
        axios.put(`http://localhost:3000/api/v1/editLeadForm/${id}`, values).then((res) => {
            toast.success("Personal details updated");
            setTimeout(() => {
                window.location.reload(true);
            }, 2000)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
            <div className='w-full'>
                <Formik
                    enableReinitialize
                    initialValues={personaldetail}
                    onSubmit={updatePersonalDetail}
                >

                    <Form className='w-full pr-2 flex flex-col gap-7'>
                        {/* Personal Details */}
                        <div className="w-full">
                            <p className='font-poppins text-heading'>Personal Details</p>
                        </div>

                        <div className="w-full grid grid-cols-3 gap-3">
                            {/* First Name */}
                            <div className='w-full flex flex-col gap-2'>
                                <label className='w-full font-poppins text-sm'>First Name</label>
                                <Field required name="firstName" placeholder='Your firstname here *' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                            </div>
                            {/* MIddle Name */}
                            <div className='w-full flex flex-col gap-2'>
                                <label className='w-full font-poppins text-sm'>Middle Name</label>
                                <Field name="middleName" placeholder='Your middlename here' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                            </div>
                            {/* Last Name */}
                            <div className='w-full flex flex-col gap-2'>
                                <label className='w-full font-poppins text-sm'>Last Name</label>
                                <Field name="lastName" placeholder='Your lastname here *' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                            </div>
                        </div>
                        {/*Address */}
                        <div className='w-full'>
                            <div className="w-full grid grid-cols-3 gap-3">
                                <div className='w-full flex flex-col gap-2'>
                                    <label className='w-full font-poppins text-sm'>Temporary Address</label>
                                    <Field name="temporaryAddress" placeholder='Temporary Address' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                </div>
                                {/* Permanent Address*/}
                                <div className='w-full flex flex-col gap-2'>
                                    <label className='w-full font-poppins text-sm'>Permanent Address</label>
                                    <Field name="permanentAddress" placeholder='Permanent Address' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                </div>
                                {/* date of birth */}
                                <div className="w-full flex flex-col gap-2">
                                    <label for="Date of birth" className="w-full font-poppins text-sm">Date of Birth</label>
                                    <Field type="date" id="date" name="dateOfBirth" className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]" />
                                </div>
                            </div>
                        </div>
                        {/* Gender and date of birth section */}
                        <div className="w-full">
                            <div className='w-full flex gap-2'>
                                <div className='w-fit'>
                                    <p className='w-fit flex font-poppins text-sm'>Gender : </p>
                                </div>
                                <div className='w-fit flex gap-2'>
                                    <div role="group" className="w-fit flex gap-5">
                                        <div>
                                            <div className='flex gap-1'>
                                                <Field type="radio" name="gender" value="male" className='' />
                                                <p className='w-full font-poppins text-sm'>Male</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex gap-1' >
                                                <Field type="radio" name="gender" value="female" className='' />
                                                <p className='w-full font-poppins text-sm'>Female</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex gap-1' >
                                                <Field type="radio" name="gender" value="Others" className='' />
                                                <p className='w-full font-poppins text-sm'>Others</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/*contact */}
                        <div className="w-full">
                            <div className="w-full grid grid-cols-2 gap-3">
                                <div className='flex flex-col gap-2'>
                                    <label className='w-full font-poppins text-sm'>Phone number</label>
                                    <Field id="outlined-required"
                                        name="contactNumber"
                                        placeholder='Your phone number here *' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='w-full font-poppins text-sm'>Email address</label>
                                    <Field id="outlined-required" name="email"
                                        placeholder='Your email address here' className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                </div>
                            </div>
                        </div>

                        {/*Interested country */}

                        <p className="w-full font-poppins text-heading">Planning</p>
                        <div className="w-full">
                            <div className="w-full grid grid-cols-2 gap-3">
                                <div className="w-full flex flex-col gap-2" >
                                    <p className="w-full font-poppins text-sm">Interested Country</p>
                                    <Field
                                        className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'
                                        id="outlined-select-gender"
                                        as="select"
                                        name="interestedCountry"
                                    >
                                        <option className='text-gray-400' value="None">--Select an option--</option>
                                        <option value="USA">USA</option>
                                        <option value="aus">Australia</option>
                                        <option value="can">Canada</option>
                                        <option value="uk">UK</option>
                                    </Field>
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <p className="w-full font-poppins text-sm">Interested University</p>
                                    <Field
                                        className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'
                                        id="outlined-select-gender"
                                        name="interestedUniversity"
                                        placeholder="Your interested university here *"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Choose a degree */}
                        <div className="w-full">
                            <div className="w-full grid grid-cols-2 gap-3">
                                <div className="w-full flex flex-col gap-2" >
                                    <p className="w-full font-poppins text-sm">Choose the Degree</p>
                                    <Field
                                        className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'
                                        id="outlined-select-degree"
                                        as="select"
                                        name="chooseTheDegree"
                                    >

                                        <option className='text-gray-400' value="None">--Select an option--</option>
                                        <option value="Diploma Level">Diploma Level </option>
                                        <option value="Bachelor Level">Bachelor Level</option>
                                        <option vallue="Post Graduate Level">Post Graduate Level</option>
                                        <option value="Master Level">Master Level</option>
                                    </Field>
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <p className="w-full font-poppins text-sm">Choose the Course</p>
                                    <Field
                                        className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'
                                        id="outlined-select-course"
                                        as="select"
                                        name="chooseTheCourse"
                                    >
                                        <option value="Nursing">Nursing</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Accounting">Accounting</option>
                                        <option value="SOcial work">SOcial work</option>
                                        <option value="Cookery">Cookery</option>
                                        <option value="it">IT</option>
                                    </Field>
                                </div>
                            </div>
                        </div>
                        {/* Applying section */}
                        <p className="font-poppins text-heading">Applying For</p>
                        <div role="group" className='w-full'>
                            <div className="w-full grid grid-cols-2 gap-3">
                                <div className='flex items-center gap-2'>
                                    <Field type="radio" name="applyingFor" value="Dependent" className='' />
                                    <p className='w-full font-poppins text-sm'>Dependent</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Field type="radio" name="applyingFor" value="Independent" className='' />
                                    <p className='w-full font-poppins text-sm'>Independent</p>
                                </div>
                            </div>
                        </div>
                        {/* Other detail*/}
                        <p className='font-poppins text-heading'>Other Detail</p>
                        {/* Referal */}
                        <div className="w-full flex flex-col gap-3">
                            <label className='font-poppins text-sm'>Referal</label>
                            <Field
                                className='w-[49%] p-3 rounded-md outline-primary-blue font-poppins text-xs  border-[1px]'
                                id="outlined-select-test"
                                as="select"
                                name="Referal"
                            >
                                <option value="None">None</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Friend">Friend</option>
                            </Field>
                        </div>
                        {/* Booking counsellor */}
                        <div className='w-full flex flex-col gap-3'>
                            <label className='font-poppins text-sm'> Book available Counsellor</label>
                            <Field type="date" id="date" name="bookAvailableCounseller" placeholder='Year' className='w-[49%] p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                        </div>
                        {/* Comment */}
                        <div className='w-full flex flex-col gap-3'>
                            <label className='font-poppins text-sm'>Comment</label>
                            <Field name="Comments" placeholder='Write more in brief' className='w-[49%] p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                        </div>
                        <div className=''>
                            <Field className='bg-primary-blue w-40 rounded-md p-3 font-poppins tracking-wide text-white' type="submit" id="outlined-required" value="Submit" />
                        </div>
                    </Form>
                </Formik>
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

export default PersonalDetailsForm