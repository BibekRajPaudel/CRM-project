import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Field, Form, Formik, FieldArray } from 'formik';
import axios from 'axios'
import { AiFillMinusCircle } from 'react-icons/ai'

const FormComponent = () => {

  const [test, setTest] = useState(false)

  const addStudentApplication = (values) => {
    console.log(values)
    axios.post("http://localhost:3000/api/v1/leadform", values).then((res) => {
      toast.success("New applicant added");
      setTimeout(() => {
        window.location.href = "/applicants"
      }, 2000)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      {/* Main container */}
      <div className='w-full'>
        <Formik
          initialValues={{
            firstName: '',
            middleName: '',
            lastName: '',
            temporaryAddress: '',
            permanentAddress: '',
            gender: '',
            dateOfBirth: '',
            contactNumber: '',
            email: '',
            // uploadCitizenship: '',
            // uploadPassword: '',
            academicDetails: [{
              Education: '',
              collegeName: '',
              joinedYear: '',
              passedYear: '',
              // uploadMarkSheet: '',
            }],
            interestedCountry: '',
            interestedUniversity: '',
            chooseTheDegree: '',
            chooseTheCourse: '',
            applyingFor: '',
            examBefore: '',
            englishTest: [{
              testType: '',
              givenExamDate: '',
              Reading: '',
              Writing: '',
              Speaking: '',
              Listening: '',
              overallScore: '',
            }],
            bookAvailableCounseller: '',
            Referal: '',
            Comments: '',
          }}
          onSubmit={addStudentApplication}
        >
          {({ values, setFieldValue }) => (
            <Form className='w-full pr-2 flex flex-col gap-7'>
              {/* Personal Details */}
              <div className="w-full">
                <p className='font-poppins text-heading'>Personal Details</p>
              </div>

              <div className="w-full grid grid-cols-3 gap-3">
                {/* FIrst Name */}
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
              {/* FIle section */}
              {/* <div className='w-full'>
                <div className="w-full grid grid-cols-2 gap-3">
                  <div className='flex flex-col gap-2'>
                    <p className='w-full font-poppins text-sm'>Upload Citizenship</p>
                    <input className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px] bg-white'
                      name="uploadCitizenship"
                      type="file"
                      onChange={(e) => {
                        setFieldValue("uploadCitizenship", e.target.files[0])
                      }}
                    />
                  </div>
                  <div className=''>
                    <div className='flex flex-col gap-2'>
                      <p className='w-full font-poppins text-sm'>Upload Passport</p>
                      <input className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px] bg-white'
                        name="uploadPassword"
                        type="file"
                        onChange={(e) => {
                          setFieldValue("uploadPassword", e.target.files[0])
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div> */}


              {/* Academic */}
              <p className='font-poppins text-heading'>Academic Details</p>
              <div className='w-full relative'>
                <FieldArray name="academicDetails">
                  {
                    (fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps
                      const { values } = form
                      const { academicDetails } = values

                      return (
                        <>
                          {
                            academicDetails.map((academic, index) => (
                              <>
                                <div className="w-full grid grid-cols-2 grid-rows-2 gap-3">
                                  <div className="flex flex-col gap-2">
                                    <label className='w-full font-poppins text-sm'>Education</label>
                                    <Field
                                      className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'
                                      id="outlined-select-education"
                                      as="select"
                                      name={`academicDetails.[${index}].Education`}
                                    // value={academic.Education}
                                    >
                                      <option value="None">Select your Education level</option>
                                      <option value="+2">+2 Level</option>
                                      <option value="Bachelor Level">Bachelor level</option>
                                      <option value="Master Level">Master level</option>
                                    </Field>

                                  </div>
                                  {/* College Section */}
                                  <div className="w-full flex flex-col gap-2">
                                    <label className='w-full font-poppins text-sm'>College Name</label>
                                    <Field className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'
                                      name={`academicDetails.[${index}].collegeName`} id="outlined-required"
                                      value={academic.collegeName}
                                      placeholder="Your college name here *"
                                    />
                                  </div>
                                  <div className='w-full flex flex-col gap-2'>
                                    <p className="w-full font-poppins text-sm">Joined Year:</p>
                                    <Field type="date" id="date" name={`academicDetails.[${index}].joinedYear`} className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'
                                      value={academic.joinedYear}
                                      placeholder="start Date"
                                    />
                                  </div>
                                  <div className="w-full flex flex-col gap-2">
                                    <p className="w-full font-poppins text-sm">Passed Year:</p>
                                    <Field type="date" id="date" name={`academicDetails.[${index}].passedYear`} className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]'
                                      value={academic.passedYear}
                                      placeholder="End Date"
                                    />
                                  </div>

                                </div>
                                <div className='w-full flex items-center gap-5 justify-end'>
                                  {
                                    index > 0 &&
                                    <button className='w-24 flex items-center gap-2 justify-center text-xs text-red-500 font-poppins hover:bg-red-100 p-2 rounded-md' onClick={() => remove(index)}><AiFillMinusCircle />Remove</button>
                                  }
                                  <p className='font-poppins text-xs text-primary-blue hover:bg-blue-100 transition-all ease-in-out cursor-pointer rounded-md p-2' onClick={() => push('')}>+ Add more academic details</p>
                                </div>
                              </>
                            ))
                          }
                        </>
                      )
                    }
                  }
                </FieldArray>

                {/* <div className=''>
                  <div className='w-full flex flex-col gap-2'>
                    <p className='w-full font-poppins text-sm'>Upoad Marksheet</p>
                    <input type="file"
                      name="uploadMarkSheet" onChange={(e) => {
                        setFieldValue("uploadMarkSheet", e.target.files[0]);
                      }}
                      value={undefined}
                      className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px] bg-white' />
                  </div>
                </div>
               */
                }
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
                      <option value="Australia">Australia</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">UK</option>
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
                      <option value="" className='text-gray-400'>None</option>
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
              {/* Test preparation */}
              <p className="font-poppins text-heading">English Test Details</p>
              <div className="">
                <div role="group" className="flex gap-3">
                  <p className="w-fit font-poppins text-sm font-semibold">Have you given any test preparation exam before?</p>
                  <div className='flex items-center gap-2'  >
                    <div className='w-fit' onClick={() => setTest(true)}><Field type="radio" name="examBefore" value="Yes" className='' /></div>
                    <p className='w-full font-poppins text-sm'>Yes</p>
                  </div>
                  <div className='flex items-center gap-2'  >
                    <div className='w-fit' onClick={() => setTest(false)}><Field type="radio" name="examBefore" value="No" className='' /></div>
                    <p className='w-full font-poppins text-sm'>No</p>
                  </div>
                </div>
              </div>

              {/* Test section */}
              {
                test &&
                <>
                  <FieldArray name="englishTest">
                    {
                      (fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps
                        const { values } = form
                        const { englishTest } = values

                        return (
                          <>
                            {
                              englishTest.map((englishtest, index) => (
                                <>
                                  < p className="" > Select the type of Test</p>
                                  <div className=''>
                                    <div className="flex flex-col gap-2">
                                      <div role="group" className="grid grid-cols-4">
                                        <div className='flex gap-2 items-center'>
                                          <Field type="radio" name={`englishTest.[${index}].testType`} value="IELTS" className='' />
                                          <p className='font-poppins text-sm'>IELTS</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                          <Field type="radio" name={`englishTest.[${index}].testType`} value="TOEFL" className='' />
                                          <p className='font-poppins text-sm'>TOFEL</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                          <Field type="radio" name={`englishTest.[${index}].testType`} value="GRE" className='' />
                                          <p className='font-poppins text-sm'>GRE</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                          <Field type="radio" name={`englishTest.[${index}].testType`} value="PTE" className='' />
                                          <p className='font-poppins text-sm'>PTE</p>
                                        </div>
                                      </div>
                                      <p className="font-poppins text-sm mt-2">Given Exam Date</p>
                                      <div className="w-full grid grid-cols-2 grid-rows-1 gap-3">
                                        <Field type="date" id="date" name={`englishTest.[${index}].givenExamDate`} value={englishTest.givenExamDate} className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]" />

                                      </div>
                                    </div>
                                  </div>
                                  {/* Score */}
                                  < div className="w-full grid" >
                                    <div className="w-full grid grid-cols-5 gap-3">
                                      <div className='w-full flex flex-col gap-2'>
                                        <label className="font-poppins text-sm">Reading</label>
                                        <Field
                                          type='number'
                                          name={`englishTest.[${index}].Reading`} value={englishTest.Reading} className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                      </div>
                                      <div className='w-full flex flex-col gap-2'>
                                        <label className='font-poppins text-sm'>Writing</label>
                                        <Field
                                          type='number'
                                          name={`englishTest.[${index}].Writing`} value={englishTest.Writing} className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                      </div>
                                      <div className='w-full flex flex-col gap-2'>
                                        <label className='font-poppins text-sm'>Speaking</label>
                                        <Field
                                          type='number'
                                          name={`englishTest.[${index}].Speaking`} value={englishTest.Speaking} className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                      </div>
                                      <div className='w-full flex flex-col gap-2'>
                                        <label className='font-poppins text-sm'>Listening</label>
                                        <Field id="outlined-required"
                                          type='number'
                                          name={`englishTest.[${index}].Listening`} value={englishTest.Listening} className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                      </div>
                                      <div className='w-full flex flex-col gap-2'>
                                        <label className="font-poppins text-sm" >Overall score</label>
                                        <Field id="outlined-required"
                                          type='number'
                                          name={`englishTest.[${index}].overallScore`} value={englishTest.overallScore} className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]' />
                                      </div>
                                    </div>
                                  </div>
                                  <div className='w-full flex items-center gap-5 justify-end'>
                                    {
                                      index > 0 &&
                                      <button className='w-24 flex items-center gap-2 justify-center text-xs text-red-500 font-poppins hover:bg-red-100 p-2 rounded-md' onClick={() => remove(index)}><AiFillMinusCircle />Remove</button>
                                    }
                                    <p className='font-poppins text-xs text-primary-blue hover:bg-blue-100 transition-all ease-in-out cursor-pointer rounded-md p-2' onClick={() => push('')}>+ Add more english test</p>
                                  </div>
                                </>
                              ))
                            }
                          </>
                        )
                      }
                    }
                  </FieldArray>
                </>
              }


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
          )}
        </Formik>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
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

export default FormComponent