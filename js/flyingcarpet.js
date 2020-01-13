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
* Changes the background color of the trip types, if they are clicked.
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
* On the "Add Trip - Company" screen the "alone" radio button will be filled orange
*/
function alone () {
    $('#ellipse_alone').css("fill", "#FFA726");
    $('#ellipse_with').css("fill", "white");
}

/** 
* On the "Add Trip - Company" screen the "with" radio button will be filled orange
*/
function withFriend () {
    $('#ellipse_with').css("fill", "#FFA726");
    $('#ellipse_alone').css("fill", "white");
}


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
    $('#insp_destination').hide();
    $('#From_and_where_to').css("top", "400px");
    $('#Text_Field_from_Destination').css("top", "609px");
    $('#Text_Field_to_Destination').css("top", "609px");
    $('#Text_Field_from_Date').css("top", "764px");
    $('#Text_Field_to_Date').css("top", "764px");
    $('#first_destination').show();
    $('#second_destination').show();
    $('#hide_secondDestination').show();
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
  $( "#datepicker" ).datepicker({ firstDay: 1});
};


/** 
* You can mark all tasks as done.
*/
function taskOneDone () {
    $('#task1').toggleClass('fas fa-check-circle');
    $('#task1').toggleClass('far fa-circle');
    $('#Rectangle_Date1').toggleClass('Rectangle_Date_Check');
    $('#Rectangle_Date1').toggleClass('Rectangle_Date');
}
function taskTwoDone () {
    $('#task2').toggleClass('fas fa-check-circle');
    $('#task2').toggleClass('far fa-circle');
    $('#Rectangle_Date2').toggleClass('Rectangle_Date_Check');
    $('#Rectangle_Date2').toggleClass('Rectangle_Date');
}
function taskThreeDone () {
    $('#task3').toggleClass('fas fa-check-circle');
    $('#task3').toggleClass('far fa-circle');
    $('#Rectangle_Date3').toggleClass('Rectangle_Date_Check');
    $('#Rectangle_Date3').toggleClass('Rectangle_Date');
}


/* You can mark items as packed */

function item1Check () {
    $('#item1').toggleClass('fas fa-check-circle');
    $('#item1').toggleClass('far fa-circle');
    $('#item_name1').toggleClass('crossed_out');
    $('#item_name1').toggleClass('item_name');
}

function item2Check () {
    $('#item2').toggleClass('fas fa-check-circle');
    $('#item2').toggleClass('far fa-circle');
    $('#item_name2').toggleClass('crossed_out');
    $('#item_name2').toggleClass('item_name');
}

function item3Check () {
    $('#item3').toggleClass('fas fa-check-circle');
    $('#item3').toggleClass('far fa-circle');
    $('#item_name3').toggleClass('crossed_out');
    $('#item_name3').toggleClass('item_name');
}

function item4Check () {
    $('#item4').toggleClass('fas fa-check-circle');
    $('#item4').toggleClass('far fa-circle');
    $('#item_name4').toggleClass('crossed_out');
    $('#item_name4').toggleClass('item_name');
}

function item5Check () {
    $('#item5').toggleClass('fas fa-check-circle');
    $('#item5').toggleClass('far fa-circle');
    $('#item_name5').toggleClass('crossed_out');
    $('#item_name5').toggleClass('item_name');
}



/**
* Creates new item in packlist
* @return: div element
*/
/*function addItem() {
    var itemName = $('#textfield_name').val();
    console.log(itemName);
    var newItemElement = $('<div>').addClass('New_Item');
    
    $('<div>').addClass('Rectangle_Item').appendTo(newItemElement);
    $('<div>').addClass('New_Item_Name').append('<span>').text(itemName).appendTo(newItemElement);
    console.log(newItemElement);
    
    return newItemElement;
}*/

/**
* Sets the name of a new item name in the last item section
*/
function newItem () {
    var itemName = $('#textfield_name').val();
    
    $('#newName').text(itemName);
    $('#textfield_name').val("");
}

