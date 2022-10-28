function ApiCall(arr,name){
    alert("called");
    console.log(arr);
    var data = Object.assign({}, arr)
    $.ajax({
    type:'POST',
    url:'http://192.168.0.100:8074/Satrix_Saas/pub/register/index/index',
   data:data,
   dataType : 'json',
   cors: false ,
    headers : {
      'Content-type' : 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'Content-Type, X-Auth-Token, Authorization, Origin',
      'token' : 'assss',
      "Access-Control-Allow-Methods": [ "POST", "GET", "OPTIONS","DELETE","PUT"],
  },
    cache:false,
    crossDomain:true,
    async:false,
    success: function(data, status, xhr) {
      console.log(data);
      alert(data);
    }
  });
}