import React from "react";
import UniversityContacts from "../UniversityContacts";
const UniversityInformation = () => {
  return (
    <>
      <div className="w-full pb-5">
        <div className="flex gap-5">
          {/* UniversityInformation */}
          <div className="w-[80%] flex flex-col gap-3">
            {/* Admission */}
            <div className="w-full flex flex-col gap-2">
              <div className="w-full">
                <p className="font-poppins text-lg font-bold tracking-wide">Admission</p>
              </div>
              <div className="w-full">
                <p className="font-poppins text-sm">&#x2022; Apply online or through a registered agent.</p>
                <p className="font-poppins text-sm">&#x2022; Apply online or through a registered agent.</p>
                <p className="font-poppins text-sm">&#x2022; Apply online or through a registered agent.</p>
                <p className="font-poppins text-sm">&#x2022; Apply online or through a registered agent.</p>
              </div>
            </div>
            {/* Requirements */}
            <div className="w-full flex flex-col gap-2">
              {/* General Requirement */}
              <div className="w-full">
                <p className="font-poppins text-sm font-bold">General Requirements</p>
                <div className="w-full mt-2 grid grid-cols-4">
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">GPA :</p>
                    <p className="font-poppins text-sm">5+</p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">IELTS :</p>
                    <p className="font-poppins text-sm">5+</p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">TOEFL :</p>
                    <p className="font-poppins text-sm">86+</p>
                  </div>
                </div>
              </div>
              {/* Bachelors Requirement */}
              <div className="w-full">
                <p className="font-poppins text-sm font-bold">Bachelor Requirements</p>
                <div className="w-full mt-2 grid grid-cols-4">
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">GPA :</p>
                    <p className="font-poppins text-sm">5+</p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">IELTS :</p>
                    <p className="font-poppins text-sm">5+</p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">TOEFL :</p>
                    <p className="font-poppins text-sm">86+</p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">PTE :</p>
                    <p className="font-poppins text-sm">86+</p>
                  </div>
                </div>
              </div>
              {/* Masters Requirement */}
              <div className="w-full">
                <p className="font-poppins text-sm font-bold">Masters Requirements</p>
                <div className="w-full mt-2 grid grid-cols-4">
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">GPA :</p>
                    <p className="font-poppins text-sm">5+</p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">IELTS :</p>
                    <p className="font-poppins text-sm">5+</p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">TOEFL :</p>
                    <p className="font-poppins text-sm">86+</p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">PTE :</p>
                    <p className="font-poppins text-sm">86+</p>
                  </div>
                </div>
              </div>
              {/* Diploma Requirement */}
              <div className="w-full">
                <p className="font-poppins text-sm font-bold">Diploma Requirements</p>
                <div className="w-full mt-2 grid grid-cols-4">
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">GPA :</p>
                    <p className="font-poppins text-sm">5+</p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">IELTS :</p>
                    <p className="font-poppins text-sm">5+</p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">TOEFL :</p>
                    <p className="font-poppins text-sm">86+</p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <p className="font-poppins text-sm font-bold">PTE :</p>
                    <p className="font-poppins text-sm">86+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contacts */}
          <div className="shadow-lg pl-5 pr-5 pt-2 pb-2 bg-white h-fit">
            <UniversityContacts />
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityInformation;
