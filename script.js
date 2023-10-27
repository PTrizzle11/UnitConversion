function temperature(){
    var cel = document.getElementById("celsius").value;
    var fah = ((cel*9/5)+32);
    document.getElementById("fahrenheit").value=fah;
}

function weight(){
    var kg = document.getElementById("kilo").value;
    var lb = kg * 2.2;
    document.getElementById("pounds").value=lb;
}

function distance() {
    var km = document.getElementById("km").value;
    var mi = km * 0.62137;
    document.getElementById("miles").value=mi;
}