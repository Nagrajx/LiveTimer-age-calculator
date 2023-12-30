let isDOBOpen = false;
let dateOfBirth;
const settingCogEL = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingcontent")
const initialTextEL = document.getElementById("initialText");
const afterDOBBtnTextEL = document.getElementById("afterDOBText");
const dobbuttonEL = document.getElementById("dobbutton");
const dobInputEL = document.getElementById("dobinput");

const yearsEl = document.getElementById("year")
const monthsEl = document.getElementById("month")
const daysEl = document.getElementById("day")
const hoursEl = document.getElementById("hour")
const minutesEl = document.getElementById("minute")
const secondsEl = document.getElementById("second")


const toggleDateOfBirthSelector = () => {
   if (isDOBOpen) {
      settingContentEl.classList.add("hide");

   } else {
      settingContentEl.classList.remove("hide");
   }

   isDOBOpen = !isDOBOpen;

   console.log("toggle", isDOBOpen)
};

const updateAge = () => {

   const currentDate = new Date();
   const dateDiff = currentDate - dateOfBirth;
   const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
   const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
   const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
   const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
   const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
   const second = Math.floor(dateDiff / 1000) % 60;

   yearsEl.innerHTML = year;
   monthsEl.innerHTML = month;
   daysEl.innerHTML = day;
   hoursEl.innerHTML = hour;
   minutesEl.innerHTML = minute;
   secondsEl.innerHTML = second;


};


const setDOBHandler = () => {
   const dateString = dobInputEL.value;
   dateOfBirth = dateString ? new Date(dateString): null;
     
   

   if (dateOfBirth) {

   
      initialTextEL.classList.add("hide");
      afterDOBBtnTextEL.classList.remove("hide");
       setInterval(() => updateAge(),1000);
   } else {

      afterDOBBtnTextEL.classList.add("hide");
      initialTextEL.classList.remove("hide");
   }
   console.log("date of birth", dateOfBirth);
};

setDOBHandler();
settingCogEL.addEventListener("click", toggleDateOfBirthSelector);
dobbuttonEL.addEventListener("click", setDOBHandler);