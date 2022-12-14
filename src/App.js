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
import MyPaySlip from './components/MyPaySlip';
import Holiday from './components/common_component/HolidayTable';
import apiurl from './ApiUrl';

import RunPayRoll from './components/utility/RunPayRoll';
import Documents from './components/Documents';
import Profile from './components/Profile';





function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path={apiurl('registration')} element={<RegisterForm />} />
            <Route exact path={apiurl('Login')} element={<Login />} />
            <Route exact path={apiurl('forgotThepassword')} element={<ForgotPassword />} />
            <Route exact path={apiurl('resetThepassword')} element={<ResetPassword />} />
            <Route exact path={apiurl('Thedashboard')} element={<AdminDashboard />} />

           </Routes>
           <Routes>
            <Route exact path={apiurl('payMyslip')} element={<MyPaySlip/>} />
           </Routes>
           <Routes>
            <Route exact path={apiurl('Theholidays')} element={<Holiday/>} />
           </Routes>
         <Routes>
             <Route exact path={apiurl('Thebasicdetails')} element={<BasicDetails />} /> 

            <Route exact path={apiurl('Theemployeeonboarding')} element={<EmployeeOnboarding />} />
            <Route exact path={apiurl('Thecompanydetails')} element={<CompanyDetails />} />
            <Route exact path={apiurl('all-employees')} element={<AllEmployees />} />
            <Route exact path={apiurl('Theemployees-list')} element={<AllemployeeListView />} />
            <Route exact path={apiurl('Theleaves-employee')} element={<LeavesEmployee />} />
            <Route exact path={apiurl('Theleaves-admin')} element={<LeavesAdmin />} />
            <Route exact path={apiurl('Theleave-setting')} element={<LeavesSettings />} />
            <Route exact path={apiurl('Thedepartment')} element={<Departments />} />
            <Route exact path={apiurl('Theattendance-employee')} element={<AttendanceEmployee />} />
            <Route exact path={apiurl('Theattendance-admin')} element={<AttendanceAdmin />} />
            <Route exact path={apiurl('Therunpayroll')} element={<RunPayRoll />} />
            <Route exact path={apiurl('Thedocumentation')} element={<Documents/>} />
            <Route exact path={apiurl('TheAccount')} element={<Profile/>} />

         </Routes>
      </BrowserRouter>
   );
}

export default App;
