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

var timeBlock = $(".time-block");
var textArea = $(".description");

$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    

    var eventId = $(this).attr("id");
    var eventText = $(this).parent().siblings().children(".description").val();
    localStorage.setItem(eventId, eventText);

    localStorage.getItem(eventId);

});