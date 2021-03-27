const question = document.querySelectorAll(".questwrap");
const image = document.querySelector("#image");



for (let ques of question) {
    ques.addEventListener("click", function() {
        ques.childNodes[1].classList.toggle("open");
        ques.childNodes[1].childNodes[1].classList.toggle("turn");
    })
}
/* window.addEventListener("resize", function() {
    // fire when above 1203
    if (document.documentElement.clientWidth > 1200) {
        image.src = "./images/illustration-woman-online-desktop.svg"
    }
    // fire when below 1203
    else {
        image.src = " /images/illustration-woman-online-mobile.svg"
    }
}, true); */