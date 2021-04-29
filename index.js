// Function to change the content of Start button
function modifyText(new_text) {
  const start = document.getElementById("start");
  start.firstChild.nodeValue = new_text;
}

// Add event listener to button with an arrow function
const el1 = document.getElementById("action");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el1.addEventListener("click", () => document.getElementById("start").style.display = "none");
el1.addEventListener("click", () => document.getElementById("q1").style.display = "flex");
el1.addEventListener("click", () => console.log("user onboard"));

// Add event listener to button with an arrow function
const el2 = document.getElementById("yes1");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el2.addEventListener("click", () => document.getElementById("q1").style.display = "none");
el2.addEventListener("click", () => document.getElementById("q2").style.display = "flex");
//el2.addEventListener("click", () => document.getElementsByClassName("positive")[0].classList.add("show"));
el2.addEventListener("click", () => console.log("question 1: yes"));

// Add event listener to button with an arrow function
const el3 = document.getElementById("no1");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el3.addEventListener("click", () => document.getElementById("q1").style.display = "none");
el3.addEventListener("click", () => document.getElementById("q2").style.display = "flex");
//el3.addEventListener("click", () => document.getElementsByClassName("negative")[0].classList.add("show"));
el3.addEventListener("click", () => console.log("question 1: no"));





