/** 
* Using the floating action button, the popup window for a new task will be shown
*/

function popupTaskItem () {
    $('#Popup_Task_Item').show();
}

/** 
* The popup window for a new task will disappear
*/
function popupTaskItemHide () {
    $('#Popup_Task_Item').hide();
}

/*function cityClicked () {
    console.log($("#citytrip-rect").css("background-color"));
    if ($('#citytrip_rect').css("background-color") == "rgba(230,230,230,1)"){
        $('#citytrip_rect').css("background-color", "yellow");
    }
    //else{
        // $('#citytrip_rect').css("background-color", "rgba(230,230,230,1)");
}*/


/** 
* On the "Add Trip - Company" screen the "alone" radio button will be filled blue
*/
function alone () {
    $('#ellipse_alone').css("fill", "rgba(0,188,212,1)");
    $('#ellipse_with').css("fill", "white");
}

/** 
* On the "Add Trip - Company" screen the "with" radio button will be filled blue
*/
function withFriend () {
    $('#ellipse_with').css("fill", "rgba(0,188,212,1)");
    $('#ellipse_alone').css("fill", "white");
}

/** 
* On the home screen, you can mark the first task as done.
*/
/* function markTaskAsDone () {
    $('#check1').css("fill", "rgba(0,188,212,1)");
    $('#Rectangle_Date1').css("background-color", "darkgrey");
    $('#task1_done').css("stroke", "darkgrey");
}
*/

/* toggle tasks as done */
function check() {
    // VERSUCH IF FUNCTION
    var x = document.getElementsById("check");
  if (x.innerHTML === "panprama_fish_eye") {
    x.innerHTML = "check_cricle!";
  } else {
    x.innerHTML = "panorama_fish_eye";
  }
   // VERSUCH 2
    /*if (§('this').find('i').text() == 'panorama_fish_eye'){
     $('this').find('i').text('check_circle');
   } else {
       $('this').find('i').text('panorama_fish_eye');
    } */
}

/**
* Creates the calendar on the calendar screen.
*/
function createCalendar () {
  $( "#datepicker" ).datepicker({ firstDay: 1});
};

