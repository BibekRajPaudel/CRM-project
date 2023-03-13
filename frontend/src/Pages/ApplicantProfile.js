import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Components/SidebarComponent/Sidebar'
import Topbar from '../Components/TopbarComponent/Topbar'
import user from '../Assets/Images/user.png'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import ProfileTab from '../Components/TabgroupComponent/ProfileTab'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../CSS/Sidebar.css'
import { AuthContext } from '../Helper/AuthContext'
import PersonalDocument from '../Components/TabgroupComponent/Document/DocumentUploadForm/PersonalDocument'
import FinancialDocument from '../Components/TabgroupComponent/Document/DocumentUploadForm/FinancialDocument'
import AcademicDocument from '../Components/TabgroupComponent/Document/DocumentUploadForm/AcademicDocument'
import StatusBar from '../Components/LeadComponent/StatusBar/StatusBar'
import AddTask from '../Components/LeadComponent/FormComponent/AddTask'
import AddCounselorForm from '../Components/LeadComponent/FormComponent/AddCounselorForm'
import PersonalDetailsForm from '../Components/FormComponent/EditForm/Applicants/PersonalDetailsForm'
import AddEnglishTest from '../Components/LeadComponent/FormComponent/AddEnglishTest'
import EnglishTestForm from '../Components/FormComponent/EditForm/Applicants/EnglishTestForm'
import AcademicDetailsForm from '../Components/FormComponent/EditForm/Applicants/AcademicDetailsForm'
import AddPayment from '../Components/LeadComponent/FormComponent/AddPayment'
import EditPaymentDetails from '../Components/FormComponent/EditForm/Applicants/EditPaymentDetails'
import EditPaymentReceipt from '../Components/FormComponent/EditForm/Applicants/EditPaymentReceipt'

const ApplicantProfile = () => {

    const [studentDetails, setStudentDetails] = useState();
    const [academicDocumentID, setAcademicDocumentID] = useState()
    const [englishTestID, setEnglishTestID] = useState()
    const [paymentID, setPaymentID] = useState()
    const { addPersonalDocument, setAddPersonalDocument, addAcademicDocument, addFinancialDocument, addCounselor, addEnglishTest, editEnglishTest, editPersonalDetails, editAcademicDetails, addPayment, editPaymentDetails, editPaymentReceipt,
        setAddAcademicDocument, setAddFinancialDocument, addTask, setAddTask, setAddCounselor, setEditPersonalDetails, setEditAcademicDetails, setAddEnglishTest, setEditEnglishTest, setAddPayment, setEditPaymentReceipt, setEditPaymentDetails } = useContext(AuthContext);
    const { id } = useParams()
    // Storing lead ID

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/leadFormData/${id}`).then((res) => {
            setStudentDetails(res.data);
        })
    }, [])

    // Fuction to store academic detail object id
    const storeObjectID = (id) => {
        setAcademicDocumentID(id)
    }
    // Fuction to store academic detail object id
    const storeEnglishObjectID = (id) => {
        setEnglishTestID(id)
    }
    // Fuction to store academic detail object id
    const storePaymentObjectID = (id) => {
        setPaymentID(id)
    }
    return (
        <>
            <Topbar />
            <div className='flex gap-3'>
                <div>
                    <Sidebar />
                </div>
                <div id="maincontainer" className='w-full pr-5 pt-5 pb-5  h-[90vh] overflow-y-auto'>
                    <div className='w-full h-[15vh] p-2 flex items-center justify-center'>
                        <div className='w-[80%]'>
                            <StatusBar studentDetails={studentDetails} />
                        </div>
                    </div>
                    {/* Info Container */}
                    <div className='w-full grid grid-cols-3'>
                        <div className='w-full flex flex-col gap-2 justify-center items-center p-7'>
                            {/* Image Container */}
                            <div className='rounded-full w-40 h-40'>
                                <img className={studentDetails && studentDetails.formData && studentDetails.formData.status == "New" ? 'w-40 h-40 border-4 border-[#96c0ff] rounded-full object-cover' : studentDetails && studentDetails.formData && studentDetails.formData.status == "In progress" ? 'w-40 h-40 border-4 border-[#96E3DF] rounded-full object-cover' : studentDetails && studentDetails.formData && studentDetails.formData.status == "Documentation" ? 'w-40 h-40 border-4 border-[#f6f797] rounded-full object-cover' : studentDetails && studentDetails.formData && studentDetails.formData.status == "Visa waiting" ? 'w-40 h-40 border-4 border-[#f8cfac] rounded-full object-cover' : 'w-40 h-40 border-4 border-[#e7aaaa] rounded-full object-cover'} src={user} alt="Applicant's Image" />
                            </div>
                            {/* Name container */}
                            <p className='font-poppins text-subHeading font-extrabold tracking-wide'>{studentDetails && studentDetails.formData && studentDetails.formData.firstName} {studentDetails && studentDetails.formData && studentDetails.formData.middleName} {studentDetails && studentDetails.formData && studentDetails.formData.lastName}</p>
                            <p className={studentDetails && studentDetails.formData && studentDetails.formData.status == "New" ? 'w-20 text-center font-poppins text-sm p-1 border-2 border-[#96c0ff] rounded-md' : studentDetails && studentDetails.formData && studentDetails.formData.status == "In progress" ? 'w-32 text-center font-poppins text-sm p-1 border-2 border-[#96E3DF] rounded-md' : studentDetails && studentDetails.formData && studentDetails.formData.status == "Documentation" ? 'w-36 text-center font-poppins text-sm p-1 border-2 border-[#f6f797] rounded-md' : studentDetails && studentDetails.formData && studentDetails.formData.status == "Visa waiting" ? 'w-32 text-center font-poppins text-sm p-1 border-2 border-[#f8cfac] rounded-md' : 'w-32 text-center font-poppins text-sm p-1 border-2 border-[#e7aaaa] rounded-md'}>{studentDetails && studentDetails.formData && studentDetails.formData.status}</p>
                        </div>
                        {/*More Details */}
                        <div className='w-full flex flex-col gap-3 p-7'>
                            {/* Heading Container */}
                            <div className='rounded-full w-full flex items-center justify-between'>
                                <p className='font-poppins text-sm font-bold'>Personal Details :</p>
                            </div>
                            {/* Details container */}
                            <div className='flex flex-col gap-1'>
                                <p className='font-poppins text-subbody2 font-extralight tracking-wide'><span className='text-gray-500'>Joined Date : </span>{studentDetails && studentDetails.formData && studentDetails.formData.createdAt}</p>
                                <p className='font-poppins text-subbody2 font-extralight tracking-wide'><span className='text-gray-500'>Gender : </span>{studentDetails && studentDetails.formData && studentDetails.formData.gender}</p>
                                <p className='font-poppins text-subbody2 font-extralight tracking-wide'><span className='text-gray-500'>D.O.B : </span>{studentDetails && studentDetails.formData && studentDetails.formData.dateOfBirth}</p>
                                <p className='font-poppins text-subbody2 font-extralight tracking-wide'><span className='text-gray-500'>Interested Country : </span>{studentDetails && studentDetails.formData && studentDetails.formData.interestedCountry}</p>
                                <p className='font-poppins text-subbody2 font-extralight tracking-wide'><span className='text-gray-500'>Applied Degree : </span>{studentDetails && studentDetails.formData && studentDetails.formData.chooseTheDegree}</p>
                                <p className='font-poppins text-subbody2 font-extralight tracking-wide'><span className='text-gray-500'>Interested Course : </span>{studentDetails && studentDetails.formData && studentDetails.formData.chooseTheCourse}</p>
                                <p className='font-poppins text-subbody2 font-extralight tracking-wide'><span className='text-gray-500'>Interested University : </span>{studentDetails && studentDetails.formData && studentDetails.formData.interestedUniversity}</p>
                            </div>
                        </div>
                        {/*Contact Details */}
                        <div className='w-full flex flex-col gap-3 p-7'>
                            {/* Heading Container */}
                            <div className='rounded-full w-full flex items-center justify-end'>
                                <button onClick={() => setEditPersonalDetails(true)} className='w-20 bg-[#6BA6FF] text-white rounded-md hover:text-[#6ba6ff] hover:bg-white border-[1px] hover:border-[#6ba6ff] transition ease-in-out duration-200 font-poppins text-sm p-1'>Edit</button>
                            </div>
                            {/* Details container */}
                            <div className='flex flex-col gap-1'>
                                <p className='font-poppins text-subbody2 font-extralight tracking-wide'><span className='text-gray-500'>Referal : </span>{studentDetails && studentDetails.formData && studentDetails.formData.Referal}</p>
                                <p className='font-poppins text-subbody2 font-extralight tracking-wide flex items-center'><span className='w-fit text-primary-blue'><AiOutlineMail /></span>&nbsp;: {studentDetails && studentDetails.formData && studentDetails.formData.email}</p>
                                <p className='font-poppins text-subbody2 font-extralight tracking-wide flex items-center'><span className='w-fit text-primary-blue'><AiOutlinePhone /></span>&nbsp;: +977 {studentDetails && studentDetails.formData && studentDetails.formData.contactNumber}</p>
                                <p className='font-poppins text-subbody2 font-extralight tracking-wide flex items-center'><span className='w-fit text-primary-blue'><GoLocation /></span>&nbsp;: {studentDetails && studentDetails.formData && studentDetails.formData.permanentAddress}</p>
                            </div>
                        </div>
                    </div>
                    {/* Tabgroup */}
                    <ProfileTab storeObjectID={storeObjectID} storeEnglishObjectID={storeEnglishObjectID} storePaymentObjectID={storePaymentObjectID} />
                </div>
            </div>
            {/* Add personal Document Modal */}
            {
                addPersonalDocument &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Add Personal Document</h1>
                            <p onClick={() => setAddPersonalDocument(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <PersonalDocument />
                        </div>
                    </div>
                </div>
            }
            {/* Add Academic Document Modal */}
            {
                addAcademicDocument &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Add Academic Document</h1>
                            <p onClick={() => setAddAcademicDocument(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <AcademicDocument setAddAcademicDocument={setAddAcademicDocument} academicDocumentID={academicDocumentID} />
                        </div>
                    </div>
                </div>
            }
            {/* Edit Academic Details Modal */}
            {
                editAcademicDetails &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Edit Academic Document</h1>
                            <p onClick={() => setEditAcademicDetails(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <AcademicDetailsForm setEditAcademicDetails={setEditAcademicDetails} academicDocumentID={academicDocumentID} />
                        </div>
                    </div>
                </div>
            }
            {/* Add financial Document Modal */}
            {
                addFinancialDocument &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Add Financial Document</h1>
                            <p onClick={() => setAddFinancialDocument(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <FinancialDocument />
                        </div>
                    </div>
                </div>
            }
            {/* Add Task Document Modal */}
            {
                addTask &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Add Task</h1>
                            <p onClick={() => setAddTask(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <AddTask />
                        </div>
                    </div>
                </div>
            }
            {/* Add Task Document Modal */}
            {
                addCounselor &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Add Counselor</h1>
                            <p onClick={() => setAddCounselor(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <AddCounselorForm />
                        </div>
                    </div>
                </div>
            }
            {/* Edit Personal Details Modal */}
            {
                editPersonalDetails &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Edit Personal Details</h1>
                            <p onClick={() => setEditPersonalDetails(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <PersonalDetailsForm />
                        </div>
                    </div>
                </div>
            }
            {/* Add English Test Modal  */}
            {
                addEnglishTest &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Add English Test</h1>
                            <p onClick={() => setAddEnglishTest(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <AddEnglishTest />
                        </div>
                    </div>
                </div>
            }
            {/* Edit English Test Modal  */}
            {
                editEnglishTest &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Edit Test Detail</h1>
                            <p onClick={() => setEditEnglishTest(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <EnglishTestForm setEditEnglishTest={setEditEnglishTest} englishTestID={englishTestID} />
                        </div>
                    </div>
                </div>
            }
            {/* Add payment Modal  */}
            {
                addPayment &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Add Payment</h1>
                            <p onClick={() => setAddPayment(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <AddPayment />
                        </div>
                    </div>
                </div>
            }
            {
                editPaymentDetails &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Update Payment Details</h1>
                            <p onClick={() => setEditPaymentDetails(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <EditPaymentDetails setEditPaymentDetails={setEditPaymentDetails} paymentID={paymentID} />
                        </div>
                    </div>
                </div>
            }
            {
                editPaymentReceipt &&
                <div className='bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center'>
                    {/* Form container */}
                    <div className='w-[800px] opacity-100 bg-white p-10 rounded-md'>
                        {/* Form heading */}
                        <div className='w-full flex items-center justify-between sticky'>
                            <h1 className='text-base font-poppins font-bold text-gray-600 tracking-wide'>Update Payment Details</h1>
                            <p onClick={() => setEditPaymentReceipt(false)} className='text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md'>Close</p>
                        </div>
                        <div id="sidebarDropdown" className='w-full max-h-[70vh] mt-5 overflow-y-auto'>
                            <EditPaymentReceipt setEditPaymentReceipt={setEditPaymentReceipt} paymentID={paymentID} />
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default ApplicantProfile