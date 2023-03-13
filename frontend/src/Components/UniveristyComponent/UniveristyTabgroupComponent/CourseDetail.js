import React from "react";

const CourseDetail = ({ setToggleProgramDetails, programDetail }) => {


  return (
    <>
      <div className="p-4 bg-white border-2 rounded-lg mt-16">
        <div onClick={() => setToggleProgramDetails(false)} className="w-full flex justify-end">
          <div className=" w-28 bg-red-200 hover:bg-red-500 transition ease-in-out cursor-pointer flex justify-center items-center rounded-md p-2">
            <p className="font-poppins text-white tracking-wide">Close</p>
          </div>
        </div>
        <div id="sidebarDropdown" className="w-full h-fit">
          <div className="flex flex-col gap-3">
            {/* Summary */}
            <div className="w-full">
              <p className="text-lg font-poppins font-bold tracking-wide">Summary</p>
            </div>
            {/* text container */}
            <div className="">
              <div className="">
                <p className="font-poppins text-sm">{programDetail && programDetail.singleProgram && programDetail.singleProgram.courseDescription}</p>
              </div>
            </div>
            <div className=" ">
              <div className="w-fit p-2 rounded-md border-[1px] border-primary-blue cursor-pointer">
                <p className="text-sm font-poppins">Download Brochure</p>
              </div>
            </div>
          </div>
          {/*course information */}
          <>
            <div className="font-Poppins mt-5 flex flex-col gap-5">
              <div className="w-full">
                <p className="font-poppins text-lg font-bold tracking-wide">Course Information</p>
              </div>
              {/*duration and time */}
              <div className="flex flex-col gap-3">
                {/* Duration */}
                <div className="flex items-center gap-3">
                  <div className="bg-[#D9D9D9] w-28 p-2 flex items-center justify-center">
                    <p className="font-poppins text-sm tracking-wide">Duration</p>
                  </div>
                  <div className=" border-[1px] border-[#D9D9D9] p-2 flex items-center justify-center">
                    <p className="font-poppins text-sm tracking-wide">{programDetail && programDetail.singleProgram && programDetail.singleProgram.coursePeriod} Years (Full time)</p>
                  </div>
                </div>
                {/* Study level */}
                <div className="flex items-center gap-3">
                  <div className="bg-[#D9D9D9] w-28 p-2 flex items-center justify-center">
                    <p className="font-poppins text-sm tracking-wide">Study Level</p>
                  </div>
                  <div className=" border-[1px] border-[#D9D9D9] p-2 flex items-center justify-center">
                    <p className="font-poppins text-sm tracking-wide">{programDetail && programDetail.singleProgram && programDetail.singleProgram.level}</p>
                  </div>
                </div>
                {/* Program */}
                <div className="flex items-center gap-3">
                  <div className="bg-[#D9D9D9] w-28 p-2 flex items-center justify-center">
                    <p className="font-poppins text-sm tracking-wide">Program</p>
                  </div>
                  <div className=" border-[1px] border-[#D9D9D9] p-2 flex items-center justify-center">
                    <p className="font-poppins text-sm tracking-wide">IT & Software</p>
                  </div>
                </div>
                {/* Course */}
                <div className="flex items-center gap-3">
                  <div className="bg-[#D9D9D9] w-28 p-2 flex items-center justify-center">
                    <p className="font-poppins text-sm tracking-wide">Course</p>
                  </div>
                  <div className=" border-[1px] border-[#D9D9D9] p-2 flex items-center justify-center">
                    <p className="font-poppins text-sm tracking-wide">Bachelor of Design in Graphic designers</p>
                  </div>
                </div>
              </div>
              {/*  Fees and expenses  */}
              <div className="w-full flex flex-col gap-2">
                <div className="w-full">
                  <p className="font-poppins text-lg font-bold tracking-wide">Fees and expenses</p>
                </div>
                <div className="w-full flex flex-col gap-3">
                  {/* Living and accomodation */}
                  <div className="flex gap-3">
                    <div className="bg-[#D9D9D9] w-52 p-2 flex items-center justify-center">
                      <p className="font-poppins text-sm tracking-wide">Living & Accomendation</p>
                    </div>
                    <div className=" border-[1px] border-[#D9D9D9] p-2 flex items-center justify-center">
                      <p className="font-poppins text-sm tracking-wide">AUD 10,000</p>
                    </div>
                  </div>
                  {/* Living and accomodation */}
                  <div className="flex gap-3">
                    <div className="bg-[#D9D9D9] w-52 p-2 flex items-center justify-center">
                      <p className="font-poppins text-sm tracking-wide">Tuition Fees</p>
                    </div>
                    <div className=" border-[1px] border-[#D9D9D9] p-2 flex flex-wrap items-center justify-center">
                      <p className="font-poppins text-sm tracking-wide">AUD 10,000 , AUD 10,000, AUD 10,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry Requirements */}
            <div className="w-full mt-5 flex flex-col gap-2">
              <div className="w-full">
                <p className="font-poppins text-lg font-bold tracking-wide">Entry Information</p>
              </div>
              <div className="w-full flex flex-col gap-3">
                {/* Living and accomodation */}
                <div className="flex flex-col">
                  <div className="w-fit p-2 flex items-center justify-center">
                    <p className="font-poppins text-sm tracking-wide">Qualification Level</p>
                  </div>
                  <div className="pl-5 flex flex-col gap-1">
                    <p className="font-poppins text-sm tracking-wide">&#x2022; +2 (70%)</p>
                    <p className="font-poppins text-sm tracking-wide">&#x2022; Student must score 70% or above mark in their +2 level exam taken by their respective board</p>
                    <p className="font-poppins text-sm tracking-wide">&#x2022; Required Subject (if any): English</p>
                  </div>
                </div>
                {/* IELTS */}
                <div className="flex flex-col">
                  <div className="w-fit p-2 flex items-center justify-center">
                    <p className="font-poppins text-sm tracking-wide">Conditional Offer</p>
                  </div>
                  <div className="pl-5 flex flex-col gap-1">
                    <p className="font-poppins text-sm tracking-wide">&#x2022; Yes</p>
                    <p className="font-poppins text-sm tracking-wide">&#x2022; If the offer is conditional, then the applicant needs to meet the conditions of the offer before accepting it</p>
                  </div>
                </div>
                {/* IELTS */}
                <div className="flex flex-col">
                  <div className="w-fit p-2 flex items-center justify-center">
                    <p className="font-poppins text-sm tracking-wide">IELTS</p>
                  </div>
                  <div className="pl-5 flex flex-col gap-1">
                    <p className="font-poppins text-sm tracking-wide">&#x2022; 6.5/9</p>
                    <p className="font-poppins text-sm tracking-wide">&#x2022; Total score of at least 6.5 in the Academic International English Language Testing System (IELTS)</p>
                    <p className="font-poppins text-sm tracking-wide">&#x2022; Each section band must be 6 or higher</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-5 flex flex-col gap-2">
              <div className="w-full">
                <p className="font-poppins text-lg font-bold tracking-wide">Scholarships</p>
              </div>
              <div className=" w-fit p-2 rounded-md border-[1px] border-primary-blue cursor-pointer">
                <p className="font-poppins text-sm">Download Scholarship Brochure</p>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
