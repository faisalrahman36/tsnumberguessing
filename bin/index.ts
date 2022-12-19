import promptSync from 'prompt-sync';
import getRandomInt from '../random'
const prompt = promptSync();

const target=getRandomInt(0,10000);
console.log("Let's start the number guessing game.");
const number = prompt('Enter an integer between 0 and 10000  :');
const guess=parseInt(number);

if (guess===target){
    console.log('You guessed correctly');
}

else {
    console.log('Your guessed incorrectly. The correct number is :', target)
}