function convert() {
    const res = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            res.push(parseInt(arguments[i]));
        } else {
            res.push(arguments[i] + '');
        }
    }
    return res;
}

function executeforEach(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        f(arr[i]);
    }
}

function mapArray(arr, f) {
    const res = [];
    executeforEach(arr, el => res.push(f(parseInt(el))));
    return res;
}

function filterArray(arr, f) {
    const res = [];
    executeforEach(arr, el => {
        if (f(el)) {
            res.push(el)
        }
    });
    return res;
}

function flipOver(str) {
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

function makeListFromRange(range) {
    const res = [];
    for (let i = range[0]; i <= range[1]; i++) {
        res.push(i);
    }
    return res;
}

function getArrayOfKeys(arr, name) {
    const res = [];
    executeforEach(arr, el => res.push(el[name]));
    return res;
}

function substitute(arr) {
    return mapArray(arr, el => {
        if (el < 30) {
            return '*';
        }
        return el;
    })
}

function getPastDay(date, daysP) {
    const dateCopy = new Date(Number(date));
    dateCopy.setDate(dateCopy.getDate() - daysP);
    return dateCopy.getDate();
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dateDay = date.getDate();

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${year}/${month}/${dateDay} ${hours}:${minutes}`
}

