
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 1
    }
  }
});
new Typed("#typing",{
    strings:[
        "Web developer",
        "AI Enthusiast",
        "Web Designer",
        "Problem Solver"
    ],
    typeSpeed:70,
    backSpeed:50,
    loop:true
});
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(window.scrollY >= sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
document.addEventListener("DOMContentLoaded", function () {

    const mobileMenu = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-links");

    if (mobileMenu && navMenu) {

   mobileMenu.addEventListener("click", function () {

    console.log("clicked");

    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
    } else {
        navMenu.classList.add("active");
    }

});

        const menuLinks = document.querySelectorAll(".nav-links a");

        menuLinks.forEach(link => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });

    }

});
emailjs.init({
    publicKey: "fiTgQkXGz4b_Ccz-n",
});

document.getElementById("contact-form").addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_b0spx8f",
        "template_uk51q2a",
        this
    )
    .then(function () {

        alert("Message Sent Successfully!");

        document.getElementById("contact-form").reset();

    })
    .catch(function (error) {

        alert("Failed to send message");
        console.log(error);

    });

});