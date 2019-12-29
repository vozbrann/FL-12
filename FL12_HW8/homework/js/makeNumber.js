function makeNumber(str) {
    return Array.from(str).filter(ch => {
        return !isNaN(Number(ch));
    }).join('');
}

makeNumber('erer384jjjfd123'); //=>384123