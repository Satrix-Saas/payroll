function ApiCall(arr,name){
    alert("called");
    console.log(arr);
    var data = Object.assign({}, arr)
    $.ajax({
        type: 'POST',
        data : data,
        url: "http://amit.magento.com/registration/index/index",
        success:function(data){
         console.log(data);
        }
    });
}