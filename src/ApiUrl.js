
export default function apiurl(argument){
  
    var api_array = [];
    var custom='http://192.168.0.100:8074/Satrix_Saas/pub/';
    api_array['registration'] = "/register"; 
    api_array['Login'] = '/login'; 
    api_array['forgotThepassword'] = '/forgotpassword'; 
    api_array['resetThepassword'] = '/resetpassword'; 
    api_array['Thedashboard'] = '/dashboard'; 
    api_array['payMyslip'] = '/mypayslip'; 
    api_array['Theholidays'] = '/holidayTable';
    api_array['Thebasicdetails'] = '/basicdetails';
    api_array['Theemployeeonboarding'] = '/employeeonboarding'; 
    api_array['Thecompanydetails'] = '/companydetails';  
    api_array['all-employees'] = '/all-employees'; 
    api_array['Theemployees-list'] = '/employees-list'; 
    api_array['Theleaves-employee'] = '/leaves-employee'; 
    api_array['Theleaves-admin'] = '/leaves-admin';
    api_array['Theleave-setting'] = '/leave-setting'; 
    api_array['Thedepartment'] = '/department'; 
    api_array['Theattendance-employee'] = '/attendance-employee'; 
    api_array['Theattendance-admin'] = '/attendance-admin';
    api_array['Therunpayroll'] = '/runpayroll';
    api_array['Thedocumentation'] = '/documents';
    api_array['TheAccount'] = '/myaccount';


    // api_array['register_url'] = custom+'/register/index/index';
    // api_array['Login_url'] = custom+'/login/index/index';

    return api_array[argument];
}