import './App.css';
import RegisterForm from './components/Register_form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import AdminDashboard from './components/AdminDashboard';
import BasicDetails from './components/BasicDetails';
import EmployeeOnboarding from './components/EmployeeOnboarding';
import Departments from './components/Departments'
import AttendanceEmployee from './components/AttendanceEmployee'
import LeavesEmployee from './components/LeavesEmployee';
import AllEmployees from './components/AllEmployees';
import AllemployeeListView from './components/Admin/PageContentComponents/AllemployeeListView';
import LeavesAdmin from './components/LeavesAdmin';
import LeavesSettings from './components/LeavesSettings';
import AttendanceAdmin from './components/AttendanceAdmin';
import ResetPassword from './components/ResetPassword';
import CompanyDetails from './components/CompanyDetails';
import Documents from './components/Documents';
import MyPaySlip from './components/MyPaySlip';
import Holiday from './components/Admin/HeaderComponents/HolidaysTable';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/register" element={<RegisterForm />} />
         </Routes>
         <Routes>
            <Route exact path="/login" element={<Login />} />
         </Routes>
         <Routes>
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />
            <Route exact path="/resetpassword" element={<ResetPassword/>} />
         </Routes>
         <Routes>
            <Route exact path="/admindashboard" element={<AdminDashboard />} />
           </Routes>
           <Routes>
            <Route exact path="/mypayslip" element={<MyPaySlip/>} />
           </Routes>
           <Routes>
            <Route exact path="/holidays" element={<Holiday/>} />
           </Routes>
         <Routes>
             <Route exact path="/basicdetails" element={<BasicDetails />} /> 
            <Route exact path="/employeeonboarding" element={<EmployeeOnboarding />} />
            <Route exact path="/companydetails" element={<CompanyDetails/>} />
         </Routes>
         <Routes>
            <Route exact path="/all-employees" element={<AllEmployees />} />
            <Route exact path="/employees-list" element={<AllemployeeListView />} />
            <Route exact path="/leaves-employee" element={<LeavesEmployee />} />
            <Route exact path="/leaves-admin" element={<LeavesAdmin />} />
            <Route exact path='/leave-setting' element={<LeavesSettings/>}/>
            <Route exact path="/department" element={<Departments />} />
            <Route exact path="/attendance-employee" element={<AttendanceEmployee />} />
            <Route exact path="/attendance-admin" element={<AttendanceAdmin />} />
            <Route exact path="/documents" element={<Documents/>} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
