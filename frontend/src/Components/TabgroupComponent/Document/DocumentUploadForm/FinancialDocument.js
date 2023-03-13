import React from 'react'
import { Field, Form, Formik } from 'formik'

const FinancialDocument = () => {
    return (
        <>
            <Formik>
                <Form className='w-full flex flex-col gap-5'>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='w-full flex flex-col gap-2'>
                            <label className='font-poppins text-sm tracking-wide'>Citizenship</label>
                            <Field className='border-[1px] border-gray-300 p-2 rounded font-poppins text-sm tracking-wide' type='file' />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <label className='font-poppins text-sm tracking-wide'>Passport</label>
                            <Field className='border-[1px] border-gray-300 p-2 rounded font-poppins text-sm tracking-wide' type='file' />
                        </div>
                    </div>
                    <div className='w-fit flex flex-col gap-2'>
                        <Field className='w-36 bg-primary-blue hover:bg-primary-lightblue text-white  p-2 rounded font-poppins text-sm tracking-wide' type='submit' value="Add Documents" />
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default FinancialDocument