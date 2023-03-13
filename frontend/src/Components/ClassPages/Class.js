import React, { useState, useEffect } from "react";
import Sidebar from "../SidebarComponent/Sidebar";
import Topbar from "../TopbarComponent/Topbar";
import { Button } from "@mui/material";
import { TabGroup } from "@statikly/funk";
import { BiSearch } from "react-icons/bi";
import ClassPages from "./ClassPages";
import ClassTest from "./ClassTest";
import axios from "axios";
import TablePagination from "@mui/material/TablePagination";
import data from "../../MaterialUICustomTheme/ApplicantTable";
const Class = () => {
  const [classtest, setClassTest] = useState([]);
  const [applicantView, setApplicantView] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [page, setPage] = useState(0);
  // pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/class").then((res) => {
      setClassTest(res.data);
      console.log("Pwan", res.data);
    });
  }, []);
  return (
    <div className='w-full'>
      <div className='relative w-full'>
        <Topbar />
      </div>
      <div className="flex gap-1 h-full">
        <Sidebar  />
        <div>
          <div className="pt-5 font-Poppins tracking-wider text-wider ">
            <h1
              className="text-[#e28743]
              gap-1 flex w-[142px] h-[48px] top-[15px] left-[24px] items-center"
            >
              <p className="text-3xl">15</p>
              <span className="text-base pt-3 text-black">Classes/Test</span>
            </h1>
          </div>
          <div className="top section pt-2">
            {/* topSection */}
            {/*owerTop section */}
            <div className="toplowsection">
              <div className="flex flex-row gap-2 pl-1 w-full h-[50px] items-center">
                <label className="w-[155px] h-[24px] font-poppins text-base items-center leading-8 ">
                  Search:
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
                <Button
                  variant="contained"
                  disabled
                  className="w-[90px] h-[35px]  relative text-black font-poppins"
                >
                  IELTS(25)
                </Button>
                <Button
                  variant="contained"
                  disabled
                  className="w-[90px] h-[35px] relative text-black font-poppins"
                >
                  TOEFL(35)
                </Button>
                <Button
                  variant="contained"
                  disabled
                  className="w-[90px] h-[35px] relative text-black font-poppins"
                >
                  PTE(15)
                </Button>
                <Button
                  variant="contained"
                  disabled
                  className="w-[90px] h-[35px] relative text-black font-poppins"
                >
                  GRE(10)
                </Button>
                <Button
                  variant="contained"
                  disabled
                  className="w-[90px] h-[35px] relative text-black font-poppins"
                >
                  <div className="">SAT(50)</div>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[1100px] h-[780px]">
            <>
              <div className="w-full  flex gap-2 pb-3">
                <div className="w-full bg-white ">
                  <TabGroup
                    numTabs={2}
                    direction={TabGroup.direction.HORIZONTAL}
                  >
                    {/* Tab navigation */}
                    <div className="w-full grid grid-cols-7 bg-gray-100">
                      <TabGroup.Tab
                        index={0}
                        activeClassName="text-primary-blue border-b-4 border-primary-blue outline-none p-2 transition ease-in-out duration-300 font-semibold"
                        inactiveClassName=""
                      >
                        <p className="font-poppins text-subbody1 tracking-wide">
                          Class
                        </p>
                      </TabGroup.Tab>
                      <TabGroup.Tab
                        index={1}
                        activeClassName="text-primary-blue border-b-4 border-primary-blue outline-none p-2 transition ease-in-out duration-300 font-semibold"
                      >
                        <p className="font-poppins text-subbody1 tracking-wide">
                          Test
                        </p>
                      </TabGroup.Tab>
                    </div>
                    {/* Tab body */}
                    <div className="w-full h-full">
                      {/* Profile */}
                      <TabGroup.TabPanel
                        index={0}
                        className="w-full transition-all transform mt-5"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="hidden"
                      >
                        {/* Applicant Table */}
                        <div className="w-full ">
                          <div className="flex items-center justify-between float-right font-Poppins font-semibold">
                            {applicantView ? null : (
                              <TablePagination
                                rowsPerPageOptions={[20, 25, 100]}
                                component="div"
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                              />
                            )}
                          </div>
                          {/* Applicant view */}
                          <div className="">
                           
                                <ClassPages
                                  rowsPerPage={rowsPerPage}
                                  page={page}
                                />
                          </div>
                        </div>
                      </TabGroup.TabPanel>
                      {/* Counselor */}
                      <TabGroup.TabPanel
                        index={1}
                        className="w-full transition-all transform mt-5"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="hidden"
                      >
                        {/* Applicant Table */}
                        <div className="w-full ">
                          <div className="flex items-center justify-between float-right font-Poppins font-semibold">
                            {applicantView ? null : (
                              <TablePagination
                                rowsPerPageOptions={[20, 25, 100]}
                                component="div"
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                              />
                            )}
                          </div>
                          {/* Applicant view */}
                          <div className=" ">
                            {applicantView ? (
                              <></>
                            ) : (
                              <>
                                <ClassTest
                                  rowsPerPage={rowsPerPage}
                                  page={page}
                                />
                              </>
                            )}
                          </div>
                        </div>
                      </TabGroup.TabPanel>
                    </div>
                  </TabGroup>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
