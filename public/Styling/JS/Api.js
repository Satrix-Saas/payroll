
function ApiCall(arr,name){
    alert("called");
    var data = Object.assign({}, arr)
    console.log(data);
    $.ajax({
      type:'POST',
      dataType: 'json',
      url:'http://192.168.0.100:8074/Satrix_Saas/pub/register/index/index',
      headers : {
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Headers':'Content-Type, X-Auth-Token, Authorization, Origin',
          'token' : 'assss',
          "Access-Control-Allow-Methods": [ "POST", "GET", "OPTIONS","DELETE","PUT"],
          "X-Requested-With": "XMLHttpRequest"
      },
      data:{'data':JSON.stringify(data)},
      success: function(result) {
         var response = result.response;
         if(response.success === 'true'){
            alert(response.message);
         }else{
           alert(response.message);
         }
      },
      error: function(result) {
        alert("error");
      }
  });
}