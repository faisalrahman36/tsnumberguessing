"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min); //minimum
    max = Math.floor(max); //maximum
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
exports.default = getRandomInt;
