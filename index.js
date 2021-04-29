
import firebase from "firebase";
import "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyCsj81a9vRWy1NjnYgzdkHCXlA6S1WTGnU",
  authDomain: "dialog-97777.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://dialog-97777-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "dialog-97777.appspot.com"
};
firebase.initializeApp(config);

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

// Get a reference to the database service
var database = firebase.database();


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

// Add event listener to button with an arrow function
const el4 = document.getElementById("yes2");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el4.addEventListener("click", () => document.getElementById("q2").style.display = "none");
el4.addEventListener("click", () => document.getElementById("q3").style.display = "flex");
//el2.addEventListener("click", () => document.getElementsByClassName("positive")[0].classList.add("show"));
el4.addEventListener("click", () => console.log("question 2: Citizens"));

// Add event listener to button with an arrow function
const el5 = document.getElementById("no2");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el5.addEventListener("click", () => document.getElementById("q2").style.display = "none");
el5.addEventListener("click", () => document.getElementById("q3").style.display = "flex");
//el3.addEventListener("click", () => document.getElementsByClassName("negative")[0].classList.add("show"));
el5.addEventListener("click", () => console.log("question 2: Municipalities"));

// Add event listener to button with an arrow function
const el6 = document.getElementById("yes3");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el6.addEventListener("click", () => document.getElementById("q3").style.display = "none");
el6.addEventListener("click", () => document.getElementById("final").style.display = "flex");
//el2.addEventListener("click", () => document.getElementsByClassName("positive")[0].classList.add("show"));
el6.addEventListener("click", () => console.log("question 3: Everyday"));

// Add event listener to button with an arrow function
const el7 = document.getElementById("no3");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el7.addEventListener("click", () => document.getElementById("q3").style.display = "none");
el7.addEventListener("click", () => document.getElementById("final").style.display = "flex");
//el3.addEventListener("click", () => document.getElementsByClassName("negative")[0].classList.add("show"));
el7.addEventListener("click", () => console.log("question 3: One time"));








