import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const EditUniversityDetailsForm = () => {

  const [details, setDetails] = useState()
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/getUniById/${id}`).then((res) => {
      setDetails(res.data.findUni)
    })
  })

  const univeristyFormList = (formData) => {
    axios.put(`http://localhost:3000/api/v1/university/${id}`, formData).then((res) => {
      toast.success("University details updated");
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
        initialValues={details}
        onSubmit={(values) => { univeristyFormList(values) }}
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
  )
}

export default EditUniversityDetailsForm