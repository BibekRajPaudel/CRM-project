const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils.js/errorHandler");

const verifyUrl = catchAsyncErrors(async (req, res, next) => {
  const verify_token = "bibekcode";

  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode == "subscribe" && token == verify_token) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.status(403);
    }
  }
});

const sendMessage = catchAsyncErrors(async (req, res, next) => {
  let body_param = req.body;

  console.log(JSON.stringify(body_param, null, 2));

  if (body_param.object) {
    console.log("inside body param");
    if (
      body_param.entry &&
      body_param.entry[0].changes &&
      body_param.entry[0].changes[0].value.messages &&
      body_param.entry[0].changes[0].value.messages[0]
    ) {
      let phon_no_id =
        body_param.entry[0].changes[0].value.metadata.phone_number_id;
      let from = body_param.entry[0].changes[0].value.messages[0].from;
      let msg_body = body_param.entry[0].changes[0].value.messages[0].text.body;

      console.log("phone number " + phon_no_id);
      console.log("from " + from);
      console.log("boady param " + msg_body);

      axios({
        method: "POST",
        url:
          "https://graph.facebook.com/v13.0/" +
          phon_no_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: from,
          text: {
            body: "Hi.. I'm Bibek, your message is " + msg_body,
          },
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
  });



module.exports = {
    verifyUrl,
    sendMessage
}
    
