/*var uri_r = 'http://192.168.7.102/services/regpersonas.php'
var uri_l = 'http://192.168.7.102/services/listpersonas.php'*/

$(function() {
  $("button").click(function(){
        $.post('http://192.168.7.102/services/regpersonas.php',{
           datos:{
              nombres:$("#nombre").val(),
              apellidos:&("#apellido").val(),
              correo:$("#correo").val(),
              cedula:$("#cedula").val(),
              tel:$("#telefono").val(),
              dir:$("#direccion").val()
             }
        });     
  });  
})



/*
  $("input").each(function(){
    if (input =0){
      return 
     $( "#dialogerror" ).dialog();


      $( "#dialog" ).dialog();
    else  

    };*/
