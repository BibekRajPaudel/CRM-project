import React from "react";
import Sidebar from "../SidebarComponent/Sidebar";
import Topbar from "../TopbarComponent/Topbar";
import { BiSearch } from "react-icons/bi";
import { Button } from "@mui/material";

const ClassComponent = () => {
  return (
    <div className="w-full ">
      <div className=''>
        <Topbar />
      </div>
      <div className="flex gap-1">
        <Sidebar />
        <div className="middleSection relative top-5 ">
        <div className='justify-between flex'>
        <label className="w-[142px] h-[48px] text-3xl text-[#ED8936] relative font-poppins font-semibold ">
        15
        <span className="text-base  text-black font-medium">
          Classes/Test
        </span>
      </label>
      <Button
                  variant="contained"
                  disabled
                  className="w-[120px]  h-[45px] relative text-black font-poppins"
                >
                 Add Class 
                </Button>
        </div>
        
          <div className="
          flex items-center gap-4 w-full top-[10px] ">
            <label
              className="
        w-[60px] h-[24px] font-poppins text-base items-center "
            >
              Search:
            </label>
            <div className="w-full h-[35px] flex gap-4 ">
              <div className="w-full flex">
                <input
                  className="w-[350px] h-[40px] rounded  bg-blue-50 rounded-l-lg outline-none text-sm font-poppins"
                  type="text"
                  placeholder="IT & Software"
                />
                <p className="bg-blue-50 h-[35px] p-2 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center ">
                  <BiSearch />
                </p>
              </div>
              {/*items */}
                <div className='flex grid-cols-2 gap-4 w-full '>
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
        </div>
      </div>
    </div>
  );
};

export default ClassComponent;
