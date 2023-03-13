import React, { useEffect, useState } from "react";
import { TabGroup } from "@statikly/funk";
import Sidebar from "../Components/SidebarComponent/Sidebar";
import Topbar from "../Components/TopbarComponent/Topbar";
import { FiMapPin, FiEdit } from "react-icons/fi";
import { HiPhotograph } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import Overview from "../Components/UniveristyComponent/UniveristyTabgroupComponent/Overview";
import Program from "../Components/UniveristyComponent/UniveristyTabgroupComponent/Program";
import UniversityInformation from "../Components/UniveristyComponent/UniveristyTabgroupComponent/UniversityInformation";
import AddProgramModal from "../Components/UniveristyComponent/FormModal/AddProgramModal";
import "../CSS/University.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditImageSection from "../Components/UniveristyComponent/FormModal/EditImageModal";
import EditUniversityModal from "../Components/UniveristyComponent/FormModal/EditUniversityModal";

const UniversityDetail = () => {
  const [courseModal, setCourseModal] = useState(false);
  const [editImage, setEditImage] = useState(false);
  const [editUniversityDetail, setEditUniversityDetail] = useState(false);
  const [universityDetails, setUniversityDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/getUniById/${id}`).then((res) => {
      setUniversityDetails(res.data);
    });
  }, []);

  return (
    <>
      <Topbar />
      <div className="flex gap-3">
        <div>
          <Sidebar />
        </div>
        <div
          id="maincontainer"
          className="w-full pr-5 pt-5 pb-5 h-[90vh] overflow-y-auto"
        >
          {/* Top Container */}
          <div className="flex justify-between items-center">
            <div className="pl-3">
              <p className="w-fit font-poppins text-subbody2 text-gray-700">
                {universityDetails &&
                  universityDetails.findUni &&
                  universityDetails.findUni.universityName}
              </p>
            </div>
            <div className="w-fit flex gap-2">
              <button
                onClick={() => setEditImage(true)}
                className="w-40 p-2 rounded-md tracking-wide font-poppins text-sm bg-primary-blue hover:bg-white hover:text-primary-blue border-[1px] hover:border-primary-blue transition ease-in-out text-white flex items-center justify-center gap-2"
              >
                <HiPhotograph />
                Update photos
              </button>
              <button
                onClick={() => setEditUniversityDetail(true)}
                className="w-40 p-2 rounded-md tracking-wide font-poppins text-sm bg-primary-blue hover:bg-white hover:text-primary-blue border-[1px] hover:border-primary-blue transition ease-in-out text-white flex items-center justify-center gap-2"
              >
                <FiEdit />
                Edit University
              </button>
              <button
                onClick={() => setCourseModal(true)}
                className="w-40 p-2 rounded-md tracking-wide font-poppins text-sm bg-primary-blue hover:bg-white hover:text-primary-blue border-[1px] hover:border-primary-blue transition ease-in-out text-white flex items-center justify-center gap-2"
              >
                <IoMdAddCircle /> ADD PROGRAM
              </button>
            </div>
          </div>
          {/* University Image container */}
          <div className="w-full mt-5 flex justify-center items-center relative">
            <div className="universitydetailsimage w-full h-[40vh] relative">
              <img
                className="w-full h-[40vh] object-cover rounded-md"
                src={`http://localhost:3000/${universityDetails && universityDetails.findUni && universityDetails.findUni.background}`}
                alt="Univeristy"
              />
            </div>
            {/* Details */}
            <div className="w-[90%] absolute z-20 flex gap-5">
              {/* Uni logo */}
              <div className="w-44 h-44">
                <img
                  src={`http://localhost:3000/${universityDetails && universityDetails.findUni && universityDetails.findUni.profile}`}
                  alt="University "
                />
              </div>
              {/* Uni name and details */}
              <div className="w-[80%] flex flex-col gap-3">
                {/* Name */}
                <div className="w-fit">
                  <p className="font-poppins font-extrabold text-3xl text-white tracking-wide">
                    {universityDetails &&
                      universityDetails.findUni &&
                      universityDetails.findUni.universityName}
                  </p>
                </div>
                {/* Location */}
                <div className="flex flex-col w-fit">
                  <p className="w-fit flex items-center gap-2 text-white font-poppins text-sm">
                    <FiMapPin />
                    <span>
                      {universityDetails &&
                        universityDetails.findUni &&
                        universityDetails.findUni.location}
                    </span>
                  </p>
                  <p className="w-fit flex items-center gap-2 text-white font-poppins text-sm">
                    Established:
                    {universityDetails &&
                      universityDetails.findUni &&
                      universityDetails.findUni.established}
                  </p>
                </div>
                {/* Information */}
                <div className="w-full bg-white grid grid-cols-3 p-3 rounded-md">
                  <div className="w-full flex gap-3 items-center">
                    <div className="flex gap-2">
                      <p className="text-black text-5xl">
                        <FaUniversity />
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-poppins text-lg font-bold">201-250</p>
                      <p className="font-poppins text-sm">The Ranking</p>
                    </div>
                  </div>
                  <div className="w-full flex gap-3 items-center">
                    <div className="flex gap-2">
                      <p className="text-black text-5xl">
                        <FaGraduationCap />
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-poppins text-lg font-bold">201-250</p>
                      <p className="font-poppins text-sm">
                        Undergraduate Students
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex gap-3 items-center">
                    <div className="flex gap-2">
                      <p className="text-black text-5xl">
                        <FaGraduationCap />
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-poppins text-lg font-bold">201-250</p>
                      <p className="font-poppins text-sm">
                        Postgraduate Students
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabgroup */}
          <div className="w-full mt-5">
            <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
              {/* Tab navigation */}
              <div className="w-full grid grid-cols-7">
                <TabGroup.Tab
                  index={0}
                  activeClassName="text-primary-blue border-b-2 border-primary-blue outline-none p-2 transition ease-in-out duration-300"
                  inactiveClassName=""
                >
                  <p className="font-poppins text-subbody1 tracking-wide">
                    Overview
                  </p>
                </TabGroup.Tab>
                <TabGroup.Tab
                  index={1}
                  activeClassName="text-primary-blue border-b-2 border-primary-blue outline-none p-2 transition ease-in-out duration-300"
                >
                  <p className="font-poppins text-subbody1 tracking-wide">
                    Program
                  </p>
                </TabGroup.Tab>
                <TabGroup.Tab
                  index={2}
                  activeClassName="text-primary-blue border-b-2 border-primary-blue outline-none p-2 transition ease-in-out duration-300"
                >
                  <p className="font-poppins text-subbody1 tracking-wide">
                    University Information
                  </p>
                </TabGroup.Tab>
              </div>
              {/* Tab body */}
              <div className="w-full h-full">
                {/* Overview */}
                <TabGroup.TabPanel
                  index={0}
                  className="w-full transition-all transform mt-5"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="hidden"
                >
                  <div className="w-full">
                    <Overview universityDetails={universityDetails} />
                  </div>
                </TabGroup.TabPanel>
                {/* Program */}
                <TabGroup.TabPanel
                  index={1}
                  className="w-full transition-all transform mt-5 relative"
                  activeClassName="opacity-100 duration-500 translate-x-0 relative"
                  inactiveClassName="hidden"
                >
                  <div className="w-full">
                    <Program universityDetails={universityDetails} />
                  </div>
                </TabGroup.TabPanel>
                {/* University information */}
                <TabGroup.TabPanel
                  index={2}
                  className="w-full transition-all transform mt-5"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="hidden"
                >
                  <div className="w-full">
                    <UniversityInformation />
                  </div>
                </TabGroup.TabPanel>
              </div>
            </TabGroup>
          </div>
        </div>

        {/* Add Course Modal */}
        {courseModal && <AddProgramModal setCourseModal={setCourseModal} />}
        {/* Edit Image Modal */}
        {editImage && <EditImageSection setEditImage={setEditImage} />}
        {/* Edit Uniersity Details Modal */}
        {editUniversityDetail && (
          <EditUniversityModal
            setEditUniversityDetail={setEditUniversityDetail}
          />
        )}
      </div>
    </>
  );
};

export default UniversityDetail;
