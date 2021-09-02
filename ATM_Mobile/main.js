function showe()
{
    $("#begin").show();
    $("#indicator2").hide();
    $("#indicator3").hide();
    $("#loading").hide();
    $("#cash1").hide();
    $("#Cash2").hide();

    clearInterval(ani);
}
      function showes()
{
    $("#result").show();

    $("#bill").hide();
    $("#bil1").hide();
    $("#cash1").hide();
    $("#Cash2").hide();
     $("#indicator2").hide();
     $("#indicator3").hide();
    
    clearInterval(mani);
} 
            
$(document).ready(function(){

             
             ani = setInterval("showe()", 9000);
             $("#loading").show();
             

 $("#begin").hide();
    
    $(".welcome").hide();
   $("#success").hide ();
    $("#deti").hide();
    $("#error").hide();
    $("#chgpin").hide();
    $("#balen").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide();
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
    $("#pinwrg").hide();
    $("#beginwrg").hide();
    $("#bill").hide();
    $("#bil1").hide();
    $("#cash1").hide();
    $("#Cash2").hide();
     $("#indicator2").hide();
     $("#indicator3").hide();
    
$("#btne2").click(function(){
  
    var accno= document.getElementById("pass2").value;
    // var accno="0886988633";
    // var accno1=0776307022;

    var accs = $(".pass2").val();
    if(accno==accs) 
    {
        $(".welcome").show("fast");
         $("#begin").hide("fast");
         $("#cash1").hide();
         $("#Cash2").hide();
          $("#indicator2").hide();
          $("#indicator3").hide();
         navigator.vibrate(100);
    }

    else
    {
        $("#beginwrg").show("fast");
        $("#begin").hide("fast");
        $("#cash1").hide();
        $("#Cash2").hide();
         $("#indicator2").hide();
         $("#indicator3").hide();
        navigator.vibrate(100);
    }
});
$("#bac4").click(function(){
    $("#begin ").show();
     $("#indicator2").hide();
     $("#indicator3").hide();
    $("#beginwrg").hide ();
    $("#cash1").hide();
    $("#Cash2").hide();

    navigator.vibrate(100);
    });
$("#btne1").click(function(){
      var pin= document.getElementById("pass").value;
    // var pin=98765;
    // var pin1=9876;

    var pins = $(".pass").val();
    if(pins==pin)
    {
        $("#success").show ();
        $(".welcome").hide("fast");
        $("#cash1").hide();
        $("#Cash2").hide();
         $("#indicator2").hide();
         $("#indicator3").hide();
        navigator.vibrate(100);
    }
   
    else
    {
        $("#pinwrg").show ();
        $(".welcome").hide("fast");
        $("#cash1").hide();
        $("#Cash2").hide();
         $("#indicator2").hide();
         $("#indicator3").hide();
        navigator.vibrate(100);
    }
 });

$("#bac3").click(function(){
    $(".welcome ").show();
    
    $("#pinwrg").hide ();
    $("#cash1").hide();
    $("#Cash2").hide();
     $("#indicator2").hide();
     $("#indicator3").hide();
    navigator.vibrate(100);
    });

$("#backs").click(function(){
    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#balen").hide();
    $("#chgpin").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#result2").hide();
    $("#depst").hide();
    $("#final").show();
    $("#cash1").hide();
    $("#Cash2").hide();
     $("#indicator2").hide();
     $("#indicator3").hide();
    navigator.vibrate(100);
    }); 
  
$("#det").click(function(){

    $(".welcome").hide();
    $("#success").hide();
    $("#deti").show();
    $("#error").hide();
    $("#result").hide();
    $("#chgpin").hide();
    $("#balen").hide();
    $("#witdrw").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
    $("#cash1").hide();
    $("#Cash2").hide();
     $("#indicator2").hide();
     $("#indicator3").hide();
    
    navigator .vibrate (100);
$("#back").click(function(){
    $(".welcome").hide();
    $("#success").show();
    $("#deti").hide();
    $("#error").hide();
    $("#chgpin").hide();
    $("#balen").hide();
    $("#witdrw").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
    $("#cash1").hide();
    $("#Cash2").hide();
    $("#result").hide();
     $("#indicator2").hide();
     $("#indicator3").hide();
    navigator .vibrate (100);
  });
  
  });
$("#otr").click(function(){
    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").show();
    $("#chgpin").hide();
    $("#balen").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
    $("#cash1").hide();
    $("#Cash2").hide();
    $("#witdrw").hide();
     $("#indicator2").hide();
     $("#indicator3").hide();
    navigator .vibrate (100);
$("#back2").click(function(){
    $(".welcome").hide();
    $("#success").show();
    $("#deti").hide();
    $("#error").hide();
    $("#chgpin").hide();
    $("#balen").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
     $("#indicator2").hide();
     $("#indicator3").hide();
    $("#cash1").hide();
    $("#Cash2").hide();
    navigator .vibrate (100);
  });
  
  });
$("#cpin").click(function(){
    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#chgpin").show();
    $("#balen").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
     $("#indicator2").hide();
     $("#indicator3").hide();
    $("#cash1").hide();
    $("#Cash2").hide();
    navigator .vibrate (100);
$("#back3").click(function(){
    $(".welcome").hide();
    $("#success").show();
    $("#deti").hide();
    $("#error").hide();
    $("#balen").hide();
    $("#chgpin").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
    $("#cash1").hide();
    $("#Cash2").hide();
    $("#witdrw").hide();
     $("#indicator2").hide();
     $("#indicator3").hide();
    navigator .vibrate (100);
  });
  
  });
$("#mst").click(function(){
    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#chgpin").hide();
    $("#balen").show();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#result2").hide();
    $("#final").hide();
    $("#cash1").hide();
    $("#Cash2").hide();
    
     $("#indicator2").hide();
     $("#indicator3").hide();
    $("#witdrw").hide();
    $("#depst").hide();
    navigator .vibrate (100);
$("#back4").click(function(){
    $(".welcome").hide();
    $("#success").show();
    $("#deti").hide();
    $("#error").hide();
    $("#balen").hide();
    $("#chgpin").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
    $("#cash1").hide();
    $("#Cash2").hide();
     $("#indicator2").hide();
     $("#indicator3").hide();
    
    navigator .vibrate (100);
  });
  
  });
  
$("#wdr").click(function(){
    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#chgpin").hide();
    $("#balen").hide();
    $("#witdrw").show();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
    $("#cash1").hide();
    
     $("#indicator2").hide();
    navigator .vibrate (100);
$("#back5").click(function(){
    $(".welcome").hide();
    $("#success").show();
    $("#deti").hide();
    $("#error").hide();
    $("#balen").hide();
    $("#chgpin").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
     $("#indicator2").hide();
    
    $("#cash1").hide();
    navigator .vibrate (100);
    });
    });
$("#btns2").click(function(){
    
    $("#wdt3").empty();
    $("#wdt5").empty();
    $("#wdt7").empty();
    $("#wdt9").empty();
    var bal=50000;
    var str = $("#witdrwno").val();
    var chr=2.00;
    if(bal>=str)
    {
    var sub= bal-str-chr;
    if(str=="")
    {
        str=0;
    }
    mani = setInterval("showes()", 7000);
             $("#bill").show();
             $("#cash1").show();
              $("#indicator2").show();
    $("#wdt3").append(str);
    $("#wdt5").append(sub);
    $("#wdt7").append(bal);
    $("#wdt9").append(chr);
    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#chgpin").hide();
    $("#balen").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
    navigator.vibrate(100);
    
$("#back6").click(function(){
    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#balen").hide();
    $("#chgpin").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").show();
    $("#cash1").hide();
     $("#indicator2").hide();
     
    navigator.vibrate(100);
    });
    }
    else
    {
         $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#chgpin").hide();
    $("#balen").hide();
    $("#witdrw").hide();
    $("#wrong").show();
    $("#result").hide("fast");
    $("#final").hide();
    $("#cash1").hide();
    $("#depst").hide();
    $("#result2").hide();
     $("#indicator2").hide();
    
    navigator.vibrate(100);
    
$("#back7").click(function(){
    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#balen").hide();
    $("#chgpin").hide();
    $("#witdrw").show ();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
     $("#indicator2").hide();
    
    
    $("#cash1").hide();
    navigator.vibrate(100);
    
    });
    }

  });

$("#dep").click(function(){
    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#chgpin").hide();
    $("#balen").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").show();
    $("#result2").hide();
    $("#final").hide();
    $("#Cash2").hide();

     $("#indicator3").hide();
    navigator .vibrate (100);
$("#back8").click(function(){
    $(".welcome").hide();
    $("#success").show();
    $("#deti").hide();
    $("#error").hide();
    $("#balen").hide();
    $("#chgpin").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
    $("#indicator3").hide();
    
     $("#Cash2").hide();
    navigator .vibrate (100);
    });
    });
$("#bt3").click(function(){
    $("#dep9").empty();
    $("#dep11").empty();
    $("#dep15").empty();
    $("#dep13").empty();
    $("#Cash2").hide();
     $("#indicator3").hide();
    var bal1=20000;
    var str1 = $("#witdrwno1").val();
    var chr1=150;
    
    var sub1= bal1-str1-chr1;
    if(str1=="")
    {
        str1=0;
    }
    mani = setInterval("showes()", 7000);
             $("#bill").show();
             $("#Cash2").show();
              $("#indicator3").hide();
    $("#dep11").append(str1);
    $("#dep9").append(bal1);
    $("#dep13").append(sub1);
    $("#dep15").append(chr1);
    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#chgpin").hide();
    $("#balen").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#result2").show();
    $("#depst").hide();
    $("#final").hide();
    navigator.vibrate(100);
    
$("#back9").click(function(){
    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#balen").hide();
    $("#chgpin").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide("fast");
    $("#result2").hide();
    $("#depst").hide();
    $("#final").show();
     $("#indicator3").hide();

        $("#Cash2").hide();
    navigator.vibrate(100);

    });
    

  });



});

// function arr()
// {
//     window .alert("Account number:12345678                      Pin number:9876");
    
// }