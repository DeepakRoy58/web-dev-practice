/* The code inside the function will execute when 
"something" invokes (calls) the function:

When it is invoked (called) from JavaScript code
When an event occurs (a user clicks a button)
Automatically (self invoked)
The () operator invokes (calls) the function:
 */
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77)