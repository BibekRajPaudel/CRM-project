import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import BacehlorSummary from "./CourseDetail";
import UniversityContacts from "../UniversityContacts";
import { useParams } from "react-router-dom";
import axios from "axios";
const Program = ({ universityDetails }) => {
  const [bachelorNavbar, setBachelorNavbar] = useState(true);
  const [masterNavbar, setMasterNavbar] = useState(false);
  const [diplomaNavbar, setDiplomaNavbar] = useState(false);
  const [programDetail, setProgramDetail] = useState()
  const [toggleProgramDetails, setToggleProgramDetails] = useState(false);

  const [university, setUniversity] = useState()
  const { id } = useParams();

  const toggleBachelor = () => {
    setBachelorNavbar(true);
    setMasterNavbar(false);
    setDiplomaNavbar(false);
    setToggleProgramDetails(false);
  };
  const toggleMaster = () => {
    setBachelorNavbar(false);
    setMasterNavbar(true);
    setToggleProgramDetails(false);
    setDiplomaNavbar(false);
  };
  const toggleDiploma = () => {
    setBachelorNavbar(false);
    setMasterNavbar(false);
    setToggleProgramDetails(false);
    setDiplomaNavbar(true);
  };


  const fetchProgramDetails = (programId) => {
    axios.get(`http://localhost:3000/api/v1/program/${id}/${programId}`).then((res) => {
      setProgramDetail(res.data)
    }).catch((error) => {
      console.log(error);
    })
    setToggleProgramDetails(true);
  }

  return (
    <>
      <div className="w-full pb-5">
        <div className="flex gap-5">
          {/* Programs */}
          <div className="w-[70%] flex flex-col gap-3 relative">
            {/* Education Level */}
            <div className="w-full p-2 grid grid-cols-3 gap-5">
              <div
                onClick={toggleBachelor}
                className={
                  bachelorNavbar
                    ? "w-full border-[1px] rounded-md p-2 cursor-pointer border-primary-blue text-primary-blue transition ease-in-out"
                    : "w-full border-[1px] border-gray-300 rounded-md p-2 cursor-pointer hover:border-primary-blue hover:text-primary-blue text-gray-400 transition ease-in-out"
                }
              >
                <p className="font-poppins text-sm tracking-wide text-center">
                  Bachelors
                </p>
              </div>
              <div
                onClick={toggleMaster}
                className={
                  masterNavbar
                    ? "w-full border-[1px] rounded-md p-2 cursor-pointer border-primary-blue text-primary-blue transition ease-in-out"
                    : "w-full border-[1px] border-gray-300 rounded-md p-2 cursor-pointer hover:border-primary-blue hover:text-primary-blue text-gray-400 transition ease-in-out"
                }
              >
                <p className="font-poppins text-sm tracking-wide text-center">
                  Masters
                </p>
              </div>
              <div
                onClick={toggleDiploma}
                className={
                  diplomaNavbar
                    ? "w-full border-[1px] rounded-md p-2 cursor-pointer border-primary-blue text-primary-blue transition ease-in-out"
                    : "w-full border-[1px] border-gray-300 rounded-md p-2 cursor-pointer hover:border-primary-blue hover:text-primary-blue text-gray-400 transition ease-in-out"
                }
              >
                <p className="font-poppins text-sm tracking-wide text-center">
                  Diploma
                </p>
              </div>
            </div>

            {/* Bachelor navbar */}
            {bachelorNavbar && (
              <>
                {/* Search & filter */}
                <div className="flex items-center gap-2">
                  {/* Search */}
                  <div className="w-fit">
                    <div className="w-[280px] h-[35px]">
                      <div className="w-full">
                        <form className="w-full">
                          <div className="w-full flex items-center h-full">
                            <input
                              className="w-full h-[35px] p-2 bg-blue-50 rounded-l-lg outline-none text-sm font-poppins"
                              type="text"
                              placeholder="Search"
                            />
                            <p className="bg-blue-50 h-[35px] p-2 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center">
                              <BiSearch />
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Filter */}
                  <div className="w-fit flex gap-2">
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs text-wider tracking-wider  w-[90px]">IT & Software</p>
                    </div>
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue
                     hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs text-wider tracking-wider  w-[55px]">Science</p>
                    </div>
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs text-wider tracking-wider  w-[120px]">Medical & Science</p>
                    </div>
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs flex gap-2 items-center text-wider tracking-wider  w-[100px]">
                        More filters
                        <span>
                          <FiFilter />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* University */}
                {/* mapping */}
                <div className='gap-4 grid grid-cols-3 w-full h-full'>
                  {universityDetails && universityDetails.findUni && universityDetails.findUni.program.filter(p => p.level === "Bachelor").map((table, index) => (
                    <div className="">
                      <div className=" bg-gradient-to-r from-[#3085D3] via-[#2990C7] to-[#1CA1AE] drop-shadow-md rounded-md h-[300px] flex gap-2 flex-col items-start justify-center">
                        <div className="w-full border-b-[1px] p-2">
                          <p className="text-lg font-poppins font-semibold text-white tracking-wide">

                            {table.program}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1 p-3">
                          <p className="font-poppins text-sm text-white tracking-wide">
                            Duration :
                            <span className="font-light">

                              {table.coursePeriod}

                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            Exams :
                            <span className="font-light">IELTS, TOEFL, PTE</span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            1 yr Tuition Fee :
                            <span className="font-light">{table.tutionFeeFirst}
                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            2 yr Tuition Fee :
                            <span className="font-light">{table.tutionFeeSecond}
                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            3 yr Tuition Fee :
                            <span className="font-light">{table.tutionFeeThird}
                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            No of Course : <span className="font-light">14</span>
                          </p>
                        </div>
                        <div className="p-2 w-full">
                          <div
                            onClick={() => fetchProgramDetails(table._id)}
                            className="w-full border-[1px] border-white text-white p-2 rounded-md cursor-pointer hover:bg-white hover:text-[#3085D3] transition ease-in-out"
                          >
                            <p className="w-full text-center font-poppins text-sm">
                              View Details
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>


              </>

            )}
            {/* Masters navbar */}
            {masterNavbar && (
              <>
                {/* Search & filter */}
                <div className="flex items-center gap-2">
                  {/* Search */}
                  <div className="w-fit">
                    <div className="w-[280px] h-[35px]">
                      <div className="w-full">
                        <form className="w-full">
                          <div className="w-full flex items-center h-full">
                            <input
                              className="w-full h-[35px] p-2 bg-blue-50 rounded-l-lg outline-none text-sm font-poppins"
                              type="text"
                              placeholder="Search"
                            />
                            <p className="bg-blue-50 h-[35px] p-2 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center">
                              <BiSearch />
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Filter */}
                  <div className="w-fit flex gap-2">
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs text-wider tracking-wider  w-[90px]">IT & Software</p>
                    </div>
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue
                   hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs text-wider tracking-wider  w-[55px]">Science</p>
                    </div>
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs text-wider tracking-wider  w-[120px]">Medical & Science</p>
                    </div>
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs flex gap-2 items-center text-wider tracking-wider  w-[100px]">
                        More filters
                        <span>
                          <FiFilter />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* University */}
                {/* mapping */}
                <div className='gap-4 grid grid-cols-3 w-full h-full'>
                  {universityDetails && universityDetails.findUni && universityDetails.findUni.program.filter(p => p.level === "Masters").map((table, index) => (
                    <div className="">
                      <div className=" bg-gradient-to-r from-[#3085D3] via-[#2990C7] to-[#1CA1AE] drop-shadow-md rounded-md h-[300px] flex gap-2 flex-col items-start justify-center">
                        <div className="w-full border-b-[1px] p-2">
                          <p className="text-lg font-poppins font-semibold text-white tracking-wide">

                            {table.program}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1 p-3">
                          <p className="font-poppins text-sm text-white tracking-wide">
                            Duration :
                            <span className="font-light">

                              {table.coursePeriod}

                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            Exams :
                            <span className="font-light">IELTS, TOEFL, PTE</span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            1 yr Tuition Fee :
                            <span className="font-light">{table.tutionFeeFirst}
                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            2 yr Tuition Fee :
                            <span className="font-light">{table.tutionFeeSecond}
                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            3 yr Tuition Fee :
                            <span className="font-light">{table.tutionFeeThird}
                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            No of Course : <span className="font-light">14</span>
                          </p>
                        </div>
                        <div className="p-2 w-full">
                          <div
                            onClick={() => fetchProgramDetails(table._id)}
                            className="w-full border-[1px] border-white text-white p-2 rounded-md cursor-pointer hover:bg-white hover:text-[#3085D3] transition ease-in-out"
                          >
                            <p className="w-full text-center font-poppins text-sm">
                              View Details
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>


              </>
            )}
            {/* Masters navbar */}
            {diplomaNavbar && (
              <>
                {/* Search & filter */}
                <div className="flex items-center gap-2">
                  {/* Search */}
                  <div className="w-fit">
                    <div className="w-[280px] h-[35px]">
                      <div className="w-full">
                        <form className="w-full">
                          <div className="w-full flex items-center h-full">
                            <input
                              className="w-full h-[35px] p-2 bg-blue-50 rounded-l-lg outline-none text-sm font-poppins"
                              type="text"
                              placeholder="Search"
                            />
                            <p className="bg-blue-50 h-[35px] p-2 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center">
                              <BiSearch />
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Filter */}
                  <div className="w-fit flex gap-2">
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs text-wider tracking-wider  w-[90px]">IT & Software</p>
                    </div>
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue
                   hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs text-wider tracking-wider  w-[55px]">Science</p>
                    </div>
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs text-wider tracking-wider  w-[120px]">Medical & Science</p>
                    </div>
                    <div className="w-fit p-2 border-[1px] rounded-md hover:border-primary-blue hover:text-primary-blue transition ease-in-out cursor-pointer">
                      <p className="font-poppins text-xs flex gap-2 items-center text-wider tracking-wider  w-[100px]">
                        More filters
                        <span>
                          <FiFilter />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* University */}
                {/* mapping */}
                <div className='gap-4 grid grid-cols-3 w-full h-full'>
                  {universityDetails && universityDetails.findUni && universityDetails.findUni.program.filter(p => p.level === "Diploma").map((table, index) => (
                    <div className="">
                      <div className=" bg-gradient-to-r from-[#3085D3] via-[#2990C7] to-[#1CA1AE] drop-shadow-md rounded-md h-[300px] flex gap-2 flex-col items-start justify-center">
                        <div className="w-full border-b-[1px] p-2">
                          <p className="text-lg font-poppins font-semibold text-white tracking-wide">

                            {table.program}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1 p-3">
                          <p className="font-poppins text-sm text-white tracking-wide">
                            Duration :
                            <span className="font-light">

                              {table.coursePeriod}

                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            Exams :
                            <span className="font-light">IELTS, TOEFL, PTE</span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            1 yr Tuition Fee :
                            <span className="font-light">{table.tutionFeeFirst}
                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            2 yr Tuition Fee :
                            <span className="font-light">{table.tutionFeeSecond}
                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            3 yr Tuition Fee :
                            <span className="font-light">{table.tutionFeeThird}
                            </span>
                          </p>
                          <p className="font-poppins text-sm text-white tracking-wide">
                            No of Course : <span className="font-light">14</span>
                          </p>
                        </div>
                        <div className="p-2 w-full">
                          <div
                            onClick={() => fetchProgramDetails(table._id)}
                            className="w-full border-[1px] border-white text-white p-2 rounded-md cursor-pointer hover:bg-white hover:text-[#3085D3] transition ease-in-out"
                          >
                            <p className="w-full text-center font-poppins text-sm">
                              View Details
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>


              </>
            )}
            {toggleProgramDetails && (
              <>
                {/* Summary */}
                <div className="w-full h-full absolute top-[285px] flex justify-center items-center">
                  <div className="w-full pb-5">
                    <BacehlorSummary setToggleProgramDetails={setToggleProgramDetails} programDetail={programDetail} />
                  </div>
                </div>
              </>
            )}
          </div>
          {/* Contact */}
          <div className="shadow-lg pl-5 rounded pr-5 pt-2 pb-2 bg-white h-fit ">
            <UniversityContacts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
