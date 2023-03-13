import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

const Calendar = ({setCalendarModal, feedbackRef}) => {
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const responseGoogle = (response) => {
    console.log(response);
    const { code } = response;
    axios
      .post("http://localhost:3000/api/v1/create-tokens", { code })
      .then((response) => {
        setSignedIn(true);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  };

  const responseError = (error) => {
    console.log(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(summary, description, location, startDateTime, endDateTime);
    axios
      .post("http://localhost:3000/api/v1/create-event", {
        summary,
        description,
        location,
        startDateTime,
        endDateTime,
      })
      .then((response) => {
        console.log(response.date);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="text-center bg-[rgba(0,0,0,0.8)] fixed w-full h-full top-0 bottom-0 left-0 flex justify-center items-center">
      <div ref={feedbackRef} className="w-fit flex flex-col gap-5">
      <div className="font-bold text-2xl text-white font-poppins">
        <h1>Google Calendar</h1>
      </div>
      {!signedIn ? (
        <div>
          <GoogleLogin
            clientId="21776485483-k3u568j2f9tfvf4s0vdkpqtem6se83e5.apps.googleusercontent.com"
            buttonText="Sign in & Authorize Calendar"
            onSuccess={responseGoogle}
            onFailure={responseError}
            cookiePolicy={"single_host_origin"}
            //this is important
            responseType="code"
            accessType="offline"
            scope="openid email profile https://www.googleapis.com/auth/calendar"
          />
        </div>
      ) : (
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label
                htmlFor="sumary"
                htmlFor="sumary"
                className="font-poppins text-xl"
              >
                Event
              </label>
              <br />
              <input
                type="text"
                id="state"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="border border-black w-[20vw] h-[5vh] rounded-md"
              />
            </div>
            <br />
            <div className="">
              <label htmlFor="description" className="font-poppins text-xl">
                Description
              </label>
              <br />
              <textarea
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-black w-[20vw] h-[5vh] rounded-md"
              />
            </div>
            <br />
            <div className="">
              <label htmlFor="Location" className="font-poppins text-xl">
                Location
              </label>
              <br />
              <input
                type="Start Date Time"
                id="location"
                className="border border-black w-[20vw] h-[5vh] rounded-md"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <br />
            <div className="">
              <label htmlFor="sumary" className="font-poppins text-xl">
                start Date Time
              </label>
              <br />
              <input
                type="datetime-local"
                id="startDateTime"
                className="border border-black w-[20vw] h-[5vh] rounded-md"
                value={startDateTime}
                onChange={(e) => setStartDateTime(e.target.value)}
              />
            </div>

            <br />
            <div className="">
              <label htmlFor="sumary" className="font-poppins text-xl">
                End Date Time
              </label>
              <br />
              <input
                type="datetime-local"
                id="endDateTime"
                className="border border-black  w-[20vw] h-[5vh] rounded-md"
                value={endDateTime}
                onChange={(e) => setEndDateTime(e.target.value)}
              />
            </div>

            <br />
            <button
              type="submit"
              className="bg-gray-200 w-[10vw] h-[5vh] font-poppins text-xl rounded-md"
            >
              Create Event
            </button>
          </form>
        </div>
        )}
        </div>
    </div>
  );
};

export default Calendar;
