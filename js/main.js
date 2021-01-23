$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('#sec1').offset().top
    }, 'slow');
});
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('#sec1').offset().top
    }, 'slow');
});
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$.validator.addMethod("regex",
    function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    }, "Molimo Vas unesite validan broj telefona!"
);
$('#form').validate({
    rules: {
        ime: {
            required: true,
            minlength: 3
        },
        adresa: {
            required: true,
            email: true
        },
        tel: {
            required: true,
            regex: "[0-9]" // As RegExp 		
        }
    },
    messages: {
        ime: {
            required: "Unesite Vaše ime!",
            minlength: "Ime mora imati minimum 3 karaktera!"
        },
        adresa: {
            required: "Unesite Vaš e-mail!",
            email: "E-mail mora biti validan!"
        },
        tel: {
            required: "Unesite Vaš broj telefona!",
        }
    }
});
$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('#sec1').offset().top
    }, 'slow');
});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function blink() {
    document.getElementById("changeText").style.color = "#000000";
    setTimeout("appear()", 700);
}

function appear() {
    document.getElementById("changeText").style.color = "rgb(218, 218, 184)";
    setTimeout("blink()", 700);
}
window.onload = function () {
    blink();
}
$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('#sec1').offset().top
    }, 'slow');
});