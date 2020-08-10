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

$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var nineEl = $("#0 .description").val();
    var tenEl = $("#1 .description").val();
    var elevenEl = $("#2 .description").val();
    var twelveEl = $("#3 .description").val();
    var oneEl = $("#4 .description").val();
    var twoEl = $("#5 .description").val();
    var threeEl = $("#6 .description").val();
    var fourEl = $("#7 .description").val();
    var fiveEl = $("#8 .description").val();

    localStorage.setItem("9-text", JSON.stringify(nineEl));
    localStorage.setItem("10-text", JSON.stringify(tenEl));
    localStorage.setItem("11-text", JSON.stringify(elevenEl));
    localStorage.setItem("12-text", JSON.stringify(twelveEl));
    localStorage.setItem("1-text", JSON.stringify(oneEl));
    localStorage.setItem("2-text", JSON.stringify(twoEl));
    localStorage.setItem("3-text", JSON.stringify(threeEl));
    localStorage.setItem("4-text", JSON.stringify(fourEl));
    localStorage.setItem("5-text", JSON.stringify(fiveEl));

});

function renderText() {

    var nineEvent = JSON.parse(localStorage.getItem("9-text"));
    var tenEvent = JSON.parse(localStorage.getItem("10-text"));
    var elevenEvent = JSON.parse(localStorage.getItem("11-text"));
    var twelveEvent = JSON.parse(localStorage.getItem("12-text"));
    var oneEvent = JSON.parse(localStorage.getItem("1-text"));
    var twoEvent = JSON.parse(localStorage.getItem("2-text"));
    var threeEvent = JSON.parse(localStorage.getItem("3-text"));
    var fourEvent = JSON.parse(localStorage.getItem("4-text"));
    var fiveEvent = JSON.parse(localStorage.getItem("5-text"));

    $("#0 .description").val(nineEvent)

}

