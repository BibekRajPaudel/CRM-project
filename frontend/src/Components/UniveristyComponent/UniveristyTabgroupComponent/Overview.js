import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import UniversityContacts from "../UniversityContacts";
import axios from 'axios'
import { useParams } from "react-router-dom";
const Overview = ({ universityDetails }) => {

  return (
    <>
      <div className="w-full">
        {/* overview */}
        <div className="flex gap-5">
          {/* First Section */}
          <div className="w-[80%] flex flex-col gap-3">
            <div className="w-full">
              <p className="font-poppins text-sm">{universityDetails && universityDetails.findUni && universityDetails.findUni.descriptionAboutUniversity}</p>
            </div>
          </div>
          {/* Second section */}
          <div className="shadow-lg pl-5 pr-5 pt-2 pb-2 bg-white">
            <UniversityContacts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
