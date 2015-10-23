// document.delAddress.inputName.innerHtml=

//document.addEventListener("DOMContentLoaded", init, false);

     
 

/**/
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


