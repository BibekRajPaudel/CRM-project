import React from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const UniversityCourseForm = () => {


  const { id } = useParams()
  const CourseFormList = (formData) => {
    console.log(formData)
    axios.post(`http://localhost:3000/api/v1/program/${id}`, formData).then((res) => {
      toast.success("Program added");
      setTimeout(() => {
        window.location.reload(true);
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
          courseName: '',
          program: '',
          level: '',
          tutionFeeFirst: '',
          tutionFeeSecond: '',
          tutionFeeThird: '',
          selectIntakes: '',
          coursePeriod: '',
          courseDescription: '',
        }}
        onSubmit={CourseFormList}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="shadow-xl rounded flex flex-col gap-3 pr-5">
              {/* Course name Name */}
              <div className="w-full flex flex-col gap-2">
                <label className="text-sm font-poppins">Course Name</label>
                <Field
                  required
                  name="courseName"
                  placeholder="Enter course name here"
                  className="p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                />
              </div>

              <div className="w-full grid grid-cols-2 gap-2">
                {/*Program. */}
                <div className="w-full flex flex-col gap-2">
                  <label className="text-sm font-poppins">Program</label>
                  <Field
                    required
                    name="program"
                    placeholder="Enter program here"
                    className="p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                  />
                </div>
                {/* Location */}
                <div className="w-full flex flex-col gap-2">
                  <label className="text-sm font-poppins">Level</label>
                  <Field
                    required
                    id="outlined-select-course"
                    as="select"
                    name="level"
                    className="w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                  >
                    <option className="text-gray-400" value="None">--- select level ---</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Masters">Masters</option>
                    <option value="Diploma">Diploma</option>
                  </Field>
                </div>
              </div>
              {/*  University Type */}
              <div className="w-full">
                <label className="text-sm font-poppins">Tuition Fee</label>
              </div>
              <div className="w-full grid grid-cols-3 gap-2">
                <div className="w-full">
                  <Field
                    required
                    name="tutionFeeFirst"
                    placeholder="First Year"
                    className="w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                  />
                </div>
                <div>
                  <Field
                    required
                    name="tutionFeeSecond"
                    placeholder="Second Year"
                    className="w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                  />
                </div>
                <div>
                  <Field
                    required
                    name="tutionFeeThird"
                    placeholder="Third Year"
                    className="w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                  />
                </div>
              </div>

              {/*  University Type */}
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-poppins">Select Intakes</label>
                  <Field
                    required
                    id="outlined-select-course"
                    as="select"
                    name="selectIntakes"
                    className="w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                  >
                    <option className="text-gray-400" value="None">--- select level ---</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul </option>
                    <option value="Aug">Aug </option>
                    <option value="Sept">Sept </option>
                    <option value="Oct">Oct </option>
                    <option value="Nov">Nov </option>
                    <option value="Dec">Dec </option>
                  </Field>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-poppins">Course Period</label>
                  <Field
                    required
                    name="coursePeriod"
                    placeholder="Enter course period here"
                    className="w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray"
                  />
                </div>
              </div>
              {/* Programs Offered by University: */}
              {/* Description*/}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-poppins">
                  Description about Course
                </label>
                <textarea
                  rows={5}
                  required
                  name="courseDescription"
                  placeholder="Enter course period here"
                  className="w-full p-2 rounded-md text-sm font-poppins tracking-wide border-[1px] border-primary-gray resize-none"
                />
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
    </>
  );
};
export default UniversityCourseForm;
