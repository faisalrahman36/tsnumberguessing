"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const random_1 = __importDefault(require("../random"));
const prompt = (0, prompt_sync_1.default)();
const target = (0, random_1.default)(0, 10000);
console.log("Let's start the number guessing game.");
const number = prompt('Enter an integer between 0 and 10000  :');
const guess = parseInt(number);
if (guess === target) {
    console.log('You guessed correctly');
}
else {
    console.log('Your guessed incorrectly. The correct number is :', target);
}
