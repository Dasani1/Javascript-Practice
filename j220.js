
const limit = 750;
let n = 1;
const r = 5;

let days = 0;
let total = n;

while (total <= limit){
    days++;

    n = n * r;
    total += n; 
}


console.log(days);