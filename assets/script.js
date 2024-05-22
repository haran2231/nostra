// offer heading 

var offer = document.getElementById("offer")
var offer_close = document.getElementById("offer-close")

offer_close.addEventListener("click", function () {
    offer.style.display="none"
})

// wish heart 

var wish = document.querySelectorAll(".like-button");

wish.forEach((btn) =>{
    btn.addEventListener("click", function(event) {
        if (event.target.src.endsWith("blackheart.png")) {
            event.target.src = "./images/redheart.png";
        } else {
            event.target.src = "./images/blackheart.png";
        }
    });
})


