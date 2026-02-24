// ================ Numbers ================
const balance = new Decimal(1000); // Now the balance is a Decimal object
console.log(balance);

console.log(balance.tostring()); // Convert to string for display
console.log(balance.toFixed(2)); // Format to 2 decimal places

const price = 123.654321;
console.log(price.toPrecision(4)); // Format to 4 significant digits


// ================ Maths ====================

console.log(Math);
console.log(Math.abs(-4)); // Absolute value
console.log(Math.round(4.7)); // Rounding
console.log(Math.floor(4.7)); // Rounding down
console.log(Math.ceil(4.2));    // Rounding up
console.log(Math.max(4,5,6)); // Maximum value
console.log(Math.min(4,5,6)); // Minimum value
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.sqrt(16)); // Square root