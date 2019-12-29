function pipe() {
    return Array.from(arguments).reduce((res, f) => {
        return f(res);
    });
}

function addOne(x) {
    return x + 1;
}

pipe(1, addOne); //=> 2
