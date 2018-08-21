'use strict';

const CODE_LENGTH = 6;

// Entry point.
window.addEventListener('load', (ev) => {
    // Create event listeners on the buttons
    Array.from(document.querySelectorAll('.btn')).forEach((elem) => {
        elem.addEventListener('click', lockButtonHandler);
    });

    // Generate a random code and show it.
    window.theCode = generateRandomCode(CODE_LENGTH);
    document.querySelector('#code').innerHTML = window.theCode
        .clusterSplit(Math.floor(CODE_LENGTH / 2));

    // Wait...
});

// Handle unlock event
function lockUnlockedHandler() {
    document.querySelector('.lock').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    document.querySelector('#cheatcode').remove();
}

// Handle lock button clicks.
function lockButtonHandler(event) {
    // Add the pressed button to the tape
    window.buttonTape = window.buttonTape || '';
    window.buttonTape += event.target.dataset.buttonid;

    // Trim the old presses
    if (buttonTape.length > CODE_LENGTH) {
        window.buttonTape = window.buttonTape.slice(1);
    }

    // Check if the tape matches the unlock code
    if (window.buttonTape === window.theCode) {
        lockUnlockedHandler();
    }
}

// Generate a random code of length @length as a string.
function generateRandomCode(length) {
    if (!length) { return -1; }

    let code = '';
    for (let i = 0; i < length; i++) {
        code += String(Math.floor(Math.random() * 10));
    }

    return code;
}

// Split a string into @length-sized clusters.
String.prototype.clusterSplit = function (clusterSize) {
    let res = '';
    for (let i = 0; i < this.length; i += clusterSize) {
        for (let j = 0; j < clusterSize; j++) {
            if (this[i + j]) res += this[i + j];
        }
        res += ' ';
    }
    return res.trim();
}
