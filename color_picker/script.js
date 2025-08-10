document.getElementById("colorInput").addEventListener("input", function(event) {
    // Get the Selecter color from Input
    let selecterColor = event.target.value

    // Update color text
    document.getElementById("colorCode").textContent = selecterColor

    // Update the background color of the display box
    document.getElementById("colorDisplay").style.backgroundColor = selecterColor
})