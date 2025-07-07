/*let box1 = document.getElementById("box1").querySelector(".selectors");
let box2 = document.getElementById("box2").querySelector(".selectors");
let box3 = document.getElementById("box3").querySelector(".selectors");


function expandBox(boxId) {
  box1.classList.add("hidden");
  box2.classList.add("hidden");
  box3.classList.add("hidden");

  document.getElementById(boxId).querySelector(".selectors").classList.remove("hidden");
}*/
// This is a single-line comment

// Define boxes
let box1 = document.getElementById("box1"); // First box
let box2 = document.getElementById("box2"); // Second box
let box3 = document.getElementById("box3"); // Third box

/* 
This function expands the clicked box 
and hides the others 
*/
function expandBox(boxId) {
    // Hide all selectors
    box1.querySelector(".selectors").classList.add("hidden");
    box2.querySelector(".selectors").classList.add("hidden");
    box3.querySelector(".selectors").classList.add("hidden");

    // Show only the selected one
    let selectedBox=document.getElementById(boxId);
    selectedBox.querySelector(".selectors").classList.remove("hidden");

    selectedBox.classList.add("selected");
}





