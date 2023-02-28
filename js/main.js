$(function(){

    $("input[name=options-outlined]").click(function () {    
        if($(this).val() == "en"){
            $(location).attr('href',"https://dnmjustme.github.io/danielnavarro/index-en.html");
        }else{
            $(location).attr('href',"https://dnmjustme.github.io/danielnavarro/index.html");
        }
    });
  
  });