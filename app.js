
var display = document.getElementById("display");
var classname = document.getElementsByClassName("button");

Array.from(classname).forEach(function (element) {
    element.addEventListener('click', function () {
        console.log(this.value);
        if (this.value == "=") {
            display.value = eval(display.value);
        } else if (this.value == "ce") {
            display.value = "";
        } else if (this.value == "sqrt") {
            display.value = Math.sqrt(display.value);
        }
        else {
            display.value += this.value;
        }
    })
});