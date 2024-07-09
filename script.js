const words = ["Web Application Developer","a Developer", "a Designer", "an Instructor"];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing
const erasingSpeed = 50; // Speed of erasing
const delayBetweenWords = 2000; // Delay between words

function typeWriter() {
    if (charIndex < words[wordIndex].length) {
        document.getElementById("auto-writing").innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    if (charIndex > 0) {
        document.getElementById("auto-writing").innerHTML = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Start the typewriter effect
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(typeWriter, delayBetweenWords);
});