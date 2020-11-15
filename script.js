// Create let functions
let btn = document.getElementById('button');

// Create Event Listener (MAKE SURE ID IS DECLARED IN HTML AND NOT CLASS)
btn.addEventListener('click', function(){
    // parseInt tells interpreter that the input is a number and not a string and value is added for same reason
    let monthlyEarnings = parseInt(document.getElementById('earnings').value);
    let monthlyRent = parseInt(document.getElementById('rent').value);
    let monthlyBills = parseInt(document.getElementById('bills').value);
    document.getElementById('output').value = monthlyEarnings - (monthlyRent + monthlyBills);
})
btn.addEventListener('click', function(){
    let outputInt = parseInt(document.getElementById('output').value);
    document.getElementById('weekly').value = outputInt / 4;
})
