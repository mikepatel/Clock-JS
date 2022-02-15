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
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();

    // prepend time values with "0" if necessary
    hours = format_time(hours)
    minutes = format_time(minutes);
    seconds = format_time(seconds);

    // create a string with time values
    let time = hours + ":" + minutes + ":" + seconds;

    // get reference to 'clock' element
    let clock = document.getElementById("clock");

    // set value for 'clock' element
    clock.textContent = time;

    // repeat
    setTimeout(updateTime, 1000);  // milliseconds
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
// prepend time values with "0" if necessary
function format_time(value){
    if(value < 10){
        value = "0" + value;
    }

    return value;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
