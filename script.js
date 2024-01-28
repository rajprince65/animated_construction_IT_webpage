// const droneTextElement = document.getElementById('droneText');
const droneTextElement = document.getElementById('text1');
const sentence = "Data Collection Using Drone.";

let index = 0;

function displayText() {
    droneTextElement.textContent = sentence.slice(0, index);
    index++;

    if (index > sentence.length) {
        index = 0;
    }
}

setInterval(displayText, 290);
