import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/SidebarComponent/Sidebar'
import Topbar from '../Components/TopbarComponent/Topbar'
import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { Button } from "@mui/material";
import UniversityList from '../Components/UniveristyComponent/UniversityList';
import "../CSS/University.css";
import axios from 'axios';

const UniveristyPages = () => {
    const [university, setUniversity] = useState([]);
    //adding university
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/getUniversity").then((res) => {
            setUniversity(res.data);
        });
    }, []);

    const totalUniversity = university && university.findUni && university.findUni.length;

    return (
        <>
            <Topbar />
            <div className='flex gap-3'>
                <Sidebar />
                <div id="maincontainer" className="w-full pr-5 pt-5 pb-5 h-[90vh] overflow-y-auto">
                    <div className="">
                        {/* Top component */}
                        <div className="flex gap-2 w-[148px] h-[48px] top-[15px] left-[24px] items-center">
                            <h1 className=" text-[#ED8936]  font-poppins  font-normal text-2xl ">
                                {totalUniversity}
                            </h1>
                            <p className="font-poppins text-sm leading-9 pt-2">Universities</p>
                        </div>
                        {/* Search Section */}
                        <div className="">
                            {/* Search by the Course */}
                            <div className="flex gap-4  w-full items-center h-[60px] ">
                                <label className=" w-[200px] h-[35px]  ">Search by Course:</label>
                                <div className="">
                                    <div className="w-full">
                                        <form className="w-full">
                                            <div className="w-full flex items-center h-full">
                                                <input
                                                    className="w-[240px] h-[35px] p-2 bg-blue-50 rounded-l-lg outline-none text-sm font-poppins"
                                                    type="text"
                                                    placeholder="IT & Software"
                                                />
                                                <p className="bg-blue-50 h-[35px] p-2 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center">
                                                    <BiSearch />
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d] text-xs font-poppins w-[110px] h-[35px]"
                                >
                                    Engineering
                                </Button>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d]  text-xs font-poppins  w-[180px] h-[35px]"
                                >
                                    IT & Software
                                </Button>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d]  text-xs font-poppins  w-[200px] h-[35px]"
                                >
                                    Medical & Science
                                </Button>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d]  text-xs font-poppins  w-[160px] h-[35px]"
                                >
                                    <FiFilter />
                                    More filters
                                </Button>
                            </div>
                            {/* Search by the Country */}
                            <div className="flex gap-4  font-poppins w-full  h-[35px] items-center">
                                <label className="w-[160px] h-[24px] text-base font-poppins  ">
                                    Search by Country:
                                </label>
                                <div className="w-[280px] h-[35px]">
                                    <div className="w-full">
                                        <form className="w-full">
                                            <div className="w-full flex items-center h-full">
                                                <input
                                                    className="w-[240px] h-[35px] p-2 bg-blue-50 rounded-l-lg outline-none text-sm font-poppins"
                                                    type="text"
                                                    placeholder="IT & Software"
                                                />
                                                <p className="bg-blue-50 h-[35px] p-2 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center">
                                                    <BiSearch />
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d] font-poppins text-xs w-[50px] h-[35px]"
                                >
                                    US
                                </Button>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d]  font-poppins text-xs w-[50px] h-[35px]"
                                >
                                    UK
                                </Button>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d]  font-poppins text-xs w-[100px] h-[35px]"
                                >
                                    Canada
                                </Button>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d]  font-poppins text-xs w-[100px] h-[35px]"
                                >
                                    Australia
                                </Button>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d]  font-poppins text-xs w-[140px] h-[35px]"
                                >
                                    <FiFilter />
                                    More filters
                                </Button>
                            </div>
                            {/* Search by the Country */}
                            <div className="flex gap-4 items-center h-[60px] ">
                                <label className="font-poppins w-[170px] ">
                                    Search by Course Level:
                                </label>
                                <div className="w-[270px] h-[35px] ">
                                    <div className="w-full">
                                        <form className="w-full">
                                            <div className="w-full flex items-center h-full">
                                                <input
                                                    className="w-full h-[35px] p-2 bg-blue-50 rounded-l-lg outline-none text-sm font-poppins"
                                                    type="text"
                                                    placeholder="Undergraduate"
                                                />
                                                <p className="bg-blue-50 h-[35px] p-2 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center">
                                                    <BiSearch />
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d] text-xs  w-[110px] h-[35px] font-poppins font-light"
                                >
                                    Bachelor
                                </Button>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d] text-xs w-[110px] h-[35px]  font-poppins font-light"
                                >
                                    PG
                                </Button>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d] text-xs  w-[110px] h-[35px] font-poppins font-light"
                                >
                                    Master
                                </Button>
                                <Button
                                    variant="contained" disabled
                                    className="text-[#1d1d1d] text-xs  w-[100px] h-[35px] font-poppins font-light"
                                >
                                    Phd
                                </Button>
                            </div>
                        </div>
                        {/* Search by the University */}
                        <div className="flex flex-col gap-4 mt-5">
                            <div className="flex gap-3 items-center">
                                <p className="w-fit font-poppins text-sm font-bold tracking-wide"> Search : </p>
                                <div className="w-[300px] h-[35px]">
                                    <form className="w-full">
                                        <div className="w-full flex items-center h-full relative">
                                            <input
                                                className="w-full h-[35px] p-2 bg-white border-[1px] rounded-lg outline-none text-sm font-poppins"
                                                type="text"
                                                placeholder="Search By University"
                                            />
                                            <p className="bg-white z-20 right-1 text-xl absolute top-2 text-gray-400 flex justify-center items-center">
                                                <BiSearch />
                                            </p>
                                        </div>
                                    </form>
                                </div>

                            </div>

                            {/* Third table section */}
                            {/* university Table */}
                            <div className="w-full ">
                                <UniversityList university={university} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UniveristyPages