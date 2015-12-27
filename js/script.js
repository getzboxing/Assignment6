// VALIDATE USER INPUT

 "use strict";
var $ =  function(id){
    return document.getElementById(id);
}

 /*VALIDATE RESIDENCE TYPE*/ 
 
$("habitat_type").onchange = function(){myFunction()};

function myFunction(){
    
    var x = $("habitat_type").selectedIndex;
    if (document.getElementsByTagName("option")[x].value == "other"){
        alert("alert");
        
        var addrText = document.createElement("INPUT");
        addrText.setAttribute("type", "text");
        addrText.setAttribute("placeholder", "enter address"); 
        addrText.className = "css_class_name";
        document.body.appendChild(addrText); // put it into the DOM
        //("residence").appendChild(addrText);
        }
    } 

/*RADIO BUTTONS DROPDOWN MENU*/
     
     var tossedCrust=$("tossed_crust");
     tossedCrust.onclick=function(){
         var x = document.createElement("SELECT");
        x.setAttribute("id","mySelect");
         document.body.appendChild(x);
         
         var z = document.createElement("option");
    z.setAttribute("value", "size:");
    var t = document.createTextNode("small");
    z.appendChild(t);
    document.getElementById("mySelect").appendChild(z);
         
         var zz = document.createElement("option");
    zz.setAttribute("value", "size:");
         var tt = document.createTextNode("medium");
    zz.appendChild(tt);
    document.getElementById("mySelect").appendChild(zz);
         
         mySelect.className = "css_radioOne";
     };
    
            var nycCrust=$("nyc_crust");
                nycCrust.onclick=function(){
            var x2 = document.createElement("SELECT");
                x2.setAttribute("id","mySelect2");
                 document.body.appendChild(x2);

            var z2 = document.createElement("option");
                z2.setAttribute("value", "size:");
            var t2 = document.createTextNode("small");
                z2.appendChild(t2);
                document.getElementById("mySelect2").appendChild(z2);

            var zz2 = document.createElement("option");
                zz2.setAttribute("value", "size:");
            var tt2 = document.createTextNode("medium");
                zz2.appendChild(tt2);
                document.getElementById("mySelect2").appendChild(zz2);

                 mySelect2.className = "css_radioTwo";
             };




                var freeCrust=$("free_crust");
                freeCrust.onclick=function(){
                var x3 = document.createElement("SELECT");
                x3.setAttribute("id","mySelect3");
                 document.body.appendChild(x3);

                var z3 = document.createElement("option");
                z3.setAttribute("value", "size:");
                var t3 = document.createTextNode("small");
                z3.appendChild(t3);
                document.getElementById("mySelect3").appendChild(z3);

                var zz3 = document.createElement("option");
                zz3.setAttribute("value", "size:");
                var tt3 = document.createTextNode("medium");
                zz3.appendChild(tt3);
                document.getElementById("mySelect3").appendChild(zz3);

                 mySelect3.className = "css_radioThree";
             };


/*VALIDATE NAME working!*/ 
 var order = function(){
     
     var inputName = $("input_name");
     var allLetters = /^[a-zA-Z]+$/;
     var isValid=false;
     if(inputName.value == ""){
         inputName.nextElementSibling.firstChild.nodeValue = "Name is required.";
         isValid = false;
     }else if (inputName.value.match(allLetters)){
               //return true;
               isValid = true;
               }else{
         inputName.nextElementSibling.firstChild.nodeValue = "Name must contain only letters";
                isValid = false;
               }
     
     
     
     /*VALIDATE ADDRESS working!*/
     
     var inputAddress = $("input_address");
     var allNumsLtrs = /^[a-zA-Z0-9]+$/;
     if (inputAddress.value == ""){
         inputAddress.nextElementSibling.firstChild.nodeValue = "Address is required.";
         isValid = false;
     }else if (inputAddress.value.match(allNumsLtrs)){
               //return true;
               isValid = true;
               } 
     
     /*VALIDATE ZIP working!*/
     
     var inputZip = $("input_zip");
     var zipValidate = /^([0-9]{5})$/;
     if (inputZip.value == ""){
         inputZip.nextElementSibling.firstChild.nodeValue = "ZIP code required.";
         isValid = false;
         }else if (inputZip.value.match(zipValidate)){
             isValid = true;
         }else{
         inputZip.nextElementSibling.firstChild.nodeValue = "Must match 5 or 9 digit input.";
                isValid = false;
               }
     
     /*VALIDATE PHONE works! remove required prompt*/
     
     var inputPhone = $("input_phone");
     var phoneValidate = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     if (inputPhone.value == ""){
         inputPhone.nextElementSibling.firstChild.nodeValue = "Phone number required.";
         isValid = false;
     }else if (inputPhone.value.match(phoneValidate)){
         isValid = true;
     }else{
         inputPhone.nextElementSibling.firstChild.nodeValue = "Must match phone number pattern.";
     }
     
     /*VALIDATE EMAIL works!*/
      var inputEmail = $("input_email");
     var emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
     if (inputEmail.value == ""){
         inputEmail.nextElementSibling.firstChild.nodeValue = "Email address required.";
         isValid = false;
     }else if (inputEmail.value.match(emailValidate)){
         isValid = true;
     }else{
         inputEmail.nextElementSibling.firstChild.nodeValue = "Must be valid email.";
     }
     
     
       
         
  }//end ORDER FUNCTION
 
 
 
 window.onload = function(){
     $("order_btn").onclick = order;
     
 }


//var myRE = /^hello/; returns string that begins with hello
//ZIP CODE /^[0-9]{5}(?:-[0-9]{4})?$/
//EMAIL /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
 


