function isLeapYear(inp) {
    let date = new Date(inp);
    if (!date.getFullYear()) {
        return date.toString();
    }
    const year = date.getFullYear();
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
        ? `${year} is a leap year` : `${year} is not a leap year`;
}

isLeapYear('2020-01-01 00:00:00'); // =>  ‘2020 is a leap year’
