import React from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ClassForm = () => {
  const CourseFormList = (formData) => {
    axios.post("http://localhost:3000/api/v1/class", formData).then((res) => {
      toast.success("Course added");
      setTimeout(() => {
        window.location.href = "/classProgram"
      }, 2000)
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <>
      {/* Formik */}
      <Formik
        initialValues={{
          studentName: "",
          chooseClass: "",
          selectTeacher: "",
          startTime: "",
          endTime: "",
          startDate: "",
          endDate: "",
          createdAt: "",
        }}
        onSubmit={CourseFormList}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="shadow-xl rounded flex flex-col gap-3 pr-5">
              {/*  name Name */}
              <div className="w-full flex flex-col gap-2">
                <label className="text-sm font-poppins">Student's Name</label>
                <Field
                  required
                  name="studentName"
                  placeholder="Enter student's name here"
                  className="p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                />
              </div>
              {/* Course name Name */}
              <div className="w-full flex flex-col gap-2">
                <label className="text-sm font-poppins">Choose Class</label>
                <Field
                  required
                  name="chooseClass"
                  placeholder="Enter class here"
                  className="p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                />
              </div>

              {/* University name Name */}
              <div className="w-full flex flex-col gap-2">
                <label className="text-sm font-poppins">Select Teacher</label>
                <Field
                  required
                  name="selectTeacher"
                  placeholder="Enter teacher's name here"
                  className="p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                />
              </div>
              <div clssName="flex">
                <div className="w-full grid grid-cols-2 gap-2">
                  {/*Program. */}
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-sm font-poppins">Start Time</label>
                    <Field
                      required
                      name="startTime"
                      placeholder="Example - 9:00 A.M"
                      className="p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray" />
                  </div>
                  {/* Location */}
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-sm font-poppins">End Time</label>
                    <Field
                      required
                      name="endTime"
                      placeholder="Example - 9:00 A.M"
                      className="p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray" />
                  </div>
                </div>

                {/*  University Type */}
                <div className="w-full">
                  <label className="text-sm font-poppins">Class Period</label>
                </div>
                <div className="w-full grid grid-cols-3 gap-2">
                  <div className="w-full">
                    <Field
                      required
                      name="classPeriod"
                      placeholder="Class Period"
                      className="
                 w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                    />
                  </div>
                </div>
              </div>

              {/*  University Type */}
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-poppins">Start Date</label>
                  <Field
                    required
                    id="date"
                    type="date"
                    name="startDate"
                    className="w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-poppins"> End Date</label>
                  <Field
                    required
                    id="date"
                    type="date"
                    name="endDate"
                    placeholder="Course Period"
                    className="w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                  />
                </div>
              </div>

              <div className="w-fit">
                <Field
                  className="w-32 font-poppins text-sm p-2 bg-primary-blue hover:bg-primary-lightblue rounded-md text-white tracking-wide"
                  type="submit"
                  id="outlined-required"
                  value="Add program"
                />
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
};

export default ClassForm;
