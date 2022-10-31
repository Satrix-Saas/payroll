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
         </Routes>
         <Routes>
            <Route exact path="/admindashboard" element={<AdminDashboard />} />
           </Routes>
         <Routes>
             <Route exact path="/basicdetails" element={<BasicDetails />} />
            <Route exact path="/employeeonboarding" element={<EmployeeOnboarding />} />
         </Routes>
         <Routes>
            <Route exact path="/department" element={<Departments />} />
            <Route exact path="/attendance-employee" element={<AttendanceEmployee />} />
            <Route exact path="/leaves-employee" element={<LeavesEmployee />} />
            <Route exact path="/all-employees" element={<AllEmployees />} />
            <Route exact path="/employees-list" element={<AllemployeeListView />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
