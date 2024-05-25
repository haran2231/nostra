// offer heading 

var offer = document.getElementById("offer")
var offer_close = document.getElementById("offer-close")

offer_close.addEventListener("click", function () {
    offer.style.display = "none"
})

// wish heart 

var wish = document.querySelectorAll(".like-button");

wish.forEach((btn) => {
    btn.addEventListener("click", function (event) {
        if (event.target.src.endsWith("blackheart.png")) {
            event.target.src = "./images/redheart.png";
        } else {
            event.target.src = "./images/blackheart.png";
        }
    });
})

// side nav 



var menu = document.getElementById("bar_menu")
var cancel = document.getElementById("cancel_menu")
var side_nav = document.getElementById("sidenavbar")


menu.addEventListener("click", function(){
    // alert("hhh")
    // side_nav.style.display="block"
    side_nav.style.right="0"
    menu.style.display="none"
    cancel.style.display="block"


})

cancel.addEventListener("click", function(){
    // alert("hhh")
    // side_nav.style.display="none"
    // cancel.style.display="none"
    // // menu.style.display="block"
    // menu.setAttribute("class","block md:hidden w-6 h-6")
    side_nav.style.right="-50%"
    menu.style.display="block"
    cancel.style.display="none"
})


// slider

let currentSlide = 0;
const images = ['./images/slider-one.jpg', './images/slider-two.jpg', './images/slider-three.jpg'];

function showSlide(index) {
    // console.log(index);
    // console.log(images.length);
    const slider = document.getElementById('slider');
    console.log(currentSlide);
    currentSlide = (index + images.length) % images.length;
    console.log("index" + index);
    console.log(currentSlide);
    // console.log(currentSlide);
    slider.innerHTML = `<div class="text-center slides"><img src="${images[currentSlide]}" class="w-full h-96" alt=""></div>`;
}

setInterval(function() {
    showSlide(currentSlide + 1);
}, 3000);



document.getElementById('nextButton').addEventListener('click', function() {
    showSlide(currentSlide + 1);
});

document.getElementById('prevButton').addEventListener('click', function() {
    showSlide(currentSlide - 1);
});



// Initialize the slider
showSlide(currentSlide);





