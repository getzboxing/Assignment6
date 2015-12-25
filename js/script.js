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
         
        addrText.className = "css_class_name";
        document.body.appendChild(addrText); // put it into the DOM
        //("residence").appendChild(addrText);
        
        
    }
         
    } 

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
     
     
     /*RADIO BUTTONS DROPDOWN MENU*/
$("habitat_type").onchange = function(){myFunction()};

function myFunction(){
    
    var x = $("habitat_type").selectedIndex;
    if (document.getElementsByTagName("option")[x].value == "other"){
        alert("alert");
        
        var addrText = document.createElement("INPUT");
        addrText.setAttribute("type", "text");
         
        addrText.className = "css_class_name";
        document.body.appendChild(addrText); // put it into the DOM
        //("residence").appendChild(addrText);
        
        
    }
         
    }      
     
     }//end ORDER FUNCTION
 
 
 
 window.onload = function(){
     $("order_btn").onclick = order;
     
 }

/* 
//function order(){
    //alert("works");


    var price = 0.00;

        var fullname = document.getElementById("inputName").addEventListener("onchange");
     document.getElementById("inputName").innerHTML = fullname.onchange;

console.log("r"+fullname.value);
      
     <!--radio buttons
       var type = document.pizzaChoice.pizzaStyle.
         var pType;    
       for(var i in type){
           if(type[i].checked){
               pType=type[i].value
           }
       }
swith(pType)
{
    case "tossedCrust": price = price +17.00;
    break;
    case "thinCrust": price = price +18.00;
    break;
    case "nycCrust": price = price +20.00;
    break;
    case "gltnFreeCrust": price = price +22.00;
    break;
}

var total = document.getElementById("price");
total.innerHTML = price;
    
var crust = document.pizzaChoice.pizzaStyle.value;

    switch(size)
        {
            case "small": price = price; 
            break;
            case "medium"; price = price + 4;
            break;
            case "large"; price = price + 7;
            break;
            case "exlarge"; price = price + 9;
            break;
        }
                
                
                
   // var name = document.delAddress.inputName.value;
    //document.getElementById("inputName").innerHTML = name;
    //console.log(name);
//}

/*
function myFunction() {
    var x = getElementById("habitatType").value;
    console.log(x);
}
var inputName = document.getElementById("inputName").value;
    console.log("name " +inputName.value)
    
    //CRUST OPTIONS 
var tssdCrust = document.getElementById("tssdCrust");
tssdCrust.onclick = function(){
    alert("tossed crust");
}

var thnCrust = document.getElementById("thnCrust");
thnCrust.onclick = function(){
    alert("thin crust");
}


var nycCrust = document.getElementById("nycCrust");
nycCrust.onclick = function(){
    alert("NYC crust");
}

var gltnFrCrust = document.getElementById("gltnFrCrust");
gltnFrCrust.onclick = function(){
    alert("glutenfree crust");
}
*/
//var pizzaStyleChoice = document.getElementById("crustSelect").pizzaStyle;
/*
function myCrustSelect() {
    var x = document.getElementById("mySelect");
    var i = x.selectedIndex;
    document.getElementById("crust").innerHTML = x.options[i].text;
}
console.log("crust " + crust);
*/
//radio button selector
 

/*  
var crustSelect= document.getElementById("crustSelect").pizzaStyle;
 for (var i=0; i<crustSelect.length; i++){
    if (crustSelect[i].checked == true){
        alert(selections[i].value);
    }
 }
}

window.onload = function(){
    prpareEventHandlers();
}
*/


/*
var myRE = /hello./;
 
var myRE = new RegExp("hello");

var myString = "Does this sentence have the word the word hello in it?";
if (myRE.test(myString)){
    alert("yes");
}
var temp = "a";
var mySelect = document.getElementById('mySelect');

for(var i, j = 0; i = mySelect.options[j]; j++) {
    if(i.value == temp) {
        mySelect.selectedIndex = j;
        break;
    }
}   
// test returns true/false     search returns position of first match

//var myRE = /^hello/; returns string that begins with hello
//ZIP CODE /^[0-9]{5}(?:-[0-9]{4})?$/
//EMAIL /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
*/


