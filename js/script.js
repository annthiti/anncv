$(document).ready(function() {
    $("#icon1").mouseover(function(){
        $(this).fadeOut(100);
    });
    $("#icon2").mouseout(function(){
        $("#icon1").fadeIn(100);
    });
    $("#icon2").click(function(){
        $("#navmenu").fadeIn(500); 
        $("#close").fadeIn(0);
    });
    $("#icon1").click(function(){
        $("#navmenu").fadeIn(500); 
        $("#close").fadeIn(0);         
    });
    $("#close").click(function(){
        $("#navmenu").fadeOut(500); 
        $("#icon1").fadeIn(100); 
        $("#close").fadeOut(0);             
    });
 });

 