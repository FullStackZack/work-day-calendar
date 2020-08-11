$("#currentDay").text(moment().format("dddd, MMMM Do"))

var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentHour = moment().hour()

for (i = 0; i < militaryHours.length; i++) {
    if (currentHour === militaryHours[i]) {
        $("#" + i).addClass("present")
    } else if (currentHour > militaryHours[i]) {
        $("#" + i).addClass("past")
    } else if (currentHour < militaryHours[i]) {
        $("#" + i).addClass("future") 
    }
};

//console.log(currentHour);

$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    /*
    var key = $(this).siblings(".hour").text();
    console.log(key);

    var value = $(this).prev().val();

    localStorage.setItem(key, value);
    */

    
    var eventId = $(this).attr("id"); 
    console.log(eventId);
    var eventText = $(this).parent().siblings().children(".description").val().trim();
    console.log(eventText);
    localStorage.setItem(eventId, eventText);

    //localStorage.getItem(eventId);

});