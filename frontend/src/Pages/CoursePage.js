import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Button } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import data from "../MaterialUICustomTheme/ApplicantTable";
import Topbar from "../Components/TopbarComponent/Topbar";
import CourseItem from "../Components/CourseListSection/CourseItem";
import Sidebar from "../Components/SidebarComponent/Sidebar";
import axios from "axios";

const CoursePage = () => {
    const [rowsPerPage, setRowsPerPage] = useState(20);
    const [page, setPage] = useState(0);
    const [course, setCourses] = useState([]);
    // pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };
    //adding university
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/getCourses").then((res) => {
            console.log("Hello", res.data);
            setCourses(res.data);
        });
    }, []);
    return (
        <>
            <Topbar />
            <div className="flex gap-3">
                <Sidebar />
                <div id="maincontainer" className="w-full pr-5 pt-5 pb-5 h-[90vh] overflow-y-auto">
                    {/* topSection */}
                    <div className="course  h-[40px] items-center">
                        <h1 className="font-Poppins font-normal text-2xl text-orange-500">
                            1,325{" "}
                            <span className="text-black text-base font-Poppins text-wider tracking-wider">
                                Courses
                            </span>
                        </h1>
                    </div>
                    {/*owerTop section */}
                    <div className="toplowsection">
                        <div className="flex flex-row gap-2 pl-1 w-full h-[50px] items-center">
                            <label className="w-[155px] h-[24px] font-Poppins text-base items-center leading-8 ">
                                Search by Course:
                            </label>
                            <div className="w-[280px] h-[35px] pt-[2px]">
                                <div className="w-full">
                                    <form className="w-full">
                                        <div className="w-full flex items-center h-full">
                                            <input
                                                className="w-full h-[35px] p-2 bg-blue-50 rounded-l-lg outline-none text-sm font-poppins"
                                                type="text"
                                                placeholder="IT & Software"
                                            />
                                            <p className="bg-blue-50 h-[35px] p-2 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center ">
                                                <BiSearch />
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/*button section */}
                            <Button variant="contained" disabled className='w-[110px] h-[35px]  relative text-black'>
                                Engineering
                            </Button>
                            <Button variant="contained" disabled className='w-[150px] h-[35px] relative text-black'>
                                IT & Software
                            </Button>
                            <Button variant="contained" disabled className='w-[175px] h-[35px] relative text-black'>
                                Medical & Health
                            </Button>
                            <Button variant="contained" disabled className='w-[140px] h-[35px] relative text-black'>
                                <div className="">More filters</div>
                            </Button>
                        </div>


                    </div>
                    {/*owerTop section */}
                    <div className="toplowsection">
                        <div className="flex flex-row gap-2 pl-1 w-full h-[50px] items-center">
                            <label className="w-[155px] h-[24px] font-Poppins text-base items-center leading-8 ">
                                Search by Country:
                            </label>
                            <div className="w-[280px] h-[35px] pt-[2px]">
                                <div className="w-full">
                                    <form className="w-full">
                                        <div className="w-full flex items-center h-full">
                                            <input
                                                className="w-full h-[35px] p-2 bg-blue-50 rounded-l-lg outline-none text-sm font-poppins"
                                                type="text"
                                                placeholder="IT & Software"
                                            />
                                            <p className="bg-blue-50 h-[35px] p-2 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center ">
                                                <BiSearch />
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/*button section */}
                            <Button variant="contained" disabled className='w-[110px] h-[35px]  relative text-black'>
                                US
                            </Button>
                            <Button variant="contained" disabled className='w-[150px] h-[35px] relative text-black'>
                                Canada
                            </Button>
                            <Button variant="contained" disabled className='w-[175px] h-[35px] relative text-black'>
                                Australia
                            </Button>
                            <Button variant="contained" disabled className='w-[140px] h-[35px] relative text-black'>
                                <div className="">More filters</div>
                            </Button>
                        </div>


                    </div>
                    {/*owerTop section */}
                    <div className="">
                        <div className="flex flex-row gap-2 pl-1 w-full h-[50px] items-center">
                            <label className="w-[170px] h-[24px] font-Poppins text-base items-center leading-8">
                                Search by Course Level:
                            </label>
                            <div className="w-[280px] h-[35px] pt-[2px]">
                                <div className="w-full">
                                    <form className="w-full">
                                        <div className="w-full flex items-center h-full">
                                            <input
                                                className="w-full h-[35px] p-2 bg-blue-50 rounded-l-lg outline-none text-sm font-poppins"
                                                type="text"
                                                placeholder="IT & Software"
                                            />
                                            <p className="bg-blue-50 h-[35px] p-2 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center ">
                                                <BiSearch />
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/*button section */}
                            <Button variant="contained" className='w-[90px] h-[35px]  relative text-black'>
                                PG
                            </Button>
                            <Button variant="contained" className='w-[90px] h-[35px] relative text-black'>
                                UG
                            </Button>
                            <Button variant="contained" className='w-[100px] h-[35px] relative text-black'>
                                Diploma
                            </Button>
                            <Button variant="contained" className='w-[140px] h-[35px] relative text-black'>
                                <div className="">More filters</div>
                            </Button>
                        </div>


                    </div>


                    {/* Search by the Country */}
                    <div className="w-full mt-5 bg-white shadow">
                        {/* Applicant Table */}
                        <div className="w-full">
                            <div className="flex items-center justify-between">
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
                                <TablePagination
                                    rowsPerPageOptions={[20, 25, 100]}
                                    component="div"
                                    count={course && course.getAllCourses && course.getAllCourses.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </div>
                            {/* Applicant view */}
                            <div className="w-full ">
                                <CourseItem rowsPerPage={rowsPerPage} page={page} course={course} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default CoursePage