function getMin() {
    return Array.from(arguments).reduce((prev, curr) => {
        return (prev > curr) ? prev : curr;
    });
}

getMin(3, 0, -3); //=> -3