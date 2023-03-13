import React, { useContext, useState } from 'react'
import Sidebar from '../Components/SidebarComponent/Sidebar'
import Topbar from '../Components/TopbarComponent/Topbar'
import TotalStudent from '../Components/TotalStudentComponent/TotalStudent'
import { FormControlLabel, FormGroup, Tooltip } from '@mui/material'
import MaterialUISwitch from '../MaterialUICustomTheme/ViewSwitch'
import Addleadmodal from '../Components/LeadComponent/Addleadmodal'
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import data from '../MaterialUICustomTheme/ApplicantTable'
import Search from '../Components/SearchComponent/Search'
import '../CSS/Applicant.css'
import Listview from '../Components/ViewComponent/Listview'
import GridView from '../Components/ViewComponent/GridView'
import { MdFilterList } from 'react-icons/md'
import { AuthContext } from '../Helper/AuthContext'
import "../CSS/University.css";

const Applicants = () => {
    const [leedModal, setLeadmodal] = useState(false);
    const [filterDropdown, setFilterDropdown] = useState(false);
    const [page, setPage] = useState(0);
    const [applicantView, setApplicantView] = useState(false)
    const [rowsPerPage, setRowsPerPage] = useState(20);

    const { leadData } = useContext(AuthContext)


    // pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <Topbar />
            <div className='flex gap-3'>
                <div>
                    <Sidebar />
                </div>
                {/* Main container */}
                <div id="maincontainer" className='w-full pr-5 pt-5 pb-5 h-[90vh] overflow-y-auto'>
                    <p className='font-poppins tracking-wide text-base font-bold text-primary-black'>Applicants</p>
                    {/* Total Students */}
                    {/* <TotalStudent /> */}
                    {/* Filter and other navbar */}
                    <div className='w-full grid grid-cols-[800px_300px_auto] grid-rows-1 mt-3'>
                        {/* Fliters */}
                        <div className='w-full flex items-center gap-2 relative'>
                            <p className='bg-white w-10 border-[1px] border-primary-gray p-1 text-gray-500 hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>All</p>
                            <p className='bg-white w-24 border-[1px] border-primary-gray p-1 text-gray-500  hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>Country</p>
                            <p className='bg-white w-24 border-[1px] border-primary-gray p-1 text-gray-500  hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>Course</p>
                            <p className='bg-white w-32 border-[1px] border-primary-gray p-1 text-gray-500  hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>Post graduate</p>
                            <p className='bg-white w-32 border-[1px] border-primary-gray p-1 text-gray-500  hover:text-primary-blue hover:border-primary-blue rounded font-poppins text-sm text-center transition ease-in-out duration-200 cursor-pointer'>Under graduate</p>
                            <Tooltip title="More filter options" placement='top' arrow >
                                <p onClick={() => setFilterDropdown(() => !filterDropdown)} className='bg-primary-blue w-fit border-[1px] border-primary-gray p-1 text-white  hover:text-white hover:bg-primary-blue hover:border-primary-blue rounded font-poppins text-lg text-center transition ease-in-out cursor-pointer flex items-center gap-2 duration-300'><span className={filterDropdown ? 'transition ease-in-out duration-300 transform scale-y-[-1]' : 'transition ease-in-out duration-300 transform scale-y-[1]'}><MdFilterList /></span></p>
                            </Tooltip>
                            {
                                filterDropdown &&
                                <div id="filter_dropdown" className='w-40 bg-[#e2e2e2] absolute top-3 right-[80px] z-20 text-primary-black shadow-sm border-[1px] border-gray-200 font-poppins text-sm flex flex-col'>
                                    <p className='cursor-pointer w-full p-2 h-full hover:text-white hover:bg-primary-lightblue transition ease-in-out duration-200'>Diploma</p>
                                    <p className='cursor-pointer w-full p-2 h-full hover:text-white hover:bg-primary-lightblue transition ease-in-out duration-200'>New</p>
                                    <p className='cursor-pointer w-full p-2 h-full hover:text-white hover:bg-primary-lightblue transition ease-in-out duration-200'>Follow up</p>
                                    <p className='cursor-pointer w-full p-2 h-full hover:text-white hover:bg-primary-lightblue transition ease-in-out duration-200'>Dependent</p>
                                    <p className='cursor-pointer w-full p-2 h-full hover:text-white hover:bg-primary-lightblue transition ease-in-out duration-200'>Processing</p>
                                    <p className='cursor-pointer w-full p-2 h-full hover:text-white hover:bg-primary-lightblue transition ease-in-out duration-200'>English test</p>
                                    <p className='cursor-pointer w-full p-2 h-full hover:text-white hover:bg-primary-lightblue transition ease-in-out duration-200'>Visa success</p>
                                    <p className='cursor-pointer w-full p-2 h-full hover:text-white hover:bg-primary-lightblue transition ease-in-out duration-200'>MBA</p>
                                    <p className='cursor-pointer w-full p-2 h-full hover:text-white hover:bg-primary-lightblue transition ease-in-out duration-200'>MS</p>
                                    <p className='cursor-pointer w-full p-2 h-full hover:text-white hover:bg-primary-lightblue transition ease-in-out duration-200'>BSc</p>
                                    <p className='cursor-pointer w-full p-2 h-full hover:text-white hover:bg-primary-lightblue transition ease-in-out duration-200'>BBA</p>
                                </div>}
                        </div>

                        <div className='flex gap-2 items-center'>
                            <p className='font-poppins text-subbody1 text-primary-black font-semibold tracking-wide'>{applicantView ? <p>Grid View</p> : <p>List View</p>}</p>
                            <div className='flex gap-1'>
                                <FormGroup className='font-poppins text-sm'>
                                    <FormControlLabel
                                        control={<MaterialUISwitch onClick={() => { setApplicantView(view => !view) }} sx={{ m: 1 }} />}
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <p onClick={() => setLeadmodal(true)} className='bg-primary-lightblue w-32 text-center hover:bg-white hover:border-[1px] hover:border-primary-lightblue hover:text-primary-lightblue cursor-pointer p-1 font-poppins text-sm rounded text-white'>Create Student</p>
                        </div>
                        {/* Leed modal */}
                        {
                            leedModal &&
                            <Addleadmodal setLeadmodal={setLeadmodal} />
                        }
                    </div>
                    {/* Applicant Table */}
                    <div className='w-full mt-5 bg-white rounded border-2 border-[#e7e7e7]'>
                        <div className='flex items-center justify-between p-3'>
                            <div className='w-fit'>
                                <Search />
                            </div>
                            {
                                applicantView ?
                                    null
                                    :
                                    < TablePagination
                                        rowsPerPageOptions={[20, 25, 100]}
                                        component="div"
                                        count={leadData && leadData.formData && leadData.formData.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />}

                        </div>
                        {/* Applicant view */}
                        {
                            applicantView ?
                                // Grid View
                                <><GridView /></>
                                :

                                <>
                                    <Listview rowsPerPage={rowsPerPage} page={page} />
                                </>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Applicants