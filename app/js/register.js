var output;

// ****** BACKEND DEVELOPER CONFIGURATION STARTS: *******

var members = ["Sayan", "Somsubhra", "Raja", "Baja", "Khaja"]; // FETCH USERNAMES FROM DATABASE AND ADD TO THIS ARRAY

var isSignedUp = true; // GET USER SIGNED UP STATUS FROM DATABASE

// ********* BACKEND DEVELOPER CONFIGURATION ENDS: *********

var events = {
    roborace: 5,
    robowar: 3,
};

var idName = "";

var count = 1;

document.getElementById('registrationform').addEventListener('submit', submitted);

(function ($) {
    "use strict";

    /*==================================================================
    [ Validate after type ]*/
    
    $('.validate-input .input100').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

     function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');

        $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>')
        $('.btn-hide-validate').each(function(){
            $(this).on('click',function(){
               hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }
    
    
    /*==================================================================
    [ Show / hide contact ]*/
    $('.btn-hide-contact100').on('click', function () {       
        $(".container-contact100").fadeOut(300);
        count = 1;
        idName = "";
    });

    $('.btn-show-contact100').on('click', function () {
        if (isSignedUp) {
            $(".container-contact100").css("top", "0.1%");
            $('.container-contact100').fadeIn(300);
            $(".container-contact100").css("visibility", "visible");
            
        } else {
            notSignedUp();
            $(".container-contact100").css("top", "0.1%");
            $(".container-contact100").fadeIn(300);
            $(".container-contact100").css('visibility', 'visible');
        }
        
    });    

})(jQuery);

// TODO: Add on click listeners to all buttons

//robotics

$("#roborace").on("click", function() {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text('Register For RoboRace');

    $('#addmember').on('click', function () { 
        if (count <= events.roborace) {
            count++;
            idName = "member" + count;
            document.getElementById(idName).style.display = "block";
        } 
        if (count >= 1 && count <= event.roborace) {
            document.getElementById("addmember").disabled = false;
            document.getElementById("delmember").disabled = false;
        }
        if (count === events.roborace) {
            document.getElementById('addmember').disabled = true;
            document.getElementById('delmember').disabled = false;
        }
        // console.log(count);
        
        
    })
    $('#delmember').on('click', function () {
        if (count >= 1) {
            idName = "member" + count;
            document.getElementById(idName).style.display = "none";
            count--;
        }
        if (count >= 1 && count <= event.roborace) {
          document.getElementById("addmember").disabled = false;
          document.getElementById("delmember").disabled = false;
        }
        if (count === 0) {
            document.getElementById("addmember").disabled = false;            
            document.getElementById("delmember").disabled = true;            
        }
        // console.log(count);
        
    })
});

$('#robowar').on('click', function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text("Register For RoboWar");

    $('#addmember').on('click', function () {
        if (count <= events.robowar) {
            count++;
            idName = "member" + count;
            document.getElementById(idName).style.display = "block";
        }
        if (count >= 1 && count <= event.robowar) {
            document.getElementById("addmember").disabled = false;
            document.getElementById("delmember").disabled = false;
        }
        if (count === events.robowar) {
            document.getElementById('addmember').disabled = true;
            document.getElementById('delmember').disabled = false;
        }
        // console.log(count);


    })
    $('#delmember').on('click', function () {
        if (count >= 1) {
            idName = "member" + count;
            document.getElementById(idName).style.display = "none";
            count--;
        }
        if (count >= 1 && count <= event.robowar) {
            document.getElementById("addmember").disabled = false;
            document.getElementById("delmember").disabled = false;
        }
        if (count === 0) {
            document.getElementById("addmember").disabled = false;
            document.getElementById("delmember").disabled = true;
        }
        // console.log(count);

    })
});

$("#robosoccer").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
  $(".contact100-form-title span").text("Register For Soccer");
  $("#member1").css("display", "block");
  $("#member2").css("display", "block");
  $("#member3").css("display", "block");
  $("#member4").css("display", "block");
  $("#member5").css("display", "block");
  $("#member1 #email").prop("required", true);
  $("#member2 #email").prop("required", true);
  $("#member3 #email").prop("required", true);
  $("#member4 #email").prop("required", true);
  $("#member5 #email").prop("required", true);
});

//coding:
$("#coderanch").on("click", function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text('Register For Code Ranch');

    $("#member1").css("display", "block");
    $("#member2").css("display", "block");
    $("#member3").css("display", "none");
    $("#member4").css("display", "none");
    $("#member5").css("display", "none");
    $("#member1 #email").prop('required', true);
    $("#member2 #email").prop('required', true);
    $("#member3 #email").prop('required', false);
    $("#member4 #email").prop('required', false);
    $("#member5 #email").prop('required', false);
});

