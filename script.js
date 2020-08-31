// use moment.js to display current time
$("#currentDay").text(moment().format("dddd, MMMM Do"))

var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentHour = moment().hour()

// past, present, future color change
for (i = 0; i < militaryHours.length; i++) {
    if (currentHour === militaryHours[i]) {
        $("#" + i).addClass("present")
    } else if (currentHour > militaryHours[i]) {
        $("#" + i).addClass("past")
    } else if (currentHour < militaryHours[i]) {
        $("#" + i).addClass("future") 
    }
};

// save buttons; local storage function for each time block
// 9 AM
$(".btn-info").on("click", function() {
    var nineVal = $("#0").val();
    console.log(nineVal);
    localStorage.setItem("9 AM", JSON.stringify(nineVal));
});

// 10 AM
$(".btn-info").on("click", function() {
    var tenVal = $("#1").val();
    localStorage.setItem("10 AM", JSON.stringify(tenVal));
});

// 11 AM
$(".btn-info").on("click", function() {
    var elevenVal = $("#2").val();
    localStorage.setItem("11 AM", JSON.stringify(elevenVal));
});

// 12 PM
(".btn-info").on("click", function() {
    var twelveVal = $("#3").val();
    localStorage.setItem("12 PM", JSON.stringify(twelveVal));
});

// 1 PM
$(".btn-info").on("click", function() {
    var oneVal = $("#4").val();
    localStorage.setItem("1 PM", JSON.stringify(oneVal));
});

// 2 PM
$(".btn-info").on("click", function() {
    var twoVal = $("#5").val();
    localStorage.setItem("2 PM", JSON.stringify(twoVal));
});

// 3 PM
$(".btn-info").on("click", function() {
    var threeVal = $("#6").val();
    localStorage.setItem("3 PM", JSON.stringify(threeVal));
});

// 4 PM
$(".btn-info").on("click", function() {
    var fourVal = $("#7").val();
    localStorage.setItem("4 PM", JSON.stringify(fourVal));
});

// 5 PM
$(".btn-info").on("click", function() {
    var fiveVal = $("#8").val();
    localStorage.setItem("5 PM", JSON.stringify(fiveVal));
});

// clear schedule & local storage
$("#clearBtn").on("click", function(event) {
    event.preventDefault();
    localStorage.clear();
});

// retrieve items for each timeblock from local storage 
var nine = JSON.parse(localStorage.getItem("9 AM"));
$("#0").val(nine);
var ten = JSON.parse(localStorage.getItem("10 AM"));
$("#1").val(ten);
var eleven = JSON.parse(localStorage.getItem("11 AM"));
$("#2").val(eleven);
var twelve = JSON.parse(localStorage.getItem("12 PM"));
$("#3").val(twelve);
var one = JSON.parse(localStorage.getItem("1 PM"));
$("#4").val(one);
var two = JSON.parse(localStorage.getItem("2 PM"));
$("#5").val(two);
var three = JSON.parse(localStorage.getItem("3 PM"));
$("#6").val(three);
var four = JSON.parse(localStorage.getItem("4 PM"));
$("#7").val(four);
var five = JSON.parse(localStorage.getItem("5 PM"));
$("#8").val(five);