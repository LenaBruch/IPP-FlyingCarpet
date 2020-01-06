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


/**
* Should change the background color of the active type, if it is clicked. Doesn't work, why?
*/
/*function activeClicked () {
    var colorClicked = "#FFA726";
    
    if ($('#active_rect').css("background-color")=="rgba(230,230,230,1)");{
        $('#active_rect').css("background-color", colorClicked);
    }
    else {
        $('#active_rect').css("background-color", "rgba(230,230,230,1)"); 
    }
}*/

/**
* Changes the background color of the types, if they are clicked.
*/
function cityClicked () {
    $('#city').toggleClass("citytrip_rect_clicked");
    $('#city').toggleClass("citytrip_rect");
}

function activeClicked () {
    $('#active').toggleClass("active_rect_clicked");
    $('#active').toggleClass("active_rect");
}

function backpackingClicked () {
    $('#backpacking').toggleClass("backpacking_rect_clicked");
    $('#backpacking').toggleClass("backpackingrect");
}

function wellnessClicked () {
    $('#wellness').toggleClass("wellness_rect_clicked");
    $('#wellness').toggleClass("wellness_rect");
}

function beachClicked () {
    $('#beach').toggleClass("beach_rect_clicked");
    $('#beach').toggleClass("beach_rect");
}

function roadtripClicked () {
    $('#roadtrip').toggleClass("roadtrip_rect_clicked");
    $('#roadtrip').toggleClass("roadtrip_rect");
}

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
function markTaskAsDone () {
    $('#check1').css("fill", "rgba(0,188,212,1)");
    $('#Rectangle_Date1').css("background-color", "darkgrey");
    $('#task1_done').css("stroke", "darkgrey");
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
    