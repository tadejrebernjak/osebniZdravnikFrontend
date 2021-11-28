let applicationsDisplay = document.getElementById('applications');

var applications = JSON.parse(localStorage.getItem('applications') || "[]");

console.log(applications);

if (applications.length == 0) {
    applicationsDisplay.innerHTML = "<h3 class='text-center text-secondary m-5'>Niste še naročeni na pregled</h3>";
}
else {
    for (i = 0; i < applications.length; i++) {
        console.log(i);
        applicationsDisplay.innerHTML +=
        "<div class='card p-4 m-4'>"
            + "<div class='row'>"
                + "<div class='col'>"
                    + "<h4 class='text-center text-secondary align-middle m-1'>"+ applications[i].date + "</h4>"
                    + "<h3 class='text-center align-middle m-1'>" + applications[i].time + "</h3>"
                + "</div>"
                + "<div class='col-6'>"
                    + "<p class='m-0 text-center'><span class='fw-bold'>Opis: </span>" + applications[i].description + "</p>"
                + "</div>"
                + "<div class='col d-flex align-items-center justify-content-center'>"
                    + "<div class='text-end'>"
                        + "<button class='btn btn-danger' onclick='cancel(" + i + ")'>Prekliči</button>"
                    + "</div>"
                + "</div>"
            + "</div>"
        + "</div>"; 
    } 
}

function cancel(i, applications) {
    var applications = JSON.parse(localStorage.getItem('applications') || "[]");

    applications.splice(i, 1);
    localStorage.setItem("applications", JSON.stringify(applications));

    location.reload();
}