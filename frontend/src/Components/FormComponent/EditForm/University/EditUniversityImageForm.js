import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditUniversityImageForm = () => {

    const { id } = useParams()
    const univeristyFormList = (formData) => {
        axios
            .put(`http://localhost:3000/api/v1/uniPB/${id}`, formData)
            .then((res) => {
                console.log("Hello");
                setTimeout(() => {
                    window.location.reload(true);
                }, 2000)
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
                    profile: "",
                    background: "",
                }}
                onSubmit={(values) => {
                    let formData = new FormData();

                    formData.append("profile", values.profile);
                    formData.append("background", values.background);
                    univeristyFormList(formData);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form className='w-full flex flex-col gap-3'>
                        <div className="grid grid-cols-2 gap-5">

                            {/* logo section */}
                            <div className="items-center  relative">
                                <div className="w-full flex flex-col gap-2">
                                    <p className="w-full font-poppins text-sm">Profile</p>
                                    <input
                                        type="file"
                                        name="profile"
                                        onChange={(e) => {
                                            setFieldValue("profile", e.target.files[0]);
                                        }}
                                        value={undefined}
                                        className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px] bg-white"
                                    />
                                </div>
                            </div>
                            {/* imageSection */}
                            <div className="">
                                <div className="w-full flex flex-col gap-2">
                                    <p className="w-full font-poppins text-sm">Background</p>
                                    <input
                                        type="file"
                                        name="background"
                                        onChange={(e) => {
                                            setFieldValue("background", e.target.files[0]);
                                        }}
                                        value={undefined}
                                        className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px] bg-white"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <Field
                                className="w-32 font-poppins text-sm p-2 bg-primary-blue hover:bg-primary-lightblue rounded-md text-white tracking-wide"
                                type="submit"
                                id="outlined-required"
                                value="Update"
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default EditUniversityImageForm