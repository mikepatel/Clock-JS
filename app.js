/////////////////////////////////////////////////////////////////////////////////////////////////////
// On load
window.addEventListener("DOMContentLoaded", function(){
    // get reference to 'clock' element
    let clock = document.getElementById("clock");
    clock.textContent = 1;  // initialize value

    // call for update
    updateTime();
});


/////////////////////////////////////////////////////////////////////////////////////////////////////
function updateTime(){
    // get reference to 'clock' element
    let clock = document.getElementById("clock");

    // get time

    //



    // set value for 'clock' element
    clock.textContent++;

    // repeat
    setTimeout(updateTime, 1000);  // milliseconds
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
