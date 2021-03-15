function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;    
}

randomRangeNumber(55, 60);

module.exports = randomRangeNumber;
