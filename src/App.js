import './App.css';
import RegisterForm from './components/Register_form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import AdminDashboard from './components/AdminDashboard';

import BasicDetails from './components/BasicDetails';
import EmployeeOnboarding from './components/EmployeeOnboarding';
// import Apps from './components/test/apps';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/register" element={<RegisterForm/>}/>
          </Routes>
           <Routes>
              <Route exact path="/login" element={<Login/>}/>
           </Routes>
           <Routes>
              <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
           </Routes>
           <Routes>
              <Route exact path="/admindashboard" element={<AdminDashboard/>}/>
           </Routes>
           <Routes>
              <Route exact path="/basicdetails" element={<BasicDetails/>}/>
           </Routes>
           <Routes>
              <Route exact path="/employeeonboarding" element={<EmployeeOnboarding/>}/>
           </Routes>
           

         
      </BrowserRouter>
  );
}

export default App;
