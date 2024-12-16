document.getElementById('quizButton').addEventListener('click', function() {
    const answer = prompt("What is the most popular microcontroller platform? (Arduino/Raspberry Pi/ESP8266)");
    let resultMessage;

    if (answer.toLowerCase() === 'arduino') {
        resultMessage = "Correct! Arduino is one of the most popular microcontroller platforms.";
    } else {
        resultMessage = "Incorrect. The most popular microcontroller platform is Arduino.";
    }

    document.getElementById('quizResult').innerText = resultMessage;
});