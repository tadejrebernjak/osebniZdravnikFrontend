const url = window.location.search;
const urlParams = new URLSearchParams(url);
var dateString;

if (urlParams.get('date') != undefined && urlParams.get('time') != undefined) {
    document.getElementById('datepicker-container').style.display = "none";
    document.getElementById('timepicker-container').style.display = "none";
    document.getElementById('form-container').style.display = "block";

    dateString = urlParams.get('date');
    let timestamp = Date.parse(dateString);
    
    let date = new Date(timestamp);
    let dateDisplay = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

    document.getElementById("form-date-display").innerHTML = dateDisplay;
    document.getElementById("form-time-display").innerHTML = urlParams.get('time');

    document.getElementById('form-apply-button').addEventListener("click", function() {
        apply(dateDisplay);
    });
    document.getElementById('form-back-button').addEventListener("click", function() {
        window.history.back();
    });
}

else if (urlParams.get('date') != undefined) {
    document.getElementById('datepicker-container').style.display = "none";
    document.getElementById('timepicker-container').style.display = "block";
    document.getElementById('form-container').style.display = "none";

    dateString = urlParams.get('date');
    let timestamp = Date.parse(dateString);
    
    let date = new Date(timestamp);
    let dateDisplay = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
    
    document.getElementById('date-display').innerHTML = "Izbran datum: " 
    + dateDisplay;

    document.getElementById('date-back-button').addEventListener("click", function() {
        window.location.href = 'apply.html';
    });
}
else {
    document.getElementById('timepicker-container').style.display = "none";
    document.getElementById('form-container').style.display = "none";
}



var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
$('#datepicker').attr('min',today);

document.getElementById("selectDate").addEventListener("click", selectDate);

function selectDate() {
    selectedDate = document.getElementById("datepicker").value;

    window.location.href = "apply.html?date=" + selectedDate;
}

function timeSelect(time) {
    window.location.href = "apply.html?date=" + dateString + "&time=" + time;
}

function apply(dateDisplay) {
    let dateSend = dateDisplay;
    let timeSend = urlParams.get('time');
    let descriptionSend = document.getElementById('description').value;

    let application = {
        date: dateSend,
        time: timeSend,
        description: descriptionSend,
        id: Date.now()
    }

    var applications = JSON.parse(localStorage.getItem('applications') || "[]");

    applications.push(application);

    localStorage.setItem("applications", JSON.stringify(applications));

    window.location.href = "applications.html";
}
