function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFeed(numOfVerses, numOfVersesDisplayed) {
    var verseNum = []
    var i = 1;
    var x = getRandomInt(1,numOfVerses);
    while(i <= numOfVersesDisplayed) {
        while(verseNum.includes(x)) {
            x = getRandomInt(1,7);
        }
        verseNum.push(x);
        x = getRandomInt(1,numOfVerses);
        i++;
    }
    return verseNum;
}