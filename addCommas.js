function addCommas(num) {

    let str = num.toString();
    let [integerPart, decimalPart] = str.split('.');
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}

console.log(addCommas(1234));          // "1,234"
console.log(addCommas(1000000));       // "1,000,000"
console.log(addCommas(98765432.12));    // "98,765,432.12"
console.log(addCommas(6));             // "6"
console.log(addCommas(-10));           // "-10"
console.log(addCommas(-5678));         // "-5,678"

module.exports = addCommas;