// Add important events to a daily planner

// $(function) () {});
var timeArray=['8','9','10','11','12','13','14','15','16','17'];

// THEN the current day is displayed at the top of the calendar
var currentDate= moment().format("dddd, MMMM Do");
var currentTime = moment().hour();
console.log(currentTime)

//1. making time blocks
//2. update time classes
//3. update military => normal hours
//4. get userinput set to localstorage
//5. when doc loads call get ls to get data appear onto cal


// WHEN I view the time blocks for that day] .container

function timeBlock () {

for ( var index=0;index <timeArray.length;index++){


    var d1=document.createElement("div");
    //<div></div>
  
    d1.setAttribute("class","row time-block");

    var d2=document.createElement("div");
    d2.setAttribute("class", "col-md-1 hour");
    if (timeArray[index] == 12) {
        d2.textContent = timeArray[index]+" PM";
    }
    if (timeArray[index] < 12) {
        d2.textContent = timeArray[index] + " AM";
    }
    if (timeArray[index] > 12) {
        d2.textContent = timeArray[index] + " PM";
    }

    if (timeArray[index] > 12 { "" -12})


  
    //class needs to be added to text area
    var textArea=document.createElement("textarea");
   
    console.log(timeArray[index])
    console.log(currentTime);
    console.log()

    //present

    if (timeArray[index] == currentTime) {
        textArea.setAttribute("class", "col-md-10 description present");


    }
    //past
    else if (timeBlock < currentTime) {

    }

    

    //future

    else {

    }

 


    var button=document.createElement("button");
    button.setAttribute("class", "btn saveBtn col-md-1");
    button.setAttribute("id", timeArray[index]);

    var i=document.createElement("i");
    i.setAttribute("class", "fas fa-save");

    button.appendChild(i);
    /*
    <button class="btn saveBtn col-md-1" id="8">
        <i class="fas fa-save"></i>
    </button> */
    d1.appendChild(d2);
    d1.appendChild(textArea);
    d1.appendChild(button);
    document.querySelector(".container").appendChild(d1);
    

}
}

// WHEN I click into a time block

//THEN I can enter an event

$(document).ready(function (){
    // WHEN I click the save button for that time block
    $(".saveBtn").on("click", function (){
    //pull values
    var text= $(this).description(".description").val();
    var time= $(this).name().attr("id)");

    //THEN the text for that event is saved in local storage
    localStorage.setItem(time, text);
})




timeBlock();
// WHEN I refresh the page -> THEN the saved events persist-- >
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

})