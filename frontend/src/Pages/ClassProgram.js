import React, { useState } from "react";
import Sidebar from "../Components/SidebarComponent/Sidebar";
import Topbar from "../Components/TopbarComponent/Topbar";
import { BiSearch } from "react-icons/bi";
import { TabGroup } from "@statikly/funk";
import { Button } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import data from "../MaterialUICustomTheme/ApplicantTable";
import ClassPages from "../Components/ClassComponent/ClassPages";
import ClassTest from "../Components/ClassComponent/ClassTest";
import Test from "../Components/FormComponent/AddForm/TestForm/Test";
import CourseForm from "../Components/FormComponent/AddForm/ClassCourseForm/ClassForm";
import ClassForm from "../Components/FormComponent/AddForm/ClassCourseForm/ClassForm";

const ClassProgram = () => {
  const [addClass, setAddClass] = useState(false);
  const [addTest, setTest] = useState(false);
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

  return (
    <div className="">
      <div>
        <Topbar />
        <div className="flex gap-3">
          <Sidebar />
          <div className="w-full pr-5 pt-5 pb-5 h-[90vh] overflow-y-auto">
            <div className="">
              {/* Top component */}
              <div className="flex gap-2 w-[148px] h-[48px] top-[15px] left-[24px] items-center">
                <h1 className=" text-[#ED8936]  font-poppins  font-normal text-2xl ">
                  15
                </h1>
                <p className="font-poppins text-sm leading-9 pt-2">
                  Classes/Test
                </p>
              </div>
              <div className="float-right flex gap-4 ">
                <div className="w-fit">
                  <button
                    className="w-32 font-poppins text-sm p-2 bg-primary-blue hover:bg-primary-lightblue rounded-md text-white tracking-wide"
                    onClick={() => setAddClass(true)}
                  >
                    Add Class
                  </button>
                </div>
                <div className="w-fit">
                  <button
                    className="w-32 font-poppins text-sm p-2 bg-primary-blue hover:bg-primary-lightblue rounded-md text-white tracking-wide"
                    onClick={() => setTest(true)}
                  >
                    Add Test
                  </button>
                </div>
              </div>

              {/* Search Section */}
              <div className="">
                {/* Search by the Course */}
                <div className="flex gap-4  w-full items-center h-[60px] ">
                  <label className=" w-[200px] h-[35px]  ">Search </label>
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
                    variant="contained"
                    disabled
                    className="text-[#1d1d1d] text-xs font-poppins w-[110px] h-[35px]"
                  >
                    IELTS(25)
                  </Button>
                  <Button
                    variant="contained"
                    disabled
                    className="text-[#1d1d1d]  text-xs font-poppins  w-[200px] h-[35px]"
                  >
                    TOEFL(35)
                  </Button>
                  <Button
                    variant="contained"
                    disabled
                    className="text-[#1d1d1d]  text-xs font-poppins  w-[200px] h-[35px]"
                  >
                    TOEFL(35)
                  </Button>
                  <Button
                    variant="contained"
                    disabled
                    className="text-[#1d1d1d]  text-xs font-poppins  w-[200px] h-[35px]"
                  >
                    PTE(15)
                  </Button>
                  <Button
                    variant="contained"
                    disabled
                    className="text-[#1d1d1d]  text-xs font-poppins  w-[200px] h-[35px]"
                  >
                    GRE(10)
                  </Button>
                  <Button
                    variant="contained"
                    disabled
                    className="text-[#1d1d1d]  text-xs font-poppins  w-[200px] h-[35px]"
                  >
                    SAT(50)
                  </Button>
                </div>
              </div>
              {/* silder section */}
              <div>
                <>
                  <div className="">
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
                                        onRowsPerPageChange={
                                          handleChangeRowsPerPage
                                        }
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
                              <>
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
                                          onRowsPerPageChange={
                                            handleChangeRowsPerPage
                                          }
                                        />
                                      )}
                                    </div>
                                    {/* Applicant view */}
                                    <div className=" ">
                                      <ClassTest
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                      />
                                    </div>
                                  </div>
                                </TabGroup.TabPanel>
                              </>
                            </div>
                          </TabGroup>
                        </div>
                      </div>
                    </>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>

      {addClass && (
        <>
          <div className="bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center">
            {/* Form container */}
            <div className="w-[800px] opacity-100 bg-white p-10 rounded-md">
              {/* Form heading */}
              <div className="w-full flex items-center justify-between sticky">
                <h1 className="text-base font-poppins font-bold text-gray-600 tracking-wide">
                  Add Class
                </h1>
                <p
                  onClick={() => setAddClass(false)}
                  className="text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md"
                >
                  Close
                </p>
              </div>
              <div
                id="sidebarDropdown"
                className="w-full max-h-[70vh] mt-5 overflow-y-auto"
              >
                <ClassForm />
              </div>
            </div>
          </div>
        </>
      )}
      {addTest && (
        <>
          <div className="bg-[rgba(0,0,0,0.5)] w-full h-[100vh] fixed z-50 top-0 left-0 flex justify-center items-center">
            {/* Form container */}
            <div className="w-[800px] opacity-100 bg-white p-10 rounded-md">
              {/* Form heading */}
              <div className="w-full flex items-center justify-between sticky">
                <h1 className="text-base font-poppins font-bold text-gray-600 tracking-wide">
                  Add Test
                </h1>
                <p
                  onClick={() => setTest(false)}
                  className="text-white cursor-pointer hover:text-white hover:bg-red-500 transition ease-in-out duration-200 font-poppins tracking-wide bg-red-300 w-24 text-center text-sm p-1 rounded-md"
                >
                  Close
                </p>
              </div>
              <div
                id="sidebarDropdown"
                className="w-full max-h-[70vh] mt-5 overflow-y-auto"
              >
                <Test />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ClassProgram;
