// ===============================
// Theme Toggle
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeToggle.textContent="☀️";

}else{

themeToggle.textContent="🌙";

}

});

// ===============================
// Typing Animation
// ===============================

const words=[
"Future Aerospace Scientist",
"Future Engineer",
"Technology Enthusiast",
"Lifelong Learner"
];

const title=document.querySelector(".hero h3");

let wordIndex=0;
let charIndex=0;
let deleting=false;

function typeEffect(){

if(!title) return;

const currentWord=words[wordIndex];

if(!deleting){

title.textContent=currentWord.substring(0,charIndex++);

if(charIndex>currentWord.length){

deleting=true;

setTimeout(typeEffect,1500);

return;

}

}else{

title.textContent=currentWord.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(typeEffect,deleting?50:100);

}

typeEffect();


// ===============================
// Scroll Animation
// ===============================

const cards=document.querySelectorAll(".card");

function revealCards(){

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

}

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="1s";

});

window.addEventListener("scroll",revealCards);

revealCards();


// ===============================
// Scroll To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.right="20px";

topBtn.style.bottom="20px";

topBtn.style.padding="15px";

topBtn.style.border="none";

topBtn.style.borderRadius="50%";

topBtn.style.cursor="pointer";

topBtn.style.background="#00d4ff";

topBtn.style.display="none";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};