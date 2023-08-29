// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDateTxt = document.querySelector(".currentDate");
var saveBtn = document.querySelectorAll(".saveBtn");
var descriptionValue = document.querySelectorAll(".description");
var timeInHour = dayjs().hour();
var date = dayjs().format("MMM-DD-YYYY");

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  for (i = 0; i < saveBtn.length; i++) {
    //This loops through all the save btns on the page and adds this event listener to all of them.
    saveBtn[i].setAttribute("data-btn", i);
    descriptionValue[i].setAttribute("data-btn", i);
    saveBtn[i].addEventListener("click", function (event) {
    let attributeNum = 
    localStorage.setItem("hour-" + )
     //We have to check to see if the data-btn is the same in both columns so that we save the right thing.
    });

    
  }
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  currentDateTxt.textContent = "Date: " + date;
});
