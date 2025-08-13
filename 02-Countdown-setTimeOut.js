// 2. Create a countdown timer using setTimeout(), use setTimeout() and console.log() to demonstrate asynchronous behaviour, and add another setTimeout with 1000ms execute.

function countdown(seconds) {
  if (seconds < 0) return;
  
  setTimeout(() => {
    console.log(`Countdown: ${seconds}`);
    countdown(seconds - 1);
  }, 1000);
}

// Start countdown from 5
countdown(5);

// Demonstrate async behavior with multiple setTimeouts
console.log('Start async demonstration');

setTimeout(() => {
  console.log('This runs after 500ms');
}, 500);

setTimeout(() => {
  console.log('This runs after 1000ms');
}, 1000);

console.log('End of script');
