export default function apiurl(argument){
    var api_array = [];
    var custom='http://192.168.0.100:8074/Satrix_Saas/pub/';
    api_array['registration'] = "/register"; 
    api_array['Login'] = '/login'; 
    api_array['forgotThepassword'] = '/forgotpassword'; 
    api_array['resetThepassword'] = '/resetpassword'; 
    api_array['Theadmindashboard'] = '/admindashboard'; 
    api_array['payMyslip'] = '/mypayslip'; 
    api_array['Theholidays'] = '/holidays';
    api_array['Thebasicdetails'] = '/basicdetails';
    api_array['Theemployeeonboarding'] = '/employeeonboarding'; 
    api_array['Thecompanydetails'] = '/companydetails/index';  
    api_array['all-employees'] = '/all-employees'; 
    api_array['Theemployees-list'] = '/employees-list'; 
    api_array['Theleaves-employee'] = '/leaves-employee'; 
    api_array['Theleaves-admin'] = '/leaves-admin';
    api_array['Theleave-setting'] = '/leave-setting'; 
    api_array['Thedepartment'] = '/department'; 
    api_array['Theattendance-employee'] = '/attendance-employee'; 
    api_array['Theattendance-admin'] = '/attendance-admin';


    return api_array[argument];
}