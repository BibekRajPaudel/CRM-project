const express = require("express");

const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  LeadForm,
  StudentProfile,
  updateStudentProfile,
  countryForm,
  leadFormData,
  leadFormDataById,
  updateLeadFormDataById,
  updateLeadFormStatus,
  testPaymentForm,
  visaPaymentForm,
} = require("../controllers/userController");
const upload = require("../utils.js/multer");
const { createToken, createEvent } = require("../utils.js/googleCalender");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.post(
  "/leadform",
  upload.fields([
    { name: "uploadCitizenship", maxCount: 1 },
    { name: "uploadPassword", maxCount: 1 },
    { name: "uploadMarkSheet", maxCount: 1 },
  ]),
  LeadForm
);
router.route("/leadFormData").get(leadFormData);
router.route("/leadFormData/:id").get(leadFormDataById);
router.route("/leadFormDataById/:id").put(updateLeadFormDataById);
router.route("/updateStatus/:id").put(updateLeadFormStatus);

router.post("/studentprofile", upload.single("image"), StudentProfile);
router.put("/studentprofile/:id", upload.single("image"), updateStudentProfile);

router.route("/Form1").post(countryForm);
router.route("/testPaymentForm").post(testPaymentForm);
router.route("/visaPaymentForm").post(visaPaymentForm);

//calendar
router.get("/", async (req, res, next) => {
  res.send({ message: "ok api is working" });
});
router.post("/create-tokens", createToken);
router.post("/create-event", createEvent);
module.exports = router;
