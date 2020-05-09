function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFeed(numOfVerses, numOfVersesDisplayed) {
    var verse = ["1 (1-1 to 1-11): We often doubt and worry about achieving wealth, success and other outcomes.",
    "2 (1-12 to 1-19): In our anxiety, we interpret anything that happens as a signal of doom",
    "3 (1-20 to 1-23): It doesn’t matter who you are or what you’re asking for. Be in this conversation. Keep enquiring.",
    "4 (1-26 to 1-47): In the midst of action, we sometimes worry Am I going to hurt someone? Is the outcome worth it?",
    "5 (2-11): Hesitation happens when you mix-up the Self with your body and the rest of the environment.",
    "6 (2-12): The Self is separate from the environment and your body. The Self is ever-lasting. So is the Lord.",
    "7 (2-12): Is there anything other than the observable universe"];
    verseNum = []
    var i = 1;
    var x = getRandomInt(1,numOfVerses);
    while(i <= numOfVersesDisplayed) {
        while(verseNum.includes(x)) {
            x = getRandomInt(1,7);
        }
        var varVerse = document.getElementById("verseFeed" + i);
        varVerse.innerHTML = verse[x-1];
        verseNum.push(x);
        x = getRandomInt(1,7);
        console.log(x);
        i++;
    }
}