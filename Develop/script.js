// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDateTxt = document.querySelector(".currentDate");
var saveBtn = document.querySelectorAll(".saveBtn");
var descriptionValue = document.querySelectorAll(".description");
var startingHour = 9;

var date = dayjs().format("MMM-DD-YYYY");

$(function () {
  createDailyPlanner();
  timeChecker();
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

// we need to find a way to match the save button number with the textarea number.
function saveTxt() {}

function createDailyPlanner() {
  
  for (i = 9; i <= 17; i++) {
    //this is the container div that we append almost every element to.
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("row", "time-block");
    containerDiv.setAttribute("id", "hour-" + startingHour);

    //This it the hour div which displays the time on the left
    let hourDiv = document.createElement("div");
    hourDiv.classList.add("col-2", "col-md-1", "hour", "text-center", "py-3");
    containerDiv.appendChild(hourDiv);
    //we will add the text content at the end of the funtion so we only need one if statement.

    //This is the textarea that the user will put there text
    let descriptionArea = document.createElement("textarea");
    descriptionArea.classList.add("col-8", "col-md-10", "description");
    descriptionArea.setAttribute("rows", "3");
    containerDiv.appendChild(descriptionArea);

    //this is the save button
    let saveBtn = document.createElement("button");
    saveBtn.classList.add("btn", "saveBtn", "col-2", "col-md-1");
    saveBtn.setAttribute("aria-label", "save");
    containerDiv.appendChild(saveBtn);

    //this is the icon for the save button
    let iElement = document.createElement("i");
    iElement.classList.add("fas", "fa-save");
    iElement.setAttribute("aria-hidden", "true");
    saveBtn.appendChild(iElement);

    //this if statement controls if the 
    if (startingHour <= 12) {
      hourDiv.textContent = startingHour + " AM";
      startingHour++;
    } else if (startingHour >= 12) {
      let hourPm = startingHour - 12;
      hourDiv.textContent = hourPm + " PM";
      startingHour++;
    }

    //this appends the whole container to the body.
    document.body.appendChild(containerDiv);
  }
}

//This function checks the hour with dayjs and sets the approapriate colour to the div
function timeChecker(){
  var currentHour = dayjs().hour();
  var divHourIdArray = document.querySelectorAll(".time-block");
  for (i = 0; i < divHourIdArray.length; i++){
    let hourId = divHourIdArray[i].getAttribute("id");
    let hourSplit = hourId.split("hour-");
    let hour = hourSplit[1]
    if (currentHour > hour){
      divHourIdArray[i].classList.add("past");
    }else if (currentHour == hour){
      divHourIdArray[i].classList.add("present");
    }else if (currentHour < hour){
      divHourIdArray[i].classList.add("future");
    }
    
  }
}

// <!-- Example of a past time block. The "past" class adds a gray background color. -->

// <div id="hour-9" class="row time-block past">
//   <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
//   <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
// <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//   <i class="fas fa-save" aria-hidden="true"></i>
// </button>
// </div>

//       <!-- Example of a a present time block. The "present" class adds a red background color. -->

//       <div id="hour-10" class="row time-block present">
//         <div class="col-2 col-md-1 hour text-center py-3">10AM</div>
//         <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
//         <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//           <i class="fas fa-save" aria-hidden="true"></i>
//         </button>
//       </div>

//       <!-- Example of a future time block. The "future" class adds a green background color. -->

//       <div id="hour-11" class="row time-block future">
//         <div class="col-2 col-md-1 hour text-center py-3">11AM</div>
//         <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
//         <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//           <i class="fas fa-save" aria-hidden="true"></i>
//         </button>
//       </div>
