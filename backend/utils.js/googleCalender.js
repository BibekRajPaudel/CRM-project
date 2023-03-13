const { google } = require("googleapis");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

// //Sending apikey with the request we are going to make and google calender uses the api key for the request
// const calendar = google.calendar({
//   version: "v3",
//   auth: process.env.API_KEY, // specify your API key here
// });

// //Generating an authentication url
// const oauth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URI
//   );
//   const scopes = ["https://www.googleapis.com/auth/calendar"];

// const login = (req, res) => {
//   const url = oauth2Client.generateAuthUrl({
//     access_type: "offline",
//     scope: scopes,
//   });

//   res.redirect(url);
// };

// const redirect = async (req, res) => {
//   //Requesting the code from the redirected url
//   const code = req.query.code;
//   //Get access and refresh token for logging in
//   const { tokens } = await oauth2Client.getToken(code);
//   oauth2Client.setCredentials(tokens);

//   res.send({
//     msg: "You have successfully logged in",
//   });
// };

// //Creating an event
// const schedule = async (req, res) => {
//   await calendar.events.insert({
//     auth: oauth2Client,
//     calendarId: "primary",
//     conferenceDataVersion:1,
//     requestBody: {
//       summary: "Meeting planning ",
//       description: "There is going to be a meet on the following time table.Everyone should be present in the date",
//       start: {
//         dateTime: dayjs(new Date()).add(3, "day").toISOString(),
//         timeZone: "Asia/Kathmandu",
//       },
//       end: {
//         dateTime: dayjs(new Date()).add(4, "day").toISOString(),
//         timeZone: "Asia/Kathmandu",
//       },
//       conferenceData: {
//         createRequest: {
//           requestId: uuidv4()
//         },
//         attendees: [
//           {'email': 'paudelrajbibek@gmail.com'},
//         ],
//       }
//     },
//   });
//   res.send({
//     msg: "Google calender has been updated successfully.",
//   });
// };

// module.exports = { login, redirect, schedule };


//Generating an authentication url
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

//reference token
const REFRESH_TOKEN = "";
const createToken = async (req, res, next) => {
    const { code } = req.body;
    const { tokens } = await oauth2Client.getToken(code);
    res.send(tokens);
};

const createEvent = async (req, res, next) => {
  try {
    const { state, description, location, startDateTime, endDateTime } =
      req.body;

    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    const calendar = google.calendar("v3");
    const response = await calendar.events.insert({
      auth: oauth2Client,
      calendarId: "primary",
      requestBody: {
        state: state,
        description: description,
        location: location,
        colorId: "6",
        start: {
          dateTime: new Date(startDateTime),
        },
        end: {
          dateTime: new Date(endDateTime),
        },
      },
    });
    res.send(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { createToken, createEvent };
