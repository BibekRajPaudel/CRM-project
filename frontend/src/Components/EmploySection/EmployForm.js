import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Field, Form, Formik } from "formik";
import axios from "axios";

const EmployForm = () => {
  

  const addStudentApplication = (formData) => {
    axios
      .post("http://localhost:3000/api/v1/employee", formData)
      .then((res) => {
        console.log("Helloooo");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* Main container */}
      <div className="w-full">
        <Formik
          initialValues={{
            firstName: "",
            middleName: "",
            lastName: "",
            temporaryAddress: "",
            permanentAddress: "",
            gender: "",
            dateOfBirth: "",
            contactNumber: "",
            email: "",
            role:"",
            image:""
       
          }}
          onSubmit={(values) => {
            let formData = new FormData();
            formData.append("firstName", values.firstName);
            formData.append("middleName", values.middleName);
            formData.append("lastName", values.lastName);
            formData.append("temporaryAddress", values.temporaryAddress);
            formData.append("permanentAddress", values.permanentAddress);
            formData.append("gender", values.gender);
            formData.append("dateOfBirth", values.dateOfBirth);
            formData.append("contactNumber", values.contactNumber);
            formData.append("email", values.email);
            formData.append("role", values.role);
            formData.append("image", values.image);
          addStudentApplication(formData);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="w-full pr-2 flex flex-col gap-3">
              {/* Personal Details */}
              <div className="w-full ">
                <p className="font-poppins text-heading ">Name:</p>
              </div>

              <div className="w-full grid grid-cols-3 gap-3">
                {/* FIrst Name */}
                <div className="w-full flex flex-col gap-2">
                  <label className="w-full font-poppins text-sm">
                    First Name
                  </label>
                  <Field
                    required
                    name="firstName"
                    placeholder="Your firstname here *"
                    className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]"
                  />
                </div>
                {/* MIddle Name */}
                <div className="w-full flex flex-col gap-2">
                  <label className="w-full font-poppins text-sm">
                    Middle Name
                  </label>
                  <Field
                    name="middleName"
                    placeholder="Your middlename here"
                    className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]"
                  />
                </div>
                {/* Last Name */}
                <div className="w-full flex flex-col gap-2">
                  <label className="w-full font-poppins text-sm">
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    placeholder="Your lastname here *"
                    className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]"
                  />
                </div>
              </div>
              {/*Address */}
              <div className="w-full">
                <p className="font-poppins text-heading"> Address:</p>
              </div>
              <div className="w-full">
                <div className="w-full grid grid-cols-3 gap-3">
                  <div className="w-full flex flex-col gap-2">
                    <label className="w-full font-poppins text-sm">
                      Temporary Address
                    </label>
                    <Field
                      name="temporaryAddress"
                      placeholder="Temporary Address"
                      className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]"
                    />
                  </div>
                  {/* Permanent Address*/}
                  <div className="w-full flex flex-col gap-2">
                    <label className="w-full font-poppins text-sm">
                      Permanent Address
                    </label>
                    <Field
                      name="permanentAddress"
                      placeholder="Permanent Address"
                      className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]"
                    />
                  </div>
                </div>
              </div>
              {/* Gender and date of birth section */}
              <div className="w-full">
                <div className="w-full flex gap-7">
                  <div className="w-fit">
                    <p className="w-fit flex font-poppins text-sm font-semibold">Gender : </p>
                  </div>
                  <div className="w-fit flex gap-2">
                    <div role="group" className="w-fit flex gap-5">
                      <div>
                        <div className="flex gap-1">
                          <Field
                            type="radio"
                            name="gender"
                            value="male"
                            className=""
                          />
                          <p className="w-full font-poppins text-sm">Male</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-1">
                          <Field
                            type="radio"
                            name="gender"
                            value="female"
                            className=""
                          />
                          <p className="w-full font-poppins text-sm">Female</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-1">
                          <Field
                            type="radio"
                            name="gender"
                            value="others"
                            className=""
                          />
                          <p className="w-full font-poppins text-sm">Others</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Details */}

              <div className="w-full grid grid-cols-3 gap-3">
                {/* FIrst Name */}
                <div className="w-full flex flex-col gap-2">
                  <label className="w-full font-poppins text-sm">
                    Date of Birth
                  </label>
                  <Field
                    required
                    type='date'
                    id='date'
                    name="dateOfBirth"
                    placeholder="Your firstname here *"
                    className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]"
                  />
                </div>
                {/* MIddle Name */}
                <div className="w-full flex flex-col gap-2">
                  <label className="w-full font-poppins text-sm">
                    Selected the roles
                  </label>
                  <Field
                    name="role"
                    placeholder="Your middlename here"
                    className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]"
                  />
                </div>
              </div>
              {/*contact */}
              <div className="w-full">
                <p className="font-poppins text-heading"> Contact:</p>
              </div>
              <div className="w-full">
                <div className="w-full grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="w-full font-poppins text-sm">
                      Phone number
                    </label>
                    <Field
                      id="outlined-required"
                      name="contactNumber"
                      placeholder="Your phone number here *"
                      className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="w-full font-poppins text-sm">
                      Email address
                    </label>
                    <Field
                      id="outlined-required"
                      name="email"
                      placeholder="Your email address here"
                      className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]"
                    />
                  </div>
                </div>
              </div>
              <div className=''>
              <div className='flex flex-col gap-2'>
                <p className='w-full font-poppins text-sm'>Upload image</p>
                <input className='w-full p-3 rounded-md outline-primary-blue font-poppins text-xs  '
                  name="image"
                  type="file"
                  onChange={(e) => {
                    setFieldValue("image", e.target.files[0])
                  }}
                />
              </div>
            </div>
              <div className="">
                <Field
                  className="bg-primary-blue w-40 rounded-md p-3 font-poppins tracking-wide text-white"
                  type="submit"
                  id="outlined-required"
                  value="Submit"
                />
              </div>
            </Form>
          )}
        </Formik>
     
      </div>
    </>
  );
};

export default EmployForm;
