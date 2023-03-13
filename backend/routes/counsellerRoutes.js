const express = require("express");

const {
  addTask,
  updateTask,
  createcountry,
  updateCountryPage,
  deleteCountry,
  getCountries,
  addUniversity,
  updateUniversity,
  deleteUniversity,
  addCourses,
  getCourses,
  findUniversity
} = require("../controllers/CounsellerController");
const {sendMessage, verifyUrl} = require("../utils.js/whatsapp")

const router = express.Router();

router.route("/addTask").post(addTask);
router.route("/updateTask/:id").put(updateTask);

router.route("/country").post(createcountry).get(getCountries);
router.route("/countryPage/:id").post(updateCountryPage).delete(deleteCountry);

router.route("/addUniversity").post(addUniversity);
router.route("/getUniversity").get(findUniversity);
router.route("/university/:id").put(updateUniversity).delete(deleteUniversity);

router.route("/addCourses").post(addCourses);
router.route("/getCourses").get(getCourses);

router.route("/webhook1").get(verifyUrl);
router.route("/webhook2").get(sendMessage);





module.exports = router;
