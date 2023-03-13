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
  fileUpload,
  updateLeadFormStatus,
  addCounsellor,
  getCounsellor,
  editCounsellorDetails,
  deleteCounsellor,
  academicUpload,
  updateAcademicDetails,
  updateEnglishTest,
  addEnglishTest,
  addPayment,
  editPayment,
  editPaymentReceipt,
  deletePayment,
  getAcademicDetailsById,
  getEnglishTestById,
  getPaymentById,
  getUserDetails,
  editUserDetails,
  editFiles,
  addReport,
  deleteReport
} = require("../controllers/userController");
const { verifyOtp, resendOtp } = require("../utils.js/OTP");
const upload = require("../utils.js/multer");
const { createToken, createEvent } = require("../utils.js/googleCalender");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/verifyOtp").post(verifyOtp);
router.route("/resendOtp").post(resendOtp);

router.route("/getDetails").get(isAuthenticatedUser,getUserDetails);
router.route("/editDetails").put(isAuthenticatedUser,editUserDetails);
router.put("/addReport", upload.single("pdf"), isAuthenticatedUser,addReport);
router.route("/deleteReport/:reportsId").delete(isAuthenticatedUser,deleteReport);



router.route("/leadform").post(LeadForm);
router.route("/leadFormData").get(leadFormData);
router.route("/leadFormData/:id").get(leadFormDataById);

//File upload for personal documents
router.put(
  "/fileUpload/:id",
  upload.fields([
    { name: "uploadCitizenship", maxCount: 1 },
    { name: "uploadPassport", maxCount: 1 },
  ]),
  fileUpload
);

router.put(
  "/academicDocuments/:leadId/:sheetId",
  upload.single("uploadMarkSheet"),
  academicUpload
);

router.route("/editLeadForm/:id").put(updateLeadFormDataById);
router.route("/updateStatus/:id").put(updateLeadFormStatus);

router.route("/academicDetails/:leadId/:academicDetailsId").put(updateAcademicDetails).get(getAcademicDetailsById);

router.route("/englishTest/:id").post(addEnglishTest);
router.route("/updateEnglishTest/:leadId/:TestId").put(updateEnglishTest).get(getEnglishTestById);

router.post("/payment/:id", upload.single("receipt"), addPayment);
router.route("/editPayment/:leadId/:paymentId").put(editPayment);
router.put("/paymentReceipt/:leadId/:paymentId", upload.single("receipt"), editPaymentReceipt);
router.route("/paymentdelget/:leadId/:paymentId").delete(deletePayment).get(getPaymentById);


router.post("/studentprofile", upload.single("image"), StudentProfile);
router.put("/studentprofile/:id", upload.single("image"), updateStudentProfile);

router.route("/Form1").post(countryForm);

router.route("/addCounsellor/:id").post(addCounsellor);
router.route("/editCounsellorDetails/:id").put(editCounsellorDetails);
router.route("/getAllCounsellors").get(getCounsellor);
router
  .route("/deleteCounsellor/:leadId/:counsellorId")
  .delete(deleteCounsellor);

//calendar
router.get("/", async (req, res, next) => {
  res.send({ message: "ok api is working" });
});
router.post("/create-tokens", createToken);
router.post("/create-event", createEvent);

module.exports = router;
