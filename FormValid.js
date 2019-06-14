var stateObject = {
    "India": { "Delhi": ["New Delhi", "North Delhi"],
    "Karnataka": ["Banglore", "Chennai"],
    "Punjab": ["Amritsar", "Chandigargh"],
    "Goa": ["North Goa","South Goa"]
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
    var firstname = document.getElementById("fName");
    var lastname = document.getElementById("lName");
    var email = document.getElementById("email");
    var phoneno = document.getElementById("mobile");
    var error8 = document.getElementById("f8");
    var addr1 = document.getElementById("countySel")
    var addr2 = document.getElementById("stateSel")
    var addr3 = document.getElementById("citySel");
    var valid = true;

    firstname.addEventListener("blur",FnameVerify,true);
    lastname.addEventListener("blur",LnameVerify,true);
    email.addEventListener("blur",mailVerify,true);
    phoneno.addEventListener("blur",mobilesVerify,true);
    addr1.addEventListener("blur",place1Verify,true);
    addr2.addEventListener("blur",place2Verify,true);
    addr3.addEventListener("blur",place3Verify,true);

function validateForm() {
    

    if(lastname.value.trim()==""){
        lastname.className="wronginput";
        lastname.nextElementSibling.innerHTML="Name can't be blank";
        lastname.focus();
        valid=false;
    }   
    if (isNaN(phoneno.value)==true){
        phoneno.className="wronginput";
        phoneno.nextElementSibling.innerHTML="Mobile No must be a number"
        phoneno.focus();
        valid=false;
    }
    if (phoneno.value.length!=10){
        phoneno.className="wronginput";
        phoneno.nextElementSibling.innerHTML="Mobile No must be 10 digits long";
        phoneno.focus();
        valid=false;
    }
    
   
    if(phoneno.value.charAt(0)!=9 && phoneno.value.charAt(0)!=8 && phoneno.value.charAt(0)!=7){
        phoneno.className="wronginput";
        phoneno.nextElementSibling.innerHTML="Please enter a valid mobile number.";
        phoneno.focus();
        valid=false;
    }
  
    
    if (email.value.indexOf('@')<=0 ){
        email.className="wronginput";
        email.nextElementSibling.innerHTML="Please enter a valid email";
        email.focus();
        valid=false;
    }
   
    
    // if( email.value.charAt(email.length-4)!='.'){
    //     email.className="wronginput";
    //     email.nextElementSibling.innerHTML="Please enter a valid email";
    //     email.focus();
    //     valid=false;
    // }

    if(addr1.value == ""){
        addr1.className = "wronginput";
    }
    if(addr2.value == ""){
        
        addr2.className = "wronginput";
        
    }
    if(addr3.value == ""){
       addr3.className = "wronginput";
    }
   
    // document.getElementById("p1").innerHTML = "Name: "+document.getElementById("fName").value+" "+document.getElementById("lName").value;
    // document.getElementById("p2").innerHTML = "Father's Name: "+document.getElementById("fatherName").value;
    // document.getElementById("p3").innerHTML = "Education: "+document.getElementById("education").value;
    // document.getElementById("p4").innerHTML = "Occupation: "+document.getElementById("occupation").value;
    // document.getElementById("p5").innerHTML = "Mobile No: "+document.getElementById("mobile").value;
    // document.getElementById("p6").innerHTML = "Email: "+document.getElementById("email").value;
    // document.getElementById("p7").innerHTML = "Address: "+document.getElementById("countySel").value+","+document.getElementById("stateSel").value+","+document.getElementById("citySel").value;
    if (firstname.value !="" && lastname.value != "" && phoneno.value!=""&&email.value!="" && addr1.value != ""&& addr2.value != ""&& addr3.value != ""){
    console.log("Name: "+firstname.value+" "+lastname.value);
    console.log("Mobile no: "+phoneno.value);   
    console.log("Email: "+email.value)
    console.log("Address: "+document.getElementById("countySel").value+","+document.getElementById("stateSel").value+","+document.getElementById("citySel").value);
    }
}


// event handler function

function FnameVerify(){
    if(firstname.value.trim()==""){
        firstname.className="wronginput";
        firstname.nextElementSibling.innerHTML="Name can't be blank";
        firstname.focus();
        valid = false;
    }
    else{
        firstname.className = "noerror"
        firstname.nextElementSibling.innerHTML = "";
        return true;
    }
}

function LnameVerify(){
    if (lastname.value != ""){
        lastname.className = "noerror"
        lastname.nextElementSibling.innerHTML = "";
        return true;
    }
}


function mobilesVerify(){
    if (isNaN(phoneno.value)==false){
        phoneno.className = "noerror"
        phoneno.nextElementSibling.innerHTML = "";
        return true;
    }
}

function mobilesVerify(){
    if (phoneno.value.length==10){
        phoneno.className = "noerror"
        phoneno.nextElementSibling.innerHTML = "";
        return true;
    }
}
function mobilesVerify(){
if(phoneno.value.charAt(0)==9 || phoneno.value.charAt(0)==8 || phoneno.value.charAt(0)==7){
    phoneno.className = "noerror"
    phoneno.nextElementSibling.innerHTML = "";
    return true;
}
}

function mailVerify(){
    if (email.value.indexOf('@')>0 ){
        email.className="noerror"
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

function place1Verify(){
    if (addr1.value !=""){
        addr1.className="noerror";
    }
}

function place2Verify(){
    if (addr2.value !=""){
        addr2.className="noerror";
    }
}

function place3Verify(){
    if (addr3.value !=""){
        addr3.className="noerror";
    }
}
// function mailVerify(){
//     if( email.value.charAt(email.length-4)=='.'){
//         email.className="noerror"
//         email.nextElementSibling.innerHTML = "";
//         return true;
//     }
// }

//   function removeMessage(){
//       var errorinput = document.querySelectorAll(".wronginput");
//       [].forEach.call(errorinput,function(el){
//         el.classList.remove("wronginput");
//       })

//       var errorpara=document.querySelectorAll(".error");
//       [].forEach.call(errorpara,function(el){
//         el.innerHTML="";
//       })
//   }



 