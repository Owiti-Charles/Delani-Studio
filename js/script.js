$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").hide();
    $("#development").show();
  });
  $("#development").click(function(){
    $("#development").hide();
    $("#development-image").show();
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").hide();
    $("#design").show();
  });
  $("#design").click(function(){
    $("#design").hide();
    $("#design-image").show();
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('1000').hide();
    $("#product").show('1000');
  });
  $("#product").click(function(){
    $("#product").slideUp('1000');
    $("#product-image").slideDown('1000');
  });
});

$(document).ready(function(){
  $("form#form34A").submit(function(event){
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#comment").val();
    if ($("input#name").val() && $("input#email").val() && $("textarea#comment").val()!= "" ){
      alert ("Thank you " + name + " We have recieved your message");
    }
    else {
      alert("Please enter your name and email!")
    }
    event.preventDefault();
  });

});