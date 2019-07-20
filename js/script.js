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
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!")
    }
    event.preventDefault();
  });

});

$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});