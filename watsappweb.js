 
/*<!--for displaying relevant chat-->*/
	$(document).ready(function(){
  /*--for searchbox--*/
     $(".searchbox").click(function(){
      $(this).parent().css("background-color","white");
      $(this).css("display","none");
     $(this).siblings().css("display","block");
     });
     $(".search_arrow").click(function(){
         $(".searchbox").css("display","block");
         $(this).parents(".search-bar").css("background-color","#f6f6f6");
         $(this).parent().css("display","none");
         });
  
  /*--for dropdowns--/*
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
    $(".dropdown-toggle").dropdown();
    $(".happy").dropdown().slideToggle().fadeToggle("slow");
/*--for corresponding chevron display--*/
	
  // console.log("Hello budbak!");
  var ch= $(".chat");
ch.mouseover(function(){
$(this).children("div.chevron").css("display","block");
});
ch.mouseleave(function(){
$(this).children("div.chevron").css("display","none");
});
	
 
/*--panel sliding-leftside--*/

  var lf2= $(".left2");
  var lf3= $(".left3");
$(".fa-comments").click(function(){
lf3.show('slide',{direction : "left"});
});
$( ".fa-arrow-left").click(function() {
  lf3.hide('slide',{direction :"left"});
});
$("#img1").click(function(){
lf2.show('slide',{direction : "left"}).css("display","block");
});
$( "#arrowback").click(function() {
  lf2.hide('slide',{direction :"left"});
});
/*--right-sliding---*/
var glt= $(".gallery_tab");
$(".media_heading").click(function(){
   glt.show('slide',{direction : "right"});
});
$(".back").click(function(){
 glt.hide('slide',{direction : "right"});
});
/*--attachments--*/
    $(".fa-paperclip").click(function(){
      $(".mask").css("display","block");
      $(".attach").slideToggle().css("display","block");
    });
    $(".mask").click(function(){
      $(".attach").css("display","none");
      $(".mask").css("display","none");
    });
/*--file upload--*/
$('.upload').bind("click" , function () {
        $('#file_upload').click();
    });
ch.click(function(){
  var t = this;
 if($(t).attr("data-counter") == 0)
 {
  var apple = new XMLHttpRequest();
  apple.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
  apple.onload = function(){
    var ourdata= JSON.parse(apple.responseText);
    // console.log(ourdata.length);
    // console.log(apple.status);
    renderHTML(ourdata,t);
  };
  apple.send();
  $(t).attr("data-counter","1");
 }
  // ajax using jquery 
  // $.ajax({
  //   type: 'GET',
  //   url: 'https://learnwebcode.github.io/json-example/animals-1.json',
  //   success: function(resp){
  //     console.log(resp);
  //     renderHTML(resp,t);
  //   },
  //   error: function(){
  //     console.log("Error");
  //   }
  // });
  else{
   if($(t).attr('id') == "c1b") {
        // console.log("sonu");
         $(".welcome").hide();
         $(".chat-rishab").hide();
         $(".chat-baba").show(); 
      }
      else if($(t).attr('id') == "c1r")
      {
        $(".welcome").hide();
         $(".chat-baba").hide();
          $(".chat-rishab").show(); 
      }
  }
      exr.hide();
    exr2.hide();
              rw.animate({ 
        width:'73%'
    });
  });
function renderHTML(data,t){
    // console.log($(t)[0]);
    

      var htmlString = " ";
      var d =new Date();
      for(i = 0; i < data.length; i++){
        htmlString += '<div class="chatm self" >' + '<p class="chat-message">'+  data[i].name +  'is a' + data[i].species  + '  ' + data[i].foods.likes[0] + ' '+ data[i].foods.dislikes[0]  +'<br><time style="color: gray;float: right">' + d.getHours() + ':' +d.getMinutes() + '</time></p>' + '</div> <br>' ;
    }
      if($(t).attr('id') == "c1b") {
        $(".chat-baba").find(".chatlogs").append(htmlString);
        // console.log("sonu");
         $(".welcome").hide();
         $(".chat-rishab").hide();
         $(".chat-baba").show(); 
      }
      else if($(t).attr('id') == "c1r")
      {
        $(".chat-rishab").find(".chatlogs").append(htmlString); 
        $(".welcome").hide();
         $(".chat-baba").hide();
          $(".chat-rishab").show(); 
      }
     
    }
/*--right width animation--*/
  var rw= $(".right-wrapper");
  var exr= $(".extreme_right");
  var exr2= $(".extreme_right2");

$(".tl").click(function(){
     exr2.hide();
    rw.animate({
        width:'46%'
    });
    exr.css("display","inline-block");
    
  });
$(".chat-img").click(function(){
   exr.hide();
    rw.animate({
        width:'46%'
    });
    exr2.css("display","inline-block");

/*--image src dynamically assingning--*/
    var igsrc = $(this).children(".contacti").attr("src");
   $(".contactif").attr("src",igsrc);
  });

  
  $(".fa-times").click(function(){
  exr.hide();
  exr2.hide();
  rw.animate({
        
        width:'73%'
    });
  });
// --dynamic chat

       $(".inptext").on('keydown',function(e){
         var x =$(this).val();
    if(event.which==13)
    {   
       var d = new Date();
       var ht = ' <div class="chatm self" > ' + '<p class="chat-message">'+ x +'<br><time style="color: gray;float: right">' + d.getHours() + ':' +d.getMinutes() + '</time></p>' + '</div> <br>' ;
      var ev= $(this);
      var ev2= ev.parent().siblings(".chatb").children();
       ev2.append(ht).animate({scrollTop: ev2.get(0).scrollHeight}, 500);
       // console.log(ev.parent().siblings(".chatb").children());
       $(this).val("");
    }
       });
// -->modals
 $(".mute_option").click(function(){
        $("#myModal").modal();
    });
 $(".contactif").click(function(){
   var mdp= $(this).attr("src");
   $(".prodp").attr("src",mdp);
   // console.log(mdp);
    $(".mask2").css("display","block");
    $(".mymodal").fadeIn("slow").css("display","block");
    
  });
  $(".chatdp").click(function(){
   var chdp= $(this).attr("src");
   $(".prodp").attr("src",chdp);
   // console.log(chdp);
    $(".mask2").css("display","block");
    $(".mymodal").fadeIn("slow").css("display","block");
    
  });
     $(".mask2").on("click", function(){
        $(this).hide();
        $(".mymodal").fadeOut("slow").css("display","none");
    });


});

