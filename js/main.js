$(function(){

    $("input[name=options-outlined]").click(function () {    
        if($(this).val() == "en"){
            $(location).attr('href',"index-en.html");
        }else{
            $(location).attr('href',"index.html");
        }
    });
  
  });