'use strict';

// Generate a random "daily" code
function generateRandomCode(length) {
    if (!length) { return -1; }

    let code = '';
    for (let i = 0; i < length; i++) {
        code += String(Math.floor(Math.random() * 10));
    }

    return code;
}

// Split a string into @length-sized clusters
function clusterSplit(string, clusterSize) {
    let res = '';
    for (let i = 0; i < string.length; i += clusterSize) {
        for (let j = 0; j < clusterSize; j++) {
            res += string[i + j];
        }
        res += ' ';
    }
    return res.trim();
}
