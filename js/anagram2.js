exports.anagramsFor = function(word, listOfWords) {
    // anagramsFor = function(word, listOfWords) {
    let wordArr= word.split("")
    // console.log(wordArr)
    let answer= listOfWords.filter(function (item) {
        return wordArr.every(function (letter) {
            return item.includes(letter)
        })
    })
    return answer
};
// console.log(anagramsFor("threasd", ["threads", "trashed", "hardest", "hatreds", "hounds"]))