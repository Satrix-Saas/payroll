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
                var arr=[];
                $(".valid").remove();

                $("input").keydown(function () {
                        $("input").removeClass("input_focus");
                        $(".valid").remove();
                })

                $("select").click(function () {
                        $("select").removeClass("input_focus");
                        $(".valid").remove();
                })
                //Full Name Validation
                if (full_name != "" && (full_name.match(reg_name))) {
                        arr['name'] = full_name;
                        $("#full_name").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#full_name").addClass("input_focus");
                        $("#full_name").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Valid Name</span>");
                        error=true;
                }

                // Organisation validation
                if (org_name != "") {
                        arr['org_name'] = org_name;
                        $("#org_name").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#org_name").addClass("input_focus");
                        $("#org_name").after("<span class=' valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Organisation Name</span>");
                        error=true;
                }

                //Email Validation
                if (email != "" && (email.match(reg_email))) {
                        arr['email'] = email;
                        $("#email").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#email").addClass("input_focus");
                        $("#email").after(" <span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Valid Email</span>");
                        error=true;
                }

                //phoneNumber Validation
                if (phn_num != "" && (phn_num.match(reg_num))) {
                        arr['cont_no'] = phn_num;
                        $("#phn_num").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#phn_num").addClass("input_focus");
                        $("#phn_num").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Valid Phone Number</span>");
                        error=true;
                }
                //Password validation
                if (password != "" && (password.match(reg_pass))) {
                        $("#password").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#password").addClass("input_focus");
                        $("#password").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Aplhanumeric Password</span>");
                        error=true;        
                }
                //Option Validation
                if (no_of_employees != "") {
                        arr['org_size'] = no_of_employees;
                        $("#no_of_employees").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#no_of_employees").addClass("input_focus");
                        $("#no_of_employees").after("<span class=' valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Must Choose An Option</span>");
                        error=true;
                }

                if (title != "") {
                        arr['emp_type'] = title;
                        $("#title").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                }
                else {
                        $("#title").addClass("input_focus");
                        $("#title").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Must Choose An Option</span>");
                        error=true;
                }

                if(error){
                        return false;
                }else{
                        ApiCall(arr,'register');
                }

        }),

                //Login Validation
                $(document).on('click', "#login", function (e) {

                        e.preventDefault();
                        var login_email = $("#login_email").val();
                        var login_password = $("#password").val();

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
                        }
                        else if (login_email == "") {
                                $("#login_email").addClass("input_focus");
                                $("#login_email").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Email</span>");
                        }
                        else if (login_password == "") {
                                $("#password").addClass("input_focus");
                                $("#password").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Password</span>");
                        }
                        else {

                                $("#login_email").after("<span class=' valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                                $("#password").after("<span class='valid validation-check'><i class='fa fa-check'></i>Looks Good</span>");
                        }

                }),


                // ForgotPassword validation
        $(document).on('click', "#reset", function (e) {
                e.preventDefault();
                var forgotpswd_email = $("#forgotpswd_email").val();
                var reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                $(".valid").remove();
                $("input").keydown(function () {
                        $("input").removeClass("input_focus");
                        $(".valid").remove();
                })

                if (forgotpswd_email != "" && (forgotpswd_email.match(reg_email))) {
                        $("#forgotpswd_email").after("<span class='valid validation-check'><i class='fa fa-check'></i>Reset Link Is Shared Check Email</span>");

                }
                else {
                        $("#forgotpswd_email").addClass("input_focus");
                        $("#forgotpswd_email").after("<span class='valid validation-wrong'><i class='fas fa-exclamation-triangle'></i>Enter Valid Email</span>");
                }
        })

        // $(document).on('click', ".dropdown-item", function (e) {
      
        //         alert("123");

        // })

        $(".header-new-menu").on('click','li', function(){
                $('li div').removeClass('show');
                $(this).find('div').addClass('show');               
        })

        var arr = [];
        $(document).on('click','.form-group input',function(){
                var field_id =  $(this).attr('id');
                
                arr.push(field_id);
                console.log(arr)
                for(i=0;i<arr.length;i++){
                        if(arr[i]==field_id){
                                $('#'+field_id).focus().css({'border':'2px solid #a8c0e2','border-color':'#a8c0e2'});
                        }else{
                                $('#'+arr[i]).focus().css({'border':'','border-color':''});              
                        }
                }
                
  
        });


    
      
})

