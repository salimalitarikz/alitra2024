




let tr = true;


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

var TrElements = document.querySelectorAll('[data-tr]');
for (var i = 0; i < TrElements.length; i++) {
    TrElements[i].innerHTML = TrElements[i].dataset.tr;
}

document.getElementById("lang_button").addEventListener("click",changeLanguage);

