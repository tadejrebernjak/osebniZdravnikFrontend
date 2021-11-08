window.onload = function () {

    var form = document.getElementById("register-form");

    let config = {
        // class of the parent element where the error/success class is added
        classTo: 'u-form-group',
        errorClass: 'has-danger',
        successClass: 'has-success',
        // class of the parent element where error text element is appended
        errorTextParent: 'u-form-group',
        // type of element to create for the error text
        errorTextTag: 'div',
        // class of the error text element
        errorTextClass: 'text-help' 
    };

    // create the pristine instance
    var pristine = new Pristine(form, config);

    form.addEventListener('submit', function (e) {
       e.preventDefault();
       
       // check if the form is valid
       var valid = pristine.validate(); // returns true or false
       
       if (valid) {
           window.location.href = "login.html";
       }

    });
};