function compute() {
    //Get values
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById('rate').value);
    var years = parseInt(document.getElementById('years').value);
    //Calculate output
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+years;
    //Create final text
    document.getElementById('result').innerHTML="If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>.<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark>";
}

//Update rate output
function updateRate() {
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText=rateval+"%";
}

//Check if Amount input is a positive number
function validatePrincipal() {
    var principal = parseInt(document.getElementById("principal").value);
    var biggerThanZero = principal > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
