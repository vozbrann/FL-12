function makeNumber(str) {
    return Array.from(str).filter(ch => {
        return !isNaN(Number(ch));
    }).join('');
}

function countNumbers(str) {
    const numArr = Array.from(makeNumber(str));
    let res = {};
    numArr.forEach(ch => {
        let counter = 0;
        numArr.forEach(el => {
            if (el === ch){
                counter++;
            }
        });
        res[ch] = counter;
    });
    return res;
}

countNumbers('erer384jj4444666888jfd123');