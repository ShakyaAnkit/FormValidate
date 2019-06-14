/*global document, window, alert, console, require*/
var form = document.querySelectorAll("form input,form select");
var firstname = document.getElementById("fname");
var lastname = document.getElementById("lname");
var email = document.getElementById("email");
var mobile = document.getElementById("phone");
var error8 = document.getElementById("f8");
var addr1 = document.getElementById("countySel");
var addr2 = document.getElementById("stateSel");
var addr3 = document.getElementById("citySel");

var re = /^([a-z\d\.\-]+)@([a-z\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
var phoneno = /^\d{10}$/;

function noerror(arg1) {
    arg1.style.borderColor = "#2ecc71";
    arg1.nextElementSibling.innerHTML = "";
}

function error(arg2) {
    arg2.style.borderColor = "#e74c3c";
}

form.forEach(function (input) {
    input.addEventListener("blur", validateForm, true);
});

function validateForm() {
       if (this.value.length < 1) {
        this.nextElementSibling.innerHTML = "Please fill the Field";
        error(this);
    }
    else if (this.type === "email") {
        if (!this.value.match(re)) {
            error(this);
            this.nextElementSibling.innerHTML = "Please enter a valid Email Address";
        }
        else {
            noerror(this);
           
        }
    }
    else if (this.type === "tel") {
        if (this.value.match(phoneno)) {
            noerror(this);
        }

        else {
            error(this);
            this.nextElementSibling.innerHTML = "Please enter a valid phone number";
        }
    }
    else {
        noerror(this);
    }
}

var stateObject = {
    "India": {
        "Delhi": ["New Delhi", "North Delhi"],
        "Karnataka": ["Banglore", "Chennai"],
        "Punjab": ["Amritsar", "Chandigargh"],
        "Goa": ["North Goa", "South Goa"]
    },
    "Australia": {
        "Queensland": ["Brisbane", "Goldcoast"],
        "Victoria": ["Altona", "Sydney"]
    }, "Nepal": {
        "Bagmati": ["Kathmandu", "Lalitpur"],
        "Lumbini": ["Palpa", "Pokhara"]
    },
}
window.onload = function () {
    var countySel = document.getElementById("countySel"),
        stateSel = document.getElementById("stateSel"),
        districtSel = document.getElementById("citySel");
    for (var country in stateObject) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
        stateSel.length = 1;
        districtSel.length = 1;
        if (this.selectedIndex < 1) return;
        for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    countySel.onchange();
    stateSel.onchange = function () {
        districtSel.length = 1;
        if (this.selectedIndex < 1) return;
        var district = stateObject[countySel.value][this.value];
        for (var i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
}
// console output
function submitform() {
    if (firstname.value != "" && lastname.value != "" && mobile.value != "" && email.value != "" && addr1.value != "" && addr2.value != "" && addr3.value != "") {
        console.log("Name: " + firstname.value + " " + lastname.value);
        console.log("Email: " + email.value);
        console.log("Phone no: " + mobile.value);
        console.log("Address: " + addr1.value + "," + addr2.value + "," + addr3.value)
    }
}

// The country state and city selector

