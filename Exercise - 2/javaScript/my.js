

$("#btnAdd").on("click",function ChangeBorder() {

    var exp1 = /^[a-zA-Z]+$/;
    var result1 = exp1.test($("#txtFullName").val());
    var result2 = exp1.test($("#txtAddress").val());
    var exp2 = /^\d{9}$/;
    var result3 = exp2.test($("#txtNIC").val());

    if(!result1 && !result2 && !result3){

        $('#txtFullName').focus();
        $('#txtFullName').select();
        $('#txtFullName').css("border","2px solid red");
        $('#txtAddress').css("border","2px solid red");
        $('#txtNIC').css("border","2px solid red");
        $("#txtFullName").keypress(function(){
            $('#txtFullName').css("border","2px solid #68C2F9");
        });
        $("#txtAddress").keypress(function(){
            $('#txtAddress').css("border","2px solid #68C2F9");
        });
        $("#txtNIC").keypress(function(){
            $('#txtNIC').css("border","2px solid #68C2F9");
        });

    }
    else if(!result1 && !result2){
        $('#txtFullName').focus();
        $('#txtFullName').select();
        $('#txtFullName').css("border","2px solid red");
        $('#txtAddress').css("border","2px solid red");
        $("#txtFullName").keypress(function(){
            $('#txtFullName').css("border","2px solid #68C2F9");
        });
        $("#txtAddress").keypress(function(){
            $('#txtAddress').css("border","2px solid #68C2F9");
        });
    }else if(!result1 && !result3){
        $('#txtFullName').focus();
        $('#txtFullName').select();
        $('#txtFullName').css("border","2px solid red");
        $('#txtNIC').css("border","2px solid red");
        $("#txtFullName").keypress(function(){
            $('#txtFullName').css("border","2px solid #68C2F9");
        });
        $("#txtNIC").keypress(function(){
            $('#txtNIC').css("border","2px solid #68C2F9");
        });
    }else if(!result2 && !result3){
        $('#txtAddress').focus();
        $('#txtAddress').select();
        $('#txtAddress').css("border","2px solid red");
        $('#txtNIC').css("border","2px solid red");
        $("#txtAddress").keypress(function(){
            $('#txtAddress').css("border","2px solid #68C2F9");
        });
        $("#txtNIC").keypress(function(){
            $('#txtNIC').css("border","2px solid #68C2F9");
        });
    }
    else if(!result1 ){
        $('#txtFullName').focus();
        $('#txtFullName').select();
        $('#txtFullName').css("border","2px solid red");
        $("#txtFullName").keypress(function(){
            $('#txtFullName').css("border","2px solid #68C2F9");
        });
        
    }else if(!result2 ){
        $('#txtAddress').focus();
        $('#txtAddress').select();
        $('#txtAddress').css("border","2px solid red");
        $("#txtAddress").keypress(function(){
            $('#txtAddress').css("border","2px solid #68C2F9");
        });
        
    }else if(!result3){
        $('#txtNIC').focus();
        $('#txtNIC').select();
        $('#txtNIC').css("border","2px solid red");
        $("#txtNIC").keypress(function(){
            $('#txtNIC').css("border","2px solid #68C2F9");
        });
        
    }
});


$("#btnAdd").on("click",function () {

    var exp1 = /^[a-zA-Z]+$/;
    var result1 = exp1.test($("#txtFullName").val());
    var result2 = exp1.test($("#txtAddress").val());
    var exp2 = /^\d{9}$/;
    var result3 = exp2.test($("#txtNIC").val());

    if(!result1 ){
        alert("Inavalid First Name");
        
    }else if(!result2 ){
        alert("Inavalid Address");
       
    }else if(!result3){
        alert("Inavalid NIC");
        
    }else{
        alert("Details Are SAVE");
        var v=0;
        if($("tbody").children().length == 0){
           v = $("tbody").children().length+1; 
        }else{
            var d = $("tbody").children().last().first().text();
            var v = parseInt(d)+1;
        }

        $("tbody").append("<tr><td id='V'>"+v+"</td><td>"+$("#txtFullName").val()+"</td><td>"+$("#txtAddress").val()+"</td><td>"+($("#txtNIC").val()+"V")+"</td><td><div id='image1'></div></td></tr>");  
        $("tfoot").hide();
        $("#txtFullName").val("");
        $("#txtAddress").val("");
        $("#txtNIC").val("");
        $('#txtFullName').focus();
    }  
    $("#tblStudents tbody tr td:last-child").click(function(){
        var row = $(this).parents("tr").remove();
        $(row).fadeOut(400);
        setTimeout(function(){
            $(row).remove();
        },500);   
    });

    

    
});

    






        
    