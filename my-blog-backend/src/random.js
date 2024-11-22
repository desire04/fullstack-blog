// randomThings.js  

/**  
 * Generates a random integer between two values (inclusive).  
 * @param {number} min - The minimum value.  
 * @param {number} max - The maximum value.  
 * @returns {number} A random integer between min and max.  
 */  
function getRandomInt(min, max) {  
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}  

/**  
 * Returns a random element from an array.  
 * @param {Array} array - The array from which to pick a random element.  
 * @returns {*} A random element from the array.  
 */  
function getRandomElement(array) {  
    const randomIndex = getRandomInt(0, array.length - 1);  
    return array[randomIndex];  
}  

/**  
 * Generates a random color in hex format.  
 * @returns {string} A string representing a random hex color.  
 */  
function getRandomColor() {  
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);  
    return randomColor;  
}  

/**  
 * Reverses a given string.  
 * @param {string} input - The string to reverse.  
 * @returns {string} The reversed string.  
 */  
function reverseString(input) {  
    return input.split('').reverse().join('');  
}  

/**  
 * Waits for a specified amount of time and then resolves a promise.  
 * @param {number} ms - The number of milliseconds to wait.  
 * @returns {Promise} A promise that resolves after the specified time.  
 */  
function delay(ms) {  
    return new Promise(resolve => setTimeout(resolve, ms));  
}  

/**  
 * Logs a random quote to the console after a delay.  
 */  
async function logRandomQuote() {  
    const quotes = [  
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",  
        "The way to get started is to quit talking and begin doing. - Walt Disney",  
        "Life is what happens when you're busy making other plans. - John Lennon",  
        "Get busy living or get busy dying. - Stephen King",  
        "You only live once, but if you do it right, once is enough. - Mae West"  
    ];  

    await delay(2000); // Wait for 2 seconds  
    const randomQuote = getRandomElement(quotes);  
    console.log(`Random Quote: ${randomQuote}`);  
}  

// Example usage  
const randomInt = getRandomInt(1, 100);  
const randomElement = getRandomElement(['apple', 'banana', 'orange', 'grape', 'pear']);  
const randomColor = getRandomColor();  
const reversedString = reverseString("Hello, JavaScript!");  

console.log(`Random Integer: ${randomInt}`);  
console.log(`Random Element: ${randomElement}`);  
console.log(`Random Color: ${randomColor}`);  
console.log(`Reversed String: ${reversedString}`);  

logRandomQuote();