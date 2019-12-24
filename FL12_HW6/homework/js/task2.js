let a = prompt('Input a: ');
let b = prompt('Input b: ');
let c = prompt('Input c: ');

a = (!a)? NaN : Number(a);
b = (!b)? NaN : Number(b);
c = (!c)? NaN : Number(c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log('Equilateral triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle')
    }
} else {
    console.log('Triangle doesn’t exist');
    alert('Triangle doesn’t exist');
}