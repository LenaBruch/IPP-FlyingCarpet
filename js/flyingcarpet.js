/** 
* Using the floating action button, the popup window for a new task or item will be shown
*/

function popupTaskItem () {
    $('#Popup_Task_Item').show();
}

/** 
* The popup window for a new task or item will disappear
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
* Calendar Screen: First day of the clanedar is monday.
*/
function createCalendar () {
  $( "#datepicker" ).datepicker({ firstDay: 1});
};


/**
* Add Destination Screen: Enter the clicked date.
*/
function calendarAddDestination () {
    $( ".datepicker" ).datepicker();
}

/**
* Click on Add destination (Destination Screen): the inspirational image will disappear and a second entry field for a second destination will be displayed.
*/
function addDestination () {
    $('#Inspirational_Image').hide();
    $('#From_and_where_to').css("top", "400px");
    $('#Text_Field_from_Destination').css("top", "609px");
    $('#Text_Field_to_Destination').css("top", "609px");
    $('#Text_Field_from_Date').css("top", "764px");
    $('#Text_Field_to_Date').css("top", "764px");
    $('#first_destination').show();
    $('#second_destination').show();
    $('#hide_secondDestination').show();
}


/** 
* On the home screen, you can mark all three tasks as done.
*/
function homeTaskOneDone () {
    $('#task1').toggleClass('fas fa-check-circle');
    $('#task1').toggleClass('far fa-circle');
    $('#Rectangle_Date1').toggleClass('Rectangle_Date_Check');
    $('#Rectangle_Date1').toggleClass('Rectangle_Date');
}
function homeTaskTwoDone () {
    $('#task2').toggleClass('fas fa-check-circle');
    $('#task2').toggleClass('far fa-circle');
    $('#Rectangle_Date2').toggleClass('Rectangle_Date_Check');
    $('#Rectangle_Date2').toggleClass('Rectangle_Date');
}
function homeTaskThreeDone () {
    $('#task3').toggleClass('fas fa-check-circle');
    $('#task3').toggleClass('far fa-circle');
    $('#Rectangle_Date3').toggleClass('Rectangle_Date_Check');
    $('#Rectangle_Date3').toggleClass('Rectangle_Date');
}