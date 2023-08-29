
var startingHour = 9;
var currentDateTxt = document.querySelector(".currentDate");
var date = dayjs().format("MMM-DD-YYYY");

$(function () {
  createDailyPlanner();
  timeChecker();
  saveButton();
  setTextAreaValue();
  currentDateTxt.textContent = "Date: " + date;
});

//this function is just creating the template for the daily planner.
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

//this function adds event listeners too all the buttons
function saveButton(){
  var saveBtn = document.querySelectorAll(".saveBtn");
  var descriptionValue = document.querySelectorAll(".description");
  for (i = 0; i < saveBtn.length; i++) {
    //This loops through all the save btns on the page and adds this event listener to all of them.
    saveBtn[i].setAttribute("data-btn", i);
    descriptionValue[i].setAttribute("data-btn", i);
    saveBtn[i].addEventListener("click", function (event) {
    let parentElement = this.parentElement;
    let textArea = parentElement.querySelector(".description");
    let hourID = parentElement.getAttribute("id");
    console.log(textArea.value);
    console.log(hourID);
    localStorage.setItem(hourID,textArea.value);
    });
  }
}


//This function adds the text that was saved to local storage to the text area it belongs
function setTextAreaValue() {
  let allDivs = document.querySelectorAll(".description");
  let hour = 9;
  for (i = 0; i < allDivs.length; i++)
  {
    let currentHour = localStorage.getItem("hour-"+hour);
    allDivs[i].value = currentHour;
    hour++;
  }
}
