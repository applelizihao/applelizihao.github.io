$("#reset").click(function () { 
    $('#username').val('')
    $('#password').val('')
 })


 $.ajax({
     type: "get",
     url: "http://airide.xin/deERP/public/staff",
     success: function (response) {
         console.log(response)
     }
 });

$('#submitBtn').click(function () {
    $.ajax({
        type: "post",
        url: "http://airide.xin/deerp/public/staff/Login",
        data: {
            name: $('#username').val(),
            pwd: $("#password").val()
        },
        dataType: "json",
        success: function (response) {
            if (response.code === "2000") {
                console.log(response)
                let {belong,id,name,number}=response.data.Organization
                let {username}=response.data
                window.localStorage.username=username;
                window.localStorage.company=name
                alert('登陆成功')
                window.location.href="index.html"
            } else {
                alert('登陆失败')
            }
        }
    });
})