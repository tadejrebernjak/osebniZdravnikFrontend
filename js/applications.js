if (localStorage.username) {
    console.log("test");
    document.getElementById("welcome").innerHTML = "Pozdravljen/a, " + localStorage.username + "!";
}
else {
    console.log("test2");
    window.location.href = "login.html";
}
