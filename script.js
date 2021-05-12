function compute() {
    //Get values
    var principal = document.getElementById("principal").value;

    //Check that input is not empty
    if (principal=="") {
      alert("Enter some number");
      document.getElementById("principal").focus();
    }
    //Check that input is a positive number
    else if (principal<=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    //Calculate output
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    //Create final text
    document.getElementById('result').innerHTML="If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>.<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark>";
    }
}

//Update rate output
function updateRate() {
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText=rateval+"%";
}
