import React from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Test = () => {
  const CourseFormList = (formData) => {
    axios
      .post("http://localhost:3000/api/v1/test", formData)
      .then((res) => {
        toast.success("Course added");
        setTimeout(() => {
          window.location.href = "/classProgram"
        }, 2000)
        console.log("Hello");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {/* Main container */}
      <Formik
        initialValues={{
          name: "",
          chooseTest: "",
          chooseTestDate: "",
          startTime: "",
          endTime: "",
          classPeriod: "",
          chooseResultDate: "",
          description: "",
          createdAt: "",
        }}
        onSubmit={CourseFormList}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="shadow-xl rounded flex flex-col gap-3 pr-5">
              {/*  name Name */}
              <div className="w-full flex flex-col gap-2">
                <label className="text-sm font-poppins">Name</label>
                <Field
                  required
                  name="name"
                  placeholder="Enter the Name of student"
                  className="p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                />
              </div>

              {/* Course name Name */}
              <div className="w-full flex flex-col gap-2">
                <label className="text-sm font-poppins">Choose Test</label>
                <Field
                  required
                  id="outlined-select-course"
                  as="select"
                  name="chooseTest"
                  placeholder=""
                  className="p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                >
                  <option value="None">--Please select a test--</option>
                  <option value="IELTS">IELTS</option>
                  <option value="PTE">PTE</option>
                  <option value="GRE">GRE</option>
                  <option value="TOEFL">TOEFL </option>
                </Field>
              </div>

              <div clssName="flex">
                <div className="w-full grid grid-cols-2 gap-2">
                  {/*Program. */}
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-sm font-poppins">
                      Choose Test Date
                    </label>
                    <Field
                      type="date"
                      required
                      name="chooseTestDate"
                      placeholder="Egs:9:00 A.M."
                      className="
                 p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                    />
                  </div>
                  {/* Location */}
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-sm font-poppins">Start Time</label>
                    <Field
                      required
                      name="startTime"
                      placeholder="10:00 A.M."
                      className="
                 p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                    />
                  </div>
                </div>
              </div>
              <div className=" gap-2">
                <label className="text-sm font-poppins"> End Time</label>
                <Field
                  required
                  name="endTime"
                  className="w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                />
              </div>
              {/*  University Type */}
              <div className=" gap-2">
                <div className=" gap-2">
                  <label className="text-sm font-poppins">
                    {" "}
                    Choose Result Date
                  </label>
                  <Field
                    required
                    id="date"
                    type="date"
                    name="chooseResultDate"
                    className="w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                  />
                </div>
                <div className="gap-2">
                  <label className="text-sm font-poppins">
                    Add a Description
                  </label>
                  <Field
                    name="description"
                    required
                    placeholder="Describtion"
                    className="w-full  p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                  />
                </div>
              </div>

              <div className="w-fit">
                <Field
                  className="w-32 font-poppins text-sm p-2 bg-primary-blue hover:bg-primary-lightblue rounded-md text-white tracking-wide"
                  type="submit"
                  id="outlined-required"
                  value="Add Test"
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

export default Test;
