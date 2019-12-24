let a = Number(prompt('Input a: '));
let b = Number(prompt('Input b: '));
let c = Number(prompt('Input c: '));

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    console.log('Invalid input data');
} else {
    const d = Math.pow(b, 2) - 4*a*c;

    if (!!d && d > 0){
        console.log(`x1 = ${(-b + Math.sqrt(d))/(2*a)} and x2 = ${(-b - Math.sqrt(d))/(2*a)}`);
    } else if(d === 0){
        console.log(`x = ${(-b + Math.sqrt(d))/(2*a)}`);
    } else {
        console.log('No solution')
    }
}