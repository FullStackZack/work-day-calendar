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
}

$(".saveBtn").click(function() {

    var input = $(".textarea").val();
    localStorage.setItem("text", input);

    localStorage.getItem("text");
})