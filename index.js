const display = document.getElementById("display")

function Append(inp){
    display.value += inp
}
function Calc() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}
function Clear() {
    display.value = "";
}