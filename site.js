
function qs(query) {
    return document.querySelector(query);
    
}

function changeLanguage() {

    var TrElements = document.querySelectorAll('[data-tr]');
    var EnElements = document.querySelectorAll('[data-en]');

    if (tr == true) {
        for (var i = 0; i < EnElements.length; i++) {
            EnElements[i].innerHTML = EnElements[i].dataset.en;
        }

        tr = false;
    }else{
        for (var i = 0; i < TrElements.length; i++) {
            TrElements[i].innerHTML = TrElements[i].dataset.tr;
        }

        tr = true;

    }

}
let tr = true;

var TrElements = document.querySelectorAll('[data-tr]');
for (var i = 0; i < TrElements.length; i++) {
    TrElements[i].innerHTML = TrElements[i].dataset.tr;
}

document.getElementById("lang_button").addEventListener("click",changeLanguage);





function toggleMenu() {
    document.querySelector("menu").classList.toggle("opened_menu");
    document.querySelector("nav").classList.toggle("nav_on_black");
}

document.getElementById("menu_button").addEventListener("click",toggleMenu);




// PROGRESS 

window.addEventListener("scroll", (el) => {

    el.preventDefault();


    let scrollVal = window.scrollY;

    console.log("---> " + scrollVal);



    if(scrollVal > 2550){
        qs("#part_5_progress_bar").style.height = "97.5vh";
        qs("#part_5_c_6").classList.add("active");
        qs("#part_5_c_5").classList.add("active");
        qs("#part_5_c_4").classList.add("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if (scrollVal > 2450) {
        qs("#part_5_progress_bar").style.height = "82.5vh";
        qs("#part_5_c_6").classList.remove("active");
        qs("#part_5_c_5").classList.add("active");
        qs("#part_5_c_4").classList.add("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if (scrollVal > 2350) {
        qs("#part_5_progress_bar").style.height = "67.5vh";
        qs("#part_5_c_5").classList.remove("active");
        qs("#part_5_c_4").classList.add("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if(scrollVal > 2250){
        qs("#part_5_progress_bar").style.height = "52.5vh";
        qs("#part_5_c_4").classList.remove("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if(scrollVal > 2150){
        qs("#part_5_progress_bar").style.height = "37.5vh";
        qs("#part_5_c_3").classList.remove("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if(scrollVal > 2050){
        qs("#part_5_progress_bar").style.height = "22.5vh";
        qs("#part_5_c_2").classList.remove("active");
        qs("#part_5_c_1").classList.add("active");
        console.log("worked");
    }else{
        qs("#part_5_progress_bar").style.height = "7.5vh";
        qs("#part_5_c_1").classList.remove("active");
    }
    

   


});




// PROJECT START PAGE


setTimeout(() => {
    qs("#project_page_part_1").classList.add("project_page_part_active");
}, 1000);

function projectStartStep(stepNumber) {
   var selected_part = document.getElementById("project_page_part_"+stepNumber);
    
   if (stepNumber == 2) {
        qs("#project_page_part_1").classList.add("project_page_part_passive");
        qs("#project_page_part_2").classList.add("project_page_part_active");
   }
   

}

function projectPart3Select(type1) {
    qs("#project_page_part_2").classList.add("project_page_part_passive");
   if (type1 == "website") {
    qs("#project_page_part_3_website").classList.add("project_page_part_active");
   }
}