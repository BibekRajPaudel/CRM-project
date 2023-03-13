import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";
import { useParams } from "react-router-dom";

const UniversityContacts = () => {
  const [universityDetails, setUniversityDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/getUniById/${id}`).then((res) => {
      setUniversityDetails(res.data);
      console.log("Pwan", res.data);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-3 h-fit w-full">
        {/*location Section */}
        <div className="flex flex-col gap-2">
          <p className="font-poppins font-semibold text-base">Location</p>
          <p className="font-poppins text-xs font-bold pl-2">
            City :
            <span className="font-light">
              Sydney, New South Wales, Australia
            </span>
          </p>
        </div>
        {/*campus Section */}
        <div className="flex flex-col">
          <p className="font-poppins font-semibold text-base">Campus</p>
          <div className="pl-2 flex flex-col gap-2 mt-2">
            <div className="">
              <p className="font-poppins text-sm">Bankstown</p>
              <p className="flex items-start font-poppins text-xs gap-2">
                <span className="text-lg text-primary-blue">
                  <MdLocationOn />
                </span>
                Bankstown Campus,/Bullecourt Ave, Milperra NSW 2214,Australia
              </p>
            </div>
            <div className="">
              <p className="font-poppins text-sm">Blacktown</p>
              <p className="flex items-start font-poppins text-xs gap-2">
                <span className="text-lg text-primary-blue">
                  <MdLocationOn />
                </span>
                Eastern Rd, Quakers Hill NSW 2763, Australia
              </p>
            </div>
            <div className="">
              <p className="font-poppins text-sm">Campbelltown</p>
              <p className="flex items-start font-poppins text-xs gap-2">
                <span className="text-lg text-primary-blue">
                  <MdLocationOn />
                </span>
                Goldsmith Ave, Campbelltown NSW 2560, Australia
              </p>
            </div>
            <div className="">
              <p className="font-poppins text-sm">Hawkesbury</p>
              <p className="flex items-start font-poppins text-xs gap-2">
                <span className="text-lg text-primary-blue">
                  <MdLocationOn />
                </span>
                158/160 Hawkesbury Rd, Westmead NSW 2145, Australia
              </p>
            </div>
            <div className="">
              <p className="font-poppins text-sm"> Parramatta </p>
              <p className="flex items-start font-poppins text-xs gap-2">
                <span className="text-lg text-primary-blue">
                  <MdLocationOn />
                </span>
                James Ruse Dr, Parramatta NSW 2150, Australia
              </p>
            </div>
            <div className="">
              <p className="font-poppins text-sm">Penrith</p>
              <p className="flex items-start font-poppins text-xs gap-2">
                <span className="text-lg text-primary-blue">
                  <MdLocationOn />
                </span>
                O'Connell St, Kingswood NSW 2747, Australia
              </p>
            </div>
          </div>
        </div>
        {/*contact Section */}
        <div className="flex flex-col gap-3">
          <p className="font-poppins font-semibold text-base">Contact</p>
          <div className="font-poppins text-sm">
            <p className="font-poppins font-semibold text-sm">Address :</p>
            <p className="font-poppins font-light">
              {universityDetails &&
                universityDetails.findUni &&
                universityDetails.findUni.location}
            </p>
          </div>
          <div className=" ">
            <p className="font-poppins font-semibold text-sm">Phone : </p>
            <p className="font-poppins text-sm font-light ">
         
              {universityDetails &&
                universityDetails.findUni &&
                universityDetails.findUni.contact}
            </p>
          </div>
          <div className="">
            <p className="font-poppins font-semibold text-sm">Email :</p>
            <p className="font-poppins text-sm font-light ">
              {universityDetails &&
                universityDetails.findUni &&
                universityDetails.findUni.email}
            </p>
          </div>
          <div className="">
            <p className="font-poppins font-semibold text-sm">Website :</p>
            <p className="font-poppins text-sm font-light ">
              {universityDetails &&
                universityDetails.findUni &&
                universityDetails.findUni.universityLink}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityContacts;