$("#codegolf").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
  $(".contact100-form-title span").text("Register For Code Golf");

  $("#member1").css("display", "block");
  $("#member2").css("display", "block");
  $("#member3").css("display", "none");
  $("#member4").css("display", "none");
  $("#member5").css("display", "none");
  $("#member1 #email").prop("required", true);
  $("#member2 #email").prop("required", true);
  $("#member3 #email").prop("required", false);
  $("#member4 #email").prop("required", false);
  $("#member5 #email").prop("required", false);
});

$("#codewise").on("click", function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text("Register For Code Wise");

    $("#member1").css("display", "block");
    $("#member2").css("display", "block");
    $("#member3").css("display", "block");
    $("#member4").css("display", "none");
    $("#member5").css("display", "none");
    $("#member1 #email").prop("required", true);
    $("#member2 #email").prop("required", true);
    $("#member3 #email").prop("required", true);
    $("#member4 #email").prop("required", false);
    $("#member5 #email").prop("required", false);
});

$("#spyder").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
  $(".contact100-form-title span").text("Register For Spyder");

  $("#member1").css("display", "block");
  $("#member2").css("display", "block");
  $("#member3").css("display", "none");
  $("#member4").css("display", "none");
  $("#member5").css("display", "none");
  $("#member1 #email").prop("required", true);
  $("#member2 #email").prop("required", true);
  $("#member3 #email").prop("required", false);
  $("#member4 #email").prop("required", false);
  $("#member5 #email").prop("required", false);
});

// Gaming:

$("#pubg").on("click", function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text("Register For PUBG");

    $("#member1").css("display", "block");
    $("#member2").css("display", "block");
    $("#member3").css("display", "block");
    $("#member4").css("display", "block");
    $("#member5").css("display", "none");
    $("#member1 #email").prop("required", true);
    $("#member2 #email").prop("required", true);
    $("#member3 #email").prop("required", true);
    $("#member4 #email").prop("required", true);
    $("#member5 #email").prop("required", false);
});

// mechanical:
$("#bridgemaking").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
  $(".contact100-form-title span").text("Register For Bridge Making");

  $("#member1").css("display", "block");
  $("#member2").css("display", "block");
  $("#member3").css("display", "block");
  $("#member4").css("display", "none");
  $("#member5").css("display", "none");
  $("#member1 #email").prop("required", true);
  $("#member2 #email").prop("required", true);
  $("#member3 #email").prop("required", true);
  $("#member4 #email").prop("required", false);
  $("#member5 #email").prop("required", false);
});

// Flagship:
$("#uic").on("click", function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text("Register For UIC");

    $("#member1").css("display", "block");
    $("#member2").css("display", "block");
    $("#member3").css("display", "block");
    $("#member4").css("display", "block");
    $("#member5").css("display", "block");
    $("#member1 #email").prop("required", true);
    $("#member2 #email").prop("required", true);
    $("#member3 #email").prop("required", true);
    $("#member4 #email").prop("required", true);
    $("#member5 #email").prop("required", true);
});

// business:

$("#getsetsell").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
  $(".contact100-form-title span").text("Register For Get Set Sell");

  $("#member1").css("display", "block");
  $("#member2").css("display", "block");
  $("#member3").css("display", "block");
  $("#member4").css("display", "block");
  $("#member5").css("display", "none");
  $("#member1 #email").prop("required", true);
  $("#member2 #email").prop("required", true);
  $("#member3 #email").prop("required", true);
  $("#member4 #email").prop("required", true);
  $("#member5 #email").prop("required", false);
});

$("#admaking").on("click", function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text("Register For Ad making");

    $("#member1").css("display", "block");
    $("#member2").css("display", "block");
    $("#member3").css("display", "block");
    $("#member4").css("display", "block");
    $("#member5").css("display", "none");
    $("#member1 #email").prop("required", true);
    $("#member2 #email").prop("required", true);
    $("#member3 #email").prop("required", true);
    $("#member4 #email").prop("required", true);
    $("#member5 #email").prop("required", false);
});

// misc:
$("#cluex").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
  $(".contact100-form-title span").text("Register For ClueX");

  $("#member1").css("display", "block");
  $("#member2").css("display", "block");
  $("#member3").css("display", "none");
  $("#member4").css("display", "none");
  $("#member5").css("display", "none");
  $("#member1 #email").prop("required", true);
  $("#member2 #email").prop("required", true);
  $("#member3 #email").prop("required", false);
  $("#member4 #email").prop("required", false);
  $("#member5 #email").prop("required", false);
});


// not signed up

function notSignedUp() {
    $("#signed").css('display', 'none');
    $("#notSigned").css('display', 'block');
}

// typeahead:

var substringMatcher = function (strs) {
    return function findMatches(q, cb) {
        var matches, substringRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function (i, str) {
            if (substrRegex.test(str)) {
                matches.push(str);
            }
        });

        cb(matches);
    };
};


$('#the-basics .typeahead').typeahead({
    hint: false,
    highlight: true,
    minLength: 1
},
    {
        name: 'states',
        source: substringMatcher(members)
    }
);

function submitted(event) {
    event.preventDefault();
    console.log('submitted');
    
}