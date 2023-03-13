import React from "react";
import Sidebar from "../SidebarComponent/Sidebar";
import Topbar from "../TopbarComponent/Topbar";
import { Button } from "@mui/material";
import { BiPencil } from "react-icons/bi";
const EmployComponent = () => {
  return (
    <div>
      <Topbar />
      <div className="flex gap-4 ">
        <Sidebar />
        <div className="pt-5">
          <div className="leftSection">
            <div className="w-full ">
              <div className="images bg-[#E6F0FF] w-[257px] h-[310px] align-center">
                <div className="flex">
                  <img
                    className=" align-center w-[150px] h-[150px] top-[16px] relative 
                 left-[54px] rounded-full "
                    src="https://s3-alpha-sig.figma.com/img/1e5c/69c7/03f2c3e19ee9bf872ed3175a00036bc8?Expires=1676851200&Signature=eiuEhALqn3-EAfQIJo-Ew8dh4Wmmv5BrlxlG5LA~yahMjkzjlof5MeYj5TetuQgCXnGhk3I92B3fQWRJLYdPq4eAzGSOvRLHAVqg6Lt1N2GIVdjwroagEdB7PmMfFT4Csq~-ZsztOgHWKjL6IcvtzVelpDOCP2sC99SJ8R~No9eB1-DkZ5gMJ2CIvrPZnteDj9qVcOQ093TpbdKreEoKVP9pYG9XL~yrumrbUxWhc6DSsxrRwRtPbkq8N5U-SNKtiYgAvGEMUUSvQWd~F3PQEXnRr2GgMcanbz9eY4PYpEfHo88LXgs3OFl6LutlNntEMC-CVRQq5DFBgNaRA-xlGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="images"
                  />
                  <p
                    className="w-[30px] h-[30px]
               relative top-[120px] left-[20px]
                bg-[#0052D4] rounded-full
                "
                  >
                    <div
                      className="text-[#ffffff]
               items-center align-center pt-[5px] pl-2 w-[12.18px] h-[12.17px] color-[#FFFFFF]"
                    >
                      <BiPencil />
                    </div>
                  </p>
                </div>
                <div className="font-Poppins w-full h-[50px]  pt-5 text-center">
                  <h1 className="text-base font-Poppins  ">Seema Shrestha</h1>
                  <p>US Counsellor</p>
                  <Button
                    variant="contained"
                    className="bg-[#96E3DF] rounded-full w-[104px] h-[25px]"
                  >
                    Active
                  </Button>
                </div>
              </div>
              <div className="">
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
              </div>
              <div className="images"></div>
            </div>
          </div>
          <div className="MIddleSection"></div>
          <div className="RightSection"></div>
        </div>
      </div>
      EmployComponent
    </div>
  );
};

export default EmployComponent;
