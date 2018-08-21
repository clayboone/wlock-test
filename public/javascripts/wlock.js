'use strict';

const CODE_LENGTH = 5;

// Entry point.
window.addEventListener('load', (ev) => {
    // Create event listeners on the buttons

    // Generate a random code and show it.
    window.theCode = generateRandomCode(CODE_LENGTH);
    document.querySelector('#code').innerHTML = window.theCode
        .clusterSplit(Math.floor(CODE_LENGTH / 2));

    // Wait...
});

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
