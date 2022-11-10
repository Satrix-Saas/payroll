
$(document).ready(function () {
        // Registeration validation

        $(document).on('click', "#register", function (e) {

                e.preventDefault();
                var full_name = $("#full_name").val();
                var org_name = $("#org_name").val();
                var email = $("#email").val();
                var phn_num = $("#phn_num").val();
                var no_of_employees = $("#no_of_employees").val();
                var title = $("#title").val();
                var password = $("#password").val();
                //Regression Expression for validation
                var reg_name = /^[A-Za-z]+$/;
                var reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                var reg_num = /^\d{10}$/;
                var reg_pass = /^[0-9a-zA-Z]+$/;

                var error = false;
                var arr = [];
                $(".valid").remove();
                $("input").keydown(function () {
                        $("input").removeClass("input_focus");
                        $(".form-select").removeClass("input_focus");
                        $(".valid").remove();
                })

                $("input, .form-select").click(function () {
                        $("input").removeClass("input_focus");
                        $(".form-select").removeClass("input_focus");
                        $(".valid").remove();
                })
                //Full Name Validation
                if (full_name != "" && (full_name.match(reg_name))) {
                        arr['username'] = full_name;
                        $("#full_name").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#full_name").addClass("input_focus");
                        $("#full_name").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Valid Name</span>");

                        error = true;
                }

                // Organisation validation
                if (org_name != "") {
                        arr['org_name'] = org_name;
                        $("#org_name").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#org_name").addClass("input_focus");
                        $("#org_name").after("<span class=' valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Organisation Name</span>");

                        error = true;
                }

                //Email Validation
                if (email != "" && (email.match(reg_email))) {
                        arr['email'] = email;
                        $("#email").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#email").addClass("input_focus");
                        $("#email").after(" <span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Valid Email</span>");
                        error = true;
                }

                //phoneNumber Validation
                if (phn_num != "" && (phn_num.match(reg_num))) {
                        arr['contact'] = phn_num;
                        $("#phn_num").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#phn_num").addClass("input_focus");
                        $("#phn_num").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Valid Phone Number</span>");
                        error = true;
                }
                //Password validation
                if (password != "" && (password.match(reg_pass))) {
                        arr['password'] = password;
                        $("#password").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#password").addClass("input_focus");
                        $("#password").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Aplhanumeric Password</span>");
                        error = true;
                }
                //Option Validation
                if (no_of_employees != "") {
                        arr['org_size'] = no_of_employees;
                        $("#no_of_employees").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#no_of_employees").addClass("input_focus");
                        $("#no_of_employees").after("<span class=' valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Must Choose An Option</span>");
                        error = true;
                }

                if (title != "") {
                        arr['emp_type'] = title;
                        $("#title").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#title").addClass("input_focus");
                        $("#title").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Must Choose An Option</span>");
                        error = true;
                }
                var url = 'http://192.168.0.100:8074/Satrix_Saas2/pub/register/index/index';
                if (error) {
                        return false;
                } else {
                        var response = ApiCall(arr,url);
                               if(response){
                                   window.location.href = "http://localhost:3000/basicdetails";
                               }

                }

        }),

                //Login Validation
                $(document).on('click', "#login", function (e) {

                        e.preventDefault();
                        var login_email = $("#login_email").val();
                        var login_password = $("#password").val();
                        var error = false;
                        var arr = [];

                        $(".valid").remove();
                        $("input").keydown(function () {
                                $("input").removeClass("input_focus");
                                $(".valid").remove();
                        })

                        if (login_email == "" && login_password == "") {
                                $("#login_email").addClass("input_focus");
                                $("#login_email").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Email</span>");
                                $("#password").addClass("input_focus");
                                $("#password").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Password</span>");
                                error = true;
                        }
                        else if (login_email == "") {
                                $("#login_email").addClass("input_focus");
                                $("#login_email").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Email</span>");
                                error = true;
                        }
                        else if (login_password == "") {
                                $("#password").addClass("input_focus");
                                $("#password").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Password</span>");
                                error = true;
                        }
                        else {

                                arr['email'] = login_email;
                                arr['password'] = login_password;
                                $("#login_email").after("<span class=' valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                                $("#password").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                                error = false;
                        }
                        var url = 'http://192.168.0.100:8074/Satrix_Saas2/pub/login/index/index';

                        if (error) {
                                return false;
                        } else {

                                var response = ApiCall(arr, url);
                                if (response) {
                                        window.location.href = "http://localhost:3000/admindashboard";
                                }
                        }
                }),


                // ForgotPassword validation
                $(document).on('click', "#reset", function (e) {
                        e.preventDefault();
                        var new_pass = $("#new_pass").val();
                        var con_pass = $("#con_pass").val();
                        var arr = [];
                        arr['email'] = 'satrixsaas@gmail.com';
                        arr['new_password'] = new_pass;
                        arr['confirm_password'] = con_pass;
                        error = false;

                        var url = 'http://192.168.0.100:8074/Satrix_Saas2/pub/login/reset/password';
                        if(error){
                                return false;
                        }else{
                               var response = ApiCall(arr,url);
                               if(response){
                                   window.location.href = "http://localhost:3000/admindashboard";
                               }
                        }
                });
                // Employeeonboarding
                $(document).on('click', "#add_emp", function (e) {


                        e.preventDefault();
                        var card = "employee";
                        var name = $("#name").val();
                        var com_email = $("#com_email").val();
                        var hire_date = $("#hire_date").val();
                        var title = $("#title").val();
                        var department = $("#department").val();
                        var manager = $("#manager").val();
                        var salary = $("#salary").val();
                        var location =$("#location").val();
                        var error = false;
                        var arr=[];
                        arr['emp_type'] = card;
                        arr['emp_name'] = name;
                        arr['emp_email'] = com_email;
                        arr['emp_hire_date'] = hire_date;
                        arr['emp_post'] = title;
                        arr['emp_dept'] = department;
                        arr['mng_name'] = manager;
                        arr['emp_salary'] = salary;
                        arr['emp_location'] = location;
        
        
                //         alert("123");
                        var url = 'http://192.168.0.100:8074/Satrix_Saas2/pub/employee/index/index';
        
                // })
                        if(error){
                                return false;
                        }else{
        
                               var response = ApiCall(arr,url);
                               if(response){
                                   window.location.href = "http://localhost:3000/admindashboard";
                               }
                        }
                });
        // Basic details company
                $(document).on('click', "#sub_btn", function (e) {
                        e.preventDefault();
                        var comname = $("#com_name").val();
                        var brandname = $("#brand_name").val();
                        var addr = $("#address").val();
                        var states = $("#state").val();
                        var pin = $("#pincode").val();
                        var pannum = $("#pan_num").val();
                        var tannum = $("#tan_num").val();
                        var gstins = $("#gstin").val();

                        var arr = [];
                        arr['cmp_name'] = comname;
                        arr['cmp_brand_name'] = brandname;
                        arr['cmp_address'] = addr;
                        arr['state'] = states;
                        arr['pincode'] = pin;
                        arr['pan_num'] = pannum;
                        arr['tan_num'] = tannum;
                        arr['gstin'] = gstins;
                        error = false;

                        var url = 'http://192.168.0.100:8074/Satrix_Saas2/pub/company/index/index';
                        if(error){
                                return false;
                        }else{
                                var response = ApiCall(arr,url);
                                if(response){
                                        window.location.href = "http://localhost:3000/admindashboard";
                                }
                        }
                });
       //Add holiday details
                $(document).on('click', "#holiday_btn", function (e) {
                        e.preventDefault();
                        var holi_name = $("#name_holiday").val();
                        var holi_date = $("#holiday_date").val();
                        var arr = [];
                        arr['holiday_name'] = holi_name;
                        arr['holiday_date'] = holi_date;
                        error = false;

                        var url = 'http://192.168.0.100:8074/Satrix_Saas2/pub/employee/holiday/holiday';
                        if(error){
                                return false;
                        }else{
                        var response = ApiCall(arr,url);
                        if(response){
                                window.location.href = "http://localhost:3000/admindashboard";
                        }
                        }
                });
                // Leaves details
                //get number of date
                $(document).on('mouseout', ".datetimepicker", function (e) {
                        e.preventDefault();
                        var leavefrom = $("#leave_from").val();
                        var fromto = $("#from_to").val();
                        if(leavefrom!=="" && fromto!==""){
                                var dateLeaveFrom = moment(leavefrom, 'DD/MM/YYYY').toDate();
                                var dateFromTo = moment(fromto,'DD/MM/YYYY').toDate();
                                var diffInDay = Math.abs(Math.round((dateFromTo.getTime() - dateLeaveFrom.getTime())/ (86400000)));
                                $("#num_day").val(diffInDay);  
                                $("#leave_remain").val(0);
                        }
                });
                $(document).on('click', "#leave_btn", function (e) {
                        e.preventDefault();
                        var leavetype = $("#leave_type").val();
                        var leavefrom = $("#leave_from").val();
                        var fromto = $("#from_to").val();
                        var leavefrom = leavefrom.split("/").reverse().join("-");
                        var fromto = fromto.split("/").reverse().join("-");
                        var numday = parseInt($("#num_day").val());
                        var leaveremain = $("#leave_remain").val();
                        var leavereason = $("#leave_reason").val();
                        var arr = [];
                        arr['emp_id'] = 10;
                        arr['leave_name'] = leavetype;
                        arr['from'] = leavefrom;
                        arr['to'] = fromto;
                        arr['no_of_day'] = numday;
                        arr['remaining_leave'] = leaveremain;
                        arr['reason'] = leavereason;
                        // console.log(moment());
                        error = false;
                        
                        var url = 'http://192.168.0.100:8074/Satrix_Saas2/pub/leave/index/index';
                        if(error){
                                return false;
                        }else{
                        var response = ApiCall(arr,url);
                        if(response){
                                window.location.href = "http://localhost:3000/admindashboard";
                        }
                        }
                });
        // Department details
                $(document).on('click', "#depSbtn", function (e) {
                        e.preventDefault();
                        var dpt_name = $("#dept_name").val();
                        var arr = [];
                        arr['dept_name'] = dpt_name;
                        error = false;

                        var url = 'http://192.168.0.100:8074/Satrix_Saas2/pub/company/department/department';
                        if(error){
                                return false;
                        }else{
                        var response = ApiCall(arr,url);
                        if(response){
                                window.location.href = "http://localhost:3000/admindashboard";
                        }
                        }
                });
        // Attendance details punching 
                $(document).on('click', "#punch_btn", function (e) {
                        e.preventDefault();
                        var pun_date = $("#punching_date").text();
                        var leavefrom = pun_date.split("-").reverse().join("-");
                         var new_date_time = $("#punch_date_time").text();
                        var dt = new Date();
                        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

                        var arr = [];
                        arr ['emp_id'] = 10;
                        arr ['punch_date'] = leavefrom;
                        arr ['punch_In'] = time;
                        error = false;

                        var url = 'http://192.168.0.100:8074/Satrix_Saas2/pub/attendance/index/index';
                        if(error){
                                return false;
                        }else{
                        var response = ApiCall(arr,url);
                        if(response){
                                window.location.href = "http://localhost:3000/admindashboard";
                        }
                        }
                });
    //punching out
                $(document).on('click', "#punchout_btn", function (e) {
                        e.preventDefault();
                        var pun_date = $("#punching_date").text();
                        var leavefrom = pun_date.split("-").reverse().join("-");
                        var dt = new Date();
                        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

                        var arr = [];
                        arr ['punch_date'] = leavefrom;
                        arr ['punch_out'] = time;
                        error = false;

                        var url = 'http://192.168.0.100:8074/Satrix_Saas2/pub/attendance/index/index';
                        if(error){
                                return false;
                        }else{
                        var response = ApiCall(arr,url);
                        if(response){
                                window.location.href = "http://localhost:3000/admindashboard";
                        }
                        }
                });




        $(".header-new-menu").on('click', 'li', function () {
                $('li div').removeClass('show');
                $(this).find('div').addClass('show');
        })

        var arr = [];
        $(document).on('focus', '.form-group input , .form-select', function () {
                var field_id = $(this).attr('id');

                arr.push(field_id);
                console.log(arr)
                for (i = 0; i < arr.length; i++) {
                        if (arr[i] == field_id) {
                                $('#' + field_id).addClass(".focus");
                        } else {
                                $('#' + arr[i]).removeClass(".focus");
                        }
                }
        });

        $(document).on('click', '.submenu', function () {
                var classname = $(this).find('a').attr('class');
                if (typeof classname == 'undefined') {
                        $(this).find('a').toggleClass('subdrop');
                        $(this).find('ul').css('display', 'block');
                } else {
                        $(this).find('a').toggleClass('active');
                        $('.submenu').find('ul').css('display', 'none');
                        $(this).find('ul').css('display', 'block');
                }
        });

        $(document).on('mouseenter','#dashboard',function(){
                $('.submenu_dashboard').css('background-color','rgba(32, 33, 36, 0.059');
        });
        $(document).on('mouseleave','#dashboard',function(){
                $('.submenu_dashboard').css('background-color','');
        });

        // var count = 0;
        // $(document).on('click', '#mobile_btn', function () {
        //         // alert("hit");
        //         count++;
        //         if ($("html").hasClass("menu-opened") && count == 1) {
        //                 alert(count);
        //                 // $("html").addClass('menu-opened');
        //                 $(".main-wrapper").addClass('slide-nav');
        //                 $("#sidebar").show();
        //         }
        //         else {
        //                 alert(count);
        //                 $(".main-wrapper").toggleClass('slide-nav');
        //                 count = 0;
        //         }
        // })

        // $(document).on('click', '.submenu li a', function () {
        //         //        alert("submenu li a");
        //         if (count > 0) {
        //                 // alert(count);
        //                 $(".main-wrapper").removeClass("slide-nav");
        //         }
        //         count = 0;
        // })

        $('#editcred').on('show.bs.modal', function (e) {
                $("#add_employee").removeClass("show");
        })
        $('#editcred').on('hide.bs.modal', function (e) {
                $("#add_employee").addClass("show");
        })
        $(document).on('click', '#submit_editcred', function () {
                $('#editcred').modal('toggle');
        })

        $(document).on('click', '.datetimepicker', function () {
                $(".label").remove();
        })

        // $(document).on('click', '.selection', function () {
        //         alert("click");
        //         $(".select2-results").show();
        // })
        // $(document).on('mouseleave', '.selection', function () {
        //         alert("leave");
        //         $(".select2-results").hide();
        // })

});


