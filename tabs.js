// const tabContent = document.getElementsByClassName("tabs"); // Removed the dot from the class name
// const btns = document.getElementsByClassName("tab-button"); // Removed the dot from the class name

// function openTab(event, tabName) {
//   // Get all tab-body elements and hide them
//   var tabBodies = document.getElementsByClassName("tab-body");
//   for (var i = 0; i < tabBodies.length; i++) {
//     tabBodies[i].classList.remove("active");
//   }

//   // Get all tab-button elements and remove the active class
//   var tabButtons = document.getElementsByClassName("tab-button");
//   for (var i = 0; i < tabButtons.length; i++) {
//     tabButtons[i].classList.remove("active");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(tabName).classList.add("active");
//   event.currentTarget.classList.add("active");
// }

// // Loop through all tab buttons to add event listeners
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click",() => {
//     tabContent.classList.add("active");
//   }
//   );
// }
