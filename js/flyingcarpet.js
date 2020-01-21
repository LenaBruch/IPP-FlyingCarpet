/** 
* Using the floating action button, the popup window for a new task or item will be shown
*/

function popupTaskItem () {
    $('#popup-task-item').show();
}

/** 
* The popup window for a new task or item will disappear
*/
function popupTaskItemHide () {
    $('#popup-task-item').hide();
}


/**
* Changes the background color of the trip types, if they are clicked.
*/
function cityClicked () {
    $('#city').toggleClass("citytrip-rect-clicked");
    $('#city').toggleClass("citytrip-rect");
}

function activeClicked () {
    $('#active').toggleClass("active-rect-clicked");
    $('#active').toggleClass("active-rect");
}

function backpackingClicked () {
    $('#backpacking').toggleClass("backpacking-rect-clicked");
    $('#backpacking').toggleClass("backpackingrect");
}

function wellnessClicked () {
    $('#wellness').toggleClass("wellness-rect-clicked");
    $('#wellness').toggleClass("wellness-rect");
}

function beachClicked () {
    $('#beach').toggleClass("beach-rect-clicked");
    $('#beach').toggleClass("beach-rect");
}

function roadtripClicked () {
    $('#roadtrip').toggleClass("roadtrip-rect-clicked");
    $('#roadtrip').toggleClass("roadtrip-rect");
}

/** 
* On the "Add Trip - Company" screen the "alone" radio button will be filled orange
*/
function alone () {
    $('#ellipse-alone').css("fill", "#FFA726");
    $('#ellipse-with').css("fill", "white");
}

/** 
* On the "Add Trip - Company" screen the "with" radio button will be filled orange
*/
function withFriend () {
    $('#ellipse-with').css("fill", "#FFA726");
    $('#ellipse-alone').css("fill", "white");
}


/**
* Add Destination Screen: Enter the clicked date.
*/
function calendarAddDestination () {
    $(".datepicker").datepicker();
}

/**
* Click on Add destination (Destination Screen): the inspirational image will disappear and a second entry field for a second destination will be displayed.
*/
function addDestination () {
    $('#insp-destination').hide();
    $('#from-and-where-to').css("top", "400px");
    $('#text-field-from-destination').css("top", "609px");
    $('#text-field-to-destination').css("top", "609px");
    $('#text-field-from-date').css("top", "764px");
    $('#text-field-to-date').css("top", "764px");
    $('#first-destination').show();
    $('#second-destination').show();
    $('#hide-second-destination').show();
}


/* AddTrip Transportation: Dropdown Menu */
$('.dropdown').click(function () {
     $(this).attr('tabindex', 1).focus();
     $(this).toggleClass('active');
     $(this).find('.dropdown-menu').slideToggle(300);
    });
$('.dropdown').focusout(function () {
     $(this).removeClass('active');
     $(this).find('.dropdown-menu').slideUp(300);
    });
$('.dropdown .dropdown-menu li').click(function () {
     $(this).parents('.dropdown').find('span').text($(this).text());
     $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });


/**
* Calendar Screen: First day of the clanedar is monday.
*/
function createCalendar () {
  $("#datepicker").datepicker({ firstDay: 1});
};


/** 
* You can mark all tasks as done.
*/
function taskOneDone () {
    $('#task-1').toggleClass('fas fa-check-circle');
    $('#task-1').toggleClass('far fa-circle');
    $('#rectangle-date-1').toggleClass('rectangle-date-check');
    $('#rectangle-date-1').toggleClass('rectangle-date');
}
function taskTwoDone () {
    $('#task-2').toggleClass('fas fa-check-circle');
    $('#task-2').toggleClass('far fa-circle');
    $('#rectangle-date-2').toggleClass('rectangle-date-check');
    $('#rectangle-date-2').toggleClass('rectangle-date');
}
function taskThreeDone () {
    $('#task-3').toggleClass('fas fa-check-circle');
    $('#task-3').toggleClass('far fa-circle');
    $('#rectangle-date-3').toggleClass('rectangle-date-check');
    $('#rectangle-date-3').toggleClass('rectangle-date');
}


/* You can mark items as packed */

function item1Check () {
    $('#item-1').toggleClass('fas fa-check-circle');
    $('#item-1').toggleClass('far fa-circle');
    $('#item-name-1').toggleClass('crossed_out');
    $('#item-name-1').toggleClass('item-name');
}

function item2Check () {
    $('#item-2').toggleClass('fas fa-check-circle');
    $('#item-2').toggleClass('far fa-circle');
    $('#item-name-2').toggleClass('crossed_out');
    $('#item-name-2').toggleClass('item-name');
}

function item3Check () {
    $('#item-3').toggleClass('fas fa-check-circle');
    $('#item-3').toggleClass('far fa-circle');
    $('#item-name-3').toggleClass('crossed_out');
    $('#item-name-3').toggleClass('item-name');
}

function item4Check () {
    $('#item-4').toggleClass('fas fa-check-circle');
    $('#item-4').toggleClass('far fa-circle');
    $('#item-name-4').toggleClass('crossed_out');
    $('#item-name-4').toggleClass('item-name');
}

function item5Check () {
    $('#item-5').toggleClass('fas fa-check-circle');
    $('#item-5').toggleClass('far fa-circle');
    $('#item-name-5').toggleClass('crossed_out');
    $('#item-name-5').toggleClass('item-name');
}

function item6Check () {
    $('.item-6').toggleClass('fas fa-check-circle');
    $('.item-6').toggleClass('far fa-circle');
    $('.item-name-6').toggleClass('crossed_out');
    $('.item-name-6').toggleClass('item-name');
}

/**
* Creates new item in packlist
*/
function addItem () {
    var itemName = $('#textfield-name').val();
    console.log(itemName);
    var newItemDiv = $('<div></div>').addClass('new-item').appendTo("body");
    
    $('<div></div>').addClass('rectangle-items').appendTo(newItemDiv);
    $('<div></div>').addClass('new-item-name item-name-6').append('<span></span>').text(itemName).appendTo(newItemDiv);
    $('<div onclick="item6Check();"></div>').addClass('check-no').append('<i class="far fa-circle item6"></i>').appendTo(newItemDiv);
    
    $('#textfield-name').val("");
}

/** Carrousel Interval */
$('.carousel').carousel( function() {
  interval: 0
});





