//declare variables
var dayEl = document.getElementById('currentDay');
var activArry = JSON.parse(localStorage.getItem("activArry"));

//create blank acivity array if one does not exist
if(!activArry){
    activArry = ["","","","","","","","",""];
}

//array of timeslot refrences
var timeArry = [document.getElementById('time9'),
                document.getElementById('time10'),
                document.getElementById('time11'),
                document.getElementById('time12'),
                document.getElementById('time1'),
                document.getElementById('time2'),
                document.getElementById('time3'),
                document.getElementById('time4'),
                document.getElementById('time5')];

//get current date and hour
var date = moment().format("dddd, MMMM Do");
var hour = moment().hour();

//display current date
dayEl.textContent = date;

//color and populate time slots
//sets past to read only
//hour = i+9
for(i=0; i<timeArry.length; i++){
    timeArry[i].value = activArry[i];
    if(i+9 < hour){
        timeArry[i].classList.add("past");
        timeArry[i].readOnly = true;
    }
    else if(i+9 === hour){
        timeArry[i].classList.add("present");
    }
    else{
        timeArry[i].classList.add("future");
    }
}

//save button functionality
document.getElementById('saveBtn9').addEventListener("click", function(){
    activArry[0] = timeArry[0].value;
    localStorage.setItem("activArry", JSON.stringify(activArry));
})
document.getElementById('saveBtn10').addEventListener("click", function(){
    activArry[1] = timeArry[1].value;
    localStorage.setItem("activArry", JSON.stringify(activArry));
})
document.getElementById('saveBtn11').addEventListener("click", function(){
    activArry[2] = timeArry[2].value;
    localStorage.setItem("activArry", JSON.stringify(activArry));
})
document.getElementById('saveBtn12').addEventListener("click", function(){
    activArry[3] = timeArry[3].value;
    localStorage.setItem("activArry", JSON.stringify(activArry));
})
document.getElementById('saveBtn13').addEventListener("click", function(){
    activArry[4] = timeArry[4].value;
    localStorage.setItem("activArry", JSON.stringify(activArry));
})
document.getElementById('saveBtn14').addEventListener("click", function(){
    activArry[5] = timeArry[5].value;
    localStorage.setItem("activArry", JSON.stringify(activArry));
})
document.getElementById('saveBtn15').addEventListener("click", function(){
    activArry[6] = timeArry[6].value;
    localStorage.setItem("activArry", JSON.stringify(activArry));
})
document.getElementById('saveBtn16').addEventListener("click", function(){
    activArry[7] = timeArry[7].value;
    localStorage.setItem("activArry", JSON.stringify(activArry));
})
document.getElementById('saveBtn17').addEventListener("click", function(){
    activArry[8] = timeArry[8].value;
    localStorage.setItem("activArry", JSON.stringify(activArry));
})
