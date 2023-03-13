import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ApplicantProfile from "../Pages/ApplicantProfile";
import Applicants from "../Pages/Applicants";
import Dashboard from "../Pages/Dashboard";
import Loginregister from "../Pages/Loginregister";
import "./App.css";
import Calendar from "../Components/GoogleCalendar/Calendar";
import Forgot from "../Components/LoginComponent/ForgotPassword/ForgotPassword";
import ResetPassword from "../Components/LoginComponent/ResetPassword/ResetPassword";
import UniveristyPages from "../Pages/UniversityPages";
import EmployComponent from "../Components/EmploySection/EmployComponent";
// Context import
import { AuthContext } from "../Helper/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import UniversityDetail from "../Pages/UniversityDetail";
import UniversityCourseForm from "../Components/UniveristyComponent/UniveristyForm/UniversityCourseForm";
import Program from "../Components/UniveristyComponent/UniveristyTabgroupComponent/Program";
import ClassProgram from "../Pages/ClassProgram";
import EmployeeProfile from "../Pages/EmployeeProfile";
import ProtectedRoutes from "../Helper/ProtectedRoutes";
import Country from "../Pages/Country";
import CoursePage from "../Pages/CoursePage";
import SuccessPage from "../Pages/SuccessPage";

function App() {
  // State to get single lead data

  const [leadData, setLeadData] = useState([]);
  // Modal for document upload
  const [addPersonalDocument, setAddPersonalDocument] = useState(false);
  const [addAcademicDocument, setAddAcademicDocument] = useState(false);
  const [addFinancialDocument, setAddFinancialDocument] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [addEnglishTest, setAddEnglishTest] = useState(false);
  const [editEnglishTest, setEditEnglishTest] = useState(false);
  const [addCounselor, setAddCounselor] = useState(false);
  const [addPayment, setAddPayment] = useState(false);
  const [editPaymentDetails, setEditPaymentDetails] = useState(false);
  const [editPaymentReceipt, setEditPaymentReceipt] = useState(false);
  const [editAcademicDetails, setEditAcademicDetails] = useState(false);
  const [editPersonalDetails, setEditPersonalDetails] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/leadFormData").then((res) => {
      setLeadData(res.data);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Loginregister />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset/:token" element={<ResetPassword />} />
        </Routes>
        <AuthContext.Provider value={{
          leadData, addPersonalDocument, addAcademicDocument, addFinancialDocument, addTask, addCounselor, editPersonalDetails, addEnglishTest, editEnglishTest, editAcademicDetails, addPayment, editPaymentDetails, editPaymentReceipt, setAddPayment, setLeadData,
          setAddPersonalDocument, setAddAcademicDocument, setAddFinancialDocument, setAddTask, setAddCounselor, setEditPersonalDetails, setAddEnglishTest, setEditEnglishTest, setEditAcademicDetails, setEditPaymentDetails, setEditPaymentReceipt
        }}>
          <Routes>
            {/*course form */}
            <Route element={<ProtectedRoutes />}>
              <Route path='/classPages' element={<ClassProgram />} />
              <Route path='/employee/profile' element={<EmployeeProfile />} />
              {/* class*/}

              <Route path='/employee' element={<EmployComponent />} />
              <Route path='/university' element={<UniveristyPages />} />
              <Route path='/classprogram' element={<ClassProgram />} />
              {/*course form */}
              <Route path="/course" element={<CoursePage />} />
              <Route path="/country" element={<Country />} />
              <Route path="/employee" element={<EmployComponent />} />
              <Route path="/university" element={<UniveristyPages />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Navigate to="/dashboard" />} />
              {/* <Route path="/manager" element={<Manager />} /> */}
              <Route path="/applicants" element={<Applicants />} />
              <Route path="/succeeded" element={<SuccessPage />} />
              <Route path="/profile/:id" element={<ApplicantProfile />} />
              <Route
                path="/universitydetail/:id"
                element={<UniversityDetail />}
              />
              <Route path="/program:id" element={<Program />} />
              <Route
                path="/universitycourseform"
                element={<UniversityCourseForm />}
              />
            </Route>
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
