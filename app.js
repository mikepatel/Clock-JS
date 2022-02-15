/////////////////////////////////////////////////////////////////////////////////////////////////////
// On load
window.addEventListener("DOMContentLoaded", function(){
    // call for update
    updateTime();
});


/////////////////////////////////////////////////////////////////////////////////////////////////////
function updateTime(){
    // get current time
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // prepend time values with "0" if necessary
    hours = preprocess_text(hours)
    minutes = preprocess_text(minutes);
    seconds = preprocess_text(seconds);
    
    // create a string with time values
    time = hours + ":" + minutes + ":" + seconds;

    // get reference to 'clock' element
    let clock = document.getElementById("clock");

    // set value for 'clock' element
    clock.textContent = time;

    // repeat
    setTimeout(updateTime, 1000);  // milliseconds
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
// prepend time values with "0" if necessary
function preprocess_text(value){
    if(value < 10){
        value = "0" + value;
    }

    return value;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
