//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export default function getRandomInt(min:number, max:number) {
    min = Math.ceil(min); //minimum
    max = Math.floor(max); //maximum
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }