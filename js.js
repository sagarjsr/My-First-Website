//for random number
var ram1 = Math.floor(Math.random() * 100);
document.getElementById("ram1").innerHTML =
    ram1;
var ram2 = Math.floor(Math.random() * 100);
document.getElementById("ram2").innerHTML =
    ram2;

//for only numeric input only
function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}


//multiplication
function myFunction() {
    var numb = +document.getElementById("numb").value;
    var pro = ram1 * ram2;
    console.log("entered answer = " + numb);
    console.log("product of the numbers = " + pro);


    //to weather input answer is correct or not
    if (numb == pro) {
        document.getElementById("output").innerHTML = "correct";
        ram1 = Math.floor(Math.random() * 100);
        document.getElementById("ram1").innerHTML =
            ram1;

    }
    else {
        document.getElementById("output").innerHTML = "incorrect";
    }
}


//for reload page
function relod() {
    location.reload();
}



