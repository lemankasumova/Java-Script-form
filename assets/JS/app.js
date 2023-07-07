
//!=========================id ile muraciet===================================================

// document.getElementById("list1").innerHTML = "HTML";
// document.getElementById("list2").innerHTML = "CSS";
// document.getElementById("list3").innerHTML = "Java Script";
// document.getElementById("list4").innerHTML = "React JS";
// document.getElementById("list5").innerHTML = "PHP";

//!===========================class ile muraciet===========================================

// document.getElementsByClassName("list1")[0].innerHTML="HTML";
// document.getElementsByClassName("list1")[1].innerHTML="CSS";
// document.getElementsByClassName("list2")[0].innerHTML="Java Script";
// document.getElementsByClassName("list1")[2].innerHTML="React JS";
// document.getElementsByClassName("list3")[0].innerHTML="PHP";


//!======================innerHTML ve innerText================================================

// document.getElementById("tag").innerHTML = "Sözü italic yazmaq üçün <i> Hello </i> tagindən istifadə edirik";
// document.getElementById("tag").innerText= "Sözü italic yazmaq üçün <i> Hello </i> tagindən istifadə edirik";


//!==============================Query selector/reng deyismek=================================================

// const a=document.querySelector("p");
// a.style.color="red";

// const a=Array.from(document.querySelectorAll("p"));  
// a.forEach(function(col) {
//     col.style.color="red";
// })

// document.querySelector("h1").style.color="blue";


//!=======================sekil elave etmek==================================================

// document.getElementById("image").style.backgroundImage="url('https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=')";


//!==========================click etdikde rengi deyissin====================================


// function changeColor () {
//     const a=document.querySelector("#image h1");
//     a.style.color="red";
// }


//!====================Arraya cevirib renglemek(nth ile secmek)==========================================

// const a=Array.from(document.querySelectorAll("li:nth-child(2)"));  

// a.forEach(function(col) {
//     col.style.color="blue";
// });

//const b=document.querySelectorAll("li:nth-child(odd)");  //even-cutleri secir
//console.log(b);
//console.log(a);




//!============================Style==================================================

// const butto=document.querySelector(".btn");
// butto.style.color="white";
// butto.style.backgroundColor="blue";
// butto.style.marginTop="50px";
// butto.style.marginLeft="50px";
// butto.style.padding="10px"
// butto.style.border="0";
// butto.style.cursor="pointer";


//!===================================================================================

// function chBackColor () {
//     let Background=document.querySelector("#background").value;
//     document.querySelector("body").style.backgroundColor=Background;
// }


//!===============================TASK=================================================

function createDiv () {
    let Width=document.querySelector("#div_width").value;
    let measureWidth=document.querySelector("#measure_w").value;
    let Height=document.querySelector("#div_height").value;
    let measureHeight=document.querySelector("#measure_h").value;
    let Background=document.querySelector("#bg_color").value;
    let Margin=document.querySelector("#margin_div").value;
    let margin_t=document.querySelector("#margin_type").value;
    let Padding=document.querySelector("#padding_div").value;
    let paddingSize=document.querySelector("#padding_m").value;
    let Border=document.querySelector("#border_style").value;
    let borderSty=document.querySelector("#border_s").value;
    let borderCol=document.querySelector("#border_color").value;
    let borderSize=document.querySelector("#border_size").value;
    let borderM=document.querySelector("#border_m").value;
    let textDiv=document.querySelector("#div_text").value;
    let sizeText=document.querySelector("#text_size").value;
    let texts=document.querySelector("#text_sz").value;
    
    let mainDiv=document.querySelector(".demo");

    mainDiv.style.width=Width+measureWidth;
    mainDiv.style.height=Height+measureHeight;
    mainDiv.style.background=Background;
    mainDiv.style.margin=Margin+margin_t;
    mainDiv.style.padding=Padding+paddingSize;
    mainDiv.style.borderStyle=Border+borderSty;
    mainDiv.style.borderColor=borderCol;
    mainDiv.style.borderWidth=borderSize+borderM;
    mainDiv.textContent=textDiv;   
    mainDiv.style.fontSize=sizeText+texts;

}



