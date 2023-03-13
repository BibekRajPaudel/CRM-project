const express = require("express");

const {
  addTask,
  updateTask,
  deleteTask,
  createcountry,
  updateCountryPage,
  deleteCountry,
  getCountries,
  addUniversity,
  updateUniversity,
  deleteUniversity,
  addCourses,
  getAllCourses,
  getCoursesById,
  findUniversity,
  universityPrograms,
  getUniversityPrograms,
  getUniById,
  editCourses,
  addClass,
  getAllClasses,
  getClassById,
  editClass,
  deleteClass,
  addTest,
  getAllTest,
  getTestById,
  editTest,
  deleteTest,
  addEmployee,
  getUniversityProgramsById,
  updateProgram,
  deleteProgram,
  uniPB,
  getEmployeeDetails,
} = require("../controllers/CounsellerController");
const { sendMessage, verifyUrl } = require("../utils.js/whatsapp");
const upload = require("../utils.js/multer");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/addTask/:id").post(addTask);
router.route("/deleteTask/:leadId/:taskId").delete(deleteTask);
router.route("/updateTask/:leadId/:taskId").put(updateTask);

router.post("/country", upload.single("flag"), createcountry);
router.route("/getCountry").get(getCountries);
router.route("/countryPage/:id").post(updateCountryPage).delete(deleteCountry);

router.post(
  "/addUniversity",
  upload.fields([
    { name: "profile", maxCount: 1 },
    { name: "background", maxCount: 1 },
  ]),
  addUniversity
);
router.route("/getUniversity").get(findUniversity);
router.route("/getUniById/:id").get(getUniById);
router.route("/university/:id").put(updateUniversity).delete(deleteUniversity);
router.put(
  "/uniPB/:id",
  upload.fields([
    { name: "profile", maxCount: 1 },
    { name: "background", maxCount: 1 },
  ]),
  uniPB
);


router
  .route("/program/:id")
  .post(universityPrograms)
  .get(getUniversityPrograms);
router.route("/program/:id/:programId").get(getUniversityProgramsById).put(updateProgram).delete(deleteProgram);

router.route("/addCourses").post(addCourses);
router.route("/getCourses").get(getAllCourses);
router.route("/getCoursesById/:id").get(getCoursesById);
router.route("/editCourses/:id").put(editCourses);

router.route("/class").post(addClass).get(getAllClasses);
router.route("/class/:id").get(getClassById).put(editClass).delete(deleteClass);

router.route("/test").post(addTest).get(getAllTest);
router.route("/test/:id").get(getTestById).put(editTest).delete(deleteTest);

router.post("/employee", upload.single("image"),isAuthenticatedUser,addEmployee);
router
  .route("/getEmployeeDetails")
  .get(isAuthenticatedUser, getEmployeeDetails);

router.route("/webhook1").get(verifyUrl);
router.route("/webhook2").get(sendMessage);

module.exports = router;
