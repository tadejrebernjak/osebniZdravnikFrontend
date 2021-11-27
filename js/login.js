window.onload = function() {
    const url = window.location.search;
    const params = new URLSearchParams(url);

    if (params.get('obvestilo') == "napacno_geslo") {
        swal({
            title: "Oops!",
            text: "Vnesli ste napačno uporabniško ime ali geslo",
            icon: "error"
        }).then(function() {
            window.location.href = "login.html";
        });
    }
};

function validateForm() {
    let password = document.getElementById('password-708d').value;

    if (password == "123") {
        window.location.href = "index.html";
    }
    else {
        window.location.href = "login.html?obvestilo=napacno_geslo";
    }
}