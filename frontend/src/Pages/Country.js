import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import CountryForm from '../Components/FormComponent/AddForm/CountryForm/CountryForm'
import Sidebar from '../Components/SidebarComponent/Sidebar'
import Topbar from '../Components/TopbarComponent/Topbar'
import imageCountry from '../Assets/Images/Canada.png'
import "../CSS/University.css";
import axios from 'axios'
import { AiOutlineDelete } from 'react-icons/ai'
import { Tooltip } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FiEdit2 } from 'react-icons/fi'
import EditCountryDetails from '../Components/FormComponent/EditForm/Country/EditCountryDetails'

const Country = () => {

    const [addCountry, setAddCountry] = useState()
    const [toggleEdit, setToggleEdit] = useState(false)
    const [country, setCountry] = useState([])
    const [countryDetail, setCountryDetail] = useState()

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/getCountry').then((res) => {
            setCountry(res.data)
            console.log("hello from country", res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const deleteCountry = (id) => {
        axios.delete(`http://localhost:3000/api/v1/countryPage/${id}`).then((res) => {
            toast.success("Country Deleted");
            setTimeout(() => {
                window.location.reload(true)
            }, 2000)
        }).catch((err) => {
            console.log(err)
        })
    }

    const toggleModal = (id) => {
        axios.get(`http://localhost:3000/api/v1/countryPage/${id}`).then((res) => {
            setCountryDetail(res.data)
        }).catch((error) => {
            console.log(error)
        })
        setToggleEdit(true)
    }

    const totalCountry = country && country.countryPage && country.countryPage.length;

    return (
        <>
            <Topbar />
            <div className='flex gap-3'>
                <div>
                    <Sidebar />
                </div>
                <div id="maincontainer" className='w-full pr-5 pt-5 pb-5 h-[90vh] overflow-y-auto'>
                    <div className='w-full'>
                        <div className='w-[500px] h-[40px]'>
                            <div className='w-full'>
                                <form className='w-full'>
                                    <div className='w-full flex items-center h-full'>
                                        <input className='w-full h-[40px] p-3 bg-blue-50 rounded-l-lg outline-none text-sm font-poppins border-l-[1px] border-t-[1px] border-b-[1px]' type="text" placeholder="Search" />
                                        <p className='bg-blue-50 h-[40px] p-3 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center border-r-[1px] border-t-[1px] border-b-[1px]'><BiSearch /></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full h-fit items-center mt-4">
                        <h1 className=" text-[#ED8936]  font-poppins  font-normal text-2xl ">
                            {totalCountry}
                        </h1>
                        <p className="font-poppins text-sm leading-9 pt-2">Countries</p>
                    </div>
                    {/* Filter */}
                    {/* Filter and other navbar */}
                    <div className='w-full flex items-center justify-between mt-3'>
                        {/* Fliters */}
                        <div className='w-full flex items-center gap-2 relative'>
                            <p className='bg-white w-10 border-[1px] border-primary-gray p-1 text-gray-500 hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>All</p>
                            <p className='bg-white w-24 border-[1px] border-primary-gray p-1 text-gray-500  hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>Europe</p>
                            <p className='bg-white w-24 border-[1px] border-primary-gray p-1 text-gray-500  hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>Asia</p>
                            <p className='bg-white w-32 border-[1px] border-primary-gray p-1 text-gray-500  hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>Australia</p>
                            <p className='bg-white w-32 border-[1px] border-primary-gray p-1 text-gray-500  hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>South America</p>
                            <p className='bg-white w-32 border-[1px] border-primary-gray p-1 text-gray-500  hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>North America</p>
                            <p className='bg-white w-32 border-[1px] border-primary-gray p-1 text-gray-500  hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>Africa</p>
                        </div>


                        <div className='flex items-center'>
                            <p onClick={() => setAddCountry(true)} className='bg-primary-lightblue w-32 text-center hover:bg-white hover:border-[1px] hover:border-primary-lightblue hover:text-primary-lightblue cursor-pointer p-1 font-poppins text-sm rounded text-white'>Add Country</p>
                        </div>

                    </div>

                    {/* Country list */}
                    <div className='w-full mt-5 grid grid-cols-5 gap-5'>
                        {/* Country Card */}
                        {
                            country && country.countryPage && country.countryPage.map((item, index) => (
                                <div key={index} className='w-full h-[280px] border-[1px] flex flex-col bg-white shadow rounded'>
                                    <div className='w-full h-[18vh]'>
                                        <img className='w-full h-full rounded-t object-cover' src={`http://localhost:3000/${item.flag}`} />
                                    </div>
                                    <div className='w-full flex flex-col gap-2 p-2 border-t-[1px] relative'>
                                        <Tooltip title="Delete Country" placement='left'>
                                            <p onClick={() => deleteCountry(item._id)} className='text-white border-[1px] absolute right-3 text-sm p-2 rounded-full shadow bg-red-500 cursor-pointer'><AiOutlineDelete /></p>
                                        </Tooltip>
                                        <Tooltip title="Edit Country" placement='left'>
                                            <p onClick={() => toggleModal(item._id)} className='text-white border-[1px] absolute text-sm p-2 rounded-full shadow right-12 bg-green-500 cursor-pointer'><FiEdit2 /></p>
                                        </Tooltip>
                                        <p className='font-poppins text-base font-bold'>{item.countryName}</p>
                                        <p className='font-poppins text-sm text-secondary-orange flex items-center gap-1'>65 <span className='text-black'>{item.studentEnrolled}</span></p>
                                        <p className='font-poppins text-sm text-secondary-orange flex items-center gap-1'>65 <span className='text-black'>{item.universities}</span></p>
                                        <p className='font-poppins text-sm text-secondary-orange flex items-center gap-1'>65 <span className='text-black'>{item.processing}</span></p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Country modal */}
            {
                addCountry &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Add Country</h1>
                            <p onClick={() => setAddCountry(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <CountryForm />
                        </div>
                    </div>
                </div>
            }
            {/* Edit Modal */}
            {
                toggleEdit &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Add Country</h1>
                            <p onClick={() => setToggleEdit(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <EditCountryDetails />
                        </div>
                    </div>
                </div>

            }
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

export default Country