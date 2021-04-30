
import firebase from "firebase/app";
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

//function writeQuestionData(questionId, name) {
//  firebase.database().ref(questionId).set({
//    question: name,
//    option1: 0,
//    option2: 0,
//  });
//}
//
//writeQuestionData("1", "GreetingBehaviour")
//writeQuestionData("2", "DesinfectionUsage")
//writeQuestionData("3", "MeaningOfLife")

//writeAnswerData()

function writeAnswerData(question, option) {
  const update = {};
  update [question + '/' + option] = firebase.database.ServerValue.increment(1)
  firebase.database().ref().update(update);
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
el2.addEventListener("click", () => writeAnswerData("1", "option1"));

// Add event listener to button with an arrow function
const el3 = document.getElementById("no1");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el3.addEventListener("click", () => document.getElementById("q1").style.display = "none");
el3.addEventListener("click", () => document.getElementById("q2").style.display = "flex");
//el3.addEventListener("click", () => document.getElementsByClassName("negative")[0].classList.add("show"));
el3.addEventListener("click", () => console.log("question 1: no"));
el3.addEventListener("click", () => writeAnswerData("1", "option2"));


// Add event listener to button with an arrow function
const el4 = document.getElementById("yes2");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el4.addEventListener("click", () => document.getElementById("q2").style.display = "none");
el4.addEventListener("click", () => document.getElementById("q3").style.display = "flex");
//el2.addEventListener("click", () => document.getElementsByClassName("positive")[0].classList.add("show"));
el4.addEventListener("click", () => console.log("question 2: Citizens"));
el4.addEventListener("click", () => writeAnswerData("2", "option1"));

// Add event listener to button with an arrow function
const el5 = document.getElementById("no2");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el5.addEventListener("click", () => document.getElementById("q2").style.display = "none");
el5.addEventListener("click", () => document.getElementById("q3").style.display = "flex");
//el3.addEventListener("click", () => document.getElementsByClassName("negative")[0].classList.add("show"));
el5.addEventListener("click", () => console.log("question 2: Municipalities"));
el5.addEventListener("click", () => writeAnswerData("2", "option2"));

// Add event listener to button with an arrow function
const el6 = document.getElementById("yes3");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el6.addEventListener("click", () => document.getElementById("q3").style.display = "none");
el6.addEventListener("click", () => document.getElementById("final").style.display = "flex");
//el2.addEventListener("click", () => document.getElementsByClassName("positive")[0].classList.add("show"));
el6.addEventListener("click", () => console.log("question 3: Everyday"));
el6.addEventListener("click", () => writeAnswerData("3", "option1"));

// Add event listener to button with an arrow function
const el7 = document.getElementById("no3");
// el.addEventListener("click", () => { modifyText("Lit!"); }, false);
el7.addEventListener("click", () => document.getElementById("q3").style.display = "none");
el7.addEventListener("click", () => document.getElementById("final").style.display = "flex");
//el3.addEventListener("click", () => document.getElementsByClassName("negative")[0].classList.add("show"));
el7.addEventListener("click", () => console.log("question 3: One time"));
el7.addEventListener("click", () => writeAnswerData("3", "option2"));
