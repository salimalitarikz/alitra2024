
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



    if(scrollVal > 3050){
        qs("#part_5_progress_bar").style.height = "97.5vh";
        qs("#part_5_c_6").classList.add("active");
        qs("#part_5_c_5").classList.add("active");
        qs("#part_5_c_4").classList.add("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if (scrollVal > 2950) {
        qs("#part_5_progress_bar").style.height = "82.5vh";
        qs("#part_5_c_6").classList.remove("active");
        qs("#part_5_c_5").classList.add("active");
        qs("#part_5_c_4").classList.add("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if (scrollVal > 2850) {
        qs("#part_5_progress_bar").style.height = "67.5vh";
        qs("#part_5_c_5").classList.remove("active");
        qs("#part_5_c_4").classList.add("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if(scrollVal > 2750){
        qs("#part_5_progress_bar").style.height = "52.5vh";
        qs("#part_5_c_4").classList.remove("active");
        qs("#part_5_c_3").classList.add("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if(scrollVal > 2650){
        qs("#part_5_progress_bar").style.height = "37.5vh";
        qs("#part_5_c_3").classList.remove("active");
        qs("#part_5_c_2").classList.add("active");
        qs("#part_5_c_1").classList.add("active");
    }else if(scrollVal > 2550){
        qs("#part_5_progress_bar").style.height = "22.5vh";
        qs("#part_5_c_2").classList.remove("active");
        qs("#part_5_c_1").classList.add("active");
        console.log("worked");
    }else{
        qs("#part_5_progress_bar").style.height = "7.5vh";
        qs("#part_5_c_1").classList.remove("active");
    }
    

   


});

//////////////TEEESSSTTTTT










/////////////////////TEEEESSSTTT
// PROJECT START PAGE

function StartProject() {
    qs("#project_start_page").classList.add("activated");
    setTimeout(() => {
        qs("#project_page_part_1").classList.add("project_page_part_active");
    }, 10);
    
}


function projectStartStep(stepNumber) {
   var selected_part = document.getElementById("project_page_part_"+stepNumber);
    
   if (stepNumber == 2) {
        qs("#project_page_part_1").classList.add("project_page_part_passive");
        qs("#project_page_part_2").classList.add("project_page_part_active");
   }else if(stepNumber == 3){
        qs("#project_page_part_2").classList.add("project_page_part_passive");
        qs("#project_page_part_3").classList.add("project_page_part_active");
   }else if(stepNumber == 4){
        qs("#project_page_part_3").classList.add("project_page_part_passive");
        qs("#project_page_part_4").classList.add("project_page_part_active");
    }
   
   

}


var page3Sections = document.querySelectorAll(".project_page_3_section");
function removeActivePassiveFromAll() {
    qs("#project_page_part_1").classList.remove("project_page_part_passive");
    qs("#project_page_part_2").classList.remove("project_page_part_passive");
    qs("#project_page_part_3").classList.remove("project_page_part_passive");
    qs("#project_page_part_4").classList.remove("project_page_part_passive");
    qs("#project_page_part_1").classList.remove("project_page_part_active");
    qs("#project_page_part_2").classList.remove("project_page_part_active");
    qs("#project_page_part_3").classList.remove("project_page_part_active");
    qs("#project_page_part_4").classList.remove("project_page_part_active");

  

}


function projectStartGoBack(pageNo) {
    if (pageNo == 1) {
        
        removeActivePassiveFromAll();
        qs("#project_page_part_1").classList.add("project_page_part_active");
    }else if(pageNo == 2){
        removeActivePassiveFromAll();
         //add active
         qs("#project_page_part_1").classList.add("project_page_part_active");
         qs("#project_page_part_1").classList.add("project_page_part_passive");
         qs("#project_page_part_2").classList.add("project_page_part_active");
    }else if(pageNo == 3){
        removeActivePassiveFromAll();
        //add active
        qs("#project_page_part_2").classList.add("project_page_part_active");
        qs("#project_page_part_2").classList.add("project_page_part_passive");
        qs("#project_page_part_3").classList.add("project_page_part_active");
    }else if(pageNo == 0){
        removeActivePassiveFromAll();
        setTimeout(() => {
            qs("#project_start_page").classList.remove("activated");
        }, 100);
    }
}