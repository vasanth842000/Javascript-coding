console.log("script_blocking.js started");
for (let i = 0; i < 1e9; i++) {} // big delay
alert("script_blocking.js executed while blocking parsing");
console.log("script_blocking.js finished");
