    // $.ajax({
    //     type: "post",
    //     url: "http://airide.xin/deerp/public/staff/Login",
    //     data: {
    //         name: $('#username').val(),
    //         pwd: $("#password").val()
    //     },
    //     dataType: "json",
    //     success: function (response) {
    //         console.log(response)
    //     }
    // });
let yuangong;
    $('#tijiao').click(function () {
        var resltt = {
            name: $('#name').val(),
            age: $('#age').val(),
            telephone: $('#telephone').val(),
            identity_card: $('#identity_card').val(),
            mail: $('#mail').val(),
            location: $('#location').val(),
            h_name: $('#h_name').val(),
            h_telephone: $('#h_telephone').val()
        };
        console.log(resltt)
        $.ajax({
            type: "put",
            url: "http://airide.xin/deerp/public/staffinfo/StaffInfo",
            data: {
                'datas': resltt
            },
            dataType: "json",
            success: function (response) {
                $('#message')[0].innerText = response.message
            },
            error: function () {
                alert('添加失败')
            }
        });
    })

 
    


    // 封装ajax

    // function ajaxFn() {
    //     $.ajax({
    //         type: "post",
    //         url: "http://airide.xin/deerp/public/staffinfo/staffinfoall",
    //         data: 'get',
    //         dataType: "json",
    //         success: function (response) {
    //             console.log(response)
    //         }
    //     });
    // }


    $('#xiugai').click(function () {
        var resltt = {
            name: $('#name').val(),
            age: $('#age').val(),
            telephone: $('#telephone').val(),
            identity_card: $('#identity_card').val(),
            mail: $('#mail').val(),
            location: $('#location').val(),
            h_name: $('#h_name').val(),
            h_telephone: $('#h_telephone').val()
        };
        console.log(resltt)
        console.log(yuangong)
        $.ajax({
            type: "post",
            url: "http://airide.xin/deerp/public/staffinfo/StaffInfo",
            data:{
                id:yuangong,
                data: resltt
            },
            dataType: "json",
            success: function (response) {
                console.log(response)
            }
        });
    })

    $('#addPerson').click(function () {
        $('#name').val('')
        $('#age').val('')
        $('#telephone').val('')
        $('#identity_card').val('')
        $('#mail').val('')
        $('#location').val('')
        $('#h_name').val('')
        $('#h_telephone').val('')
        $('#xiugai').hide()
        $('#tijiao').show()
        $('.biaodan').show()
    })

    $('#username-info').click(function () {
        $('#tijiao').hide()
        $('#xiugai').show()
        $.ajax({
            type: "get",
            url: "http://airide.xin/deerp/public/staffinfo/staffinfoall",
            dataType: "json",
            success: function (response) {
                // response.postStaffInfo('2',"{name:'李四'}")
                response.data.forEach(element => {
                    if (element.name === "张三") {
                        console.log(element)
                        yuangong=id=element.id
                        $('#name').val(element.name)
                        $('#age').val(element.age)
                        $('#telephone').val(element.telephone)
                        $('#identity_card').val(element.identity_card)
                        $('#mail').val(element.mail)
                        $('#location').val(element.location)
                        $('#h_name').val(element.h_name)
                        $('#h_telephone').val(element.h_telephone)
                    }
                });
            }
        });
        $('.biaodan').show()
    });