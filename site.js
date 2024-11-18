


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









// Slider Things

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     speed: 1000,
//     spaceBetween: 15,
//     slidesPerView: 1.1,
  
//     autoplay: {
//       delay: 3000,
//     },
  
  

//   });