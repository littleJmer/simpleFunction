function simpleFunction(sentence) {

    if(typeof sentence !== "string") return false;

    let words = sentence.split(/\W+/);

    // remove falsy
    words = words.filter(Boolean);

    if (words.length === 0) return sentence;

    for (let word of words) {
        if (word.length < 2) return false;
        let characters = word.split('');
        let firstCharacter = characters.shift();
        let lastCharacter = characters.pop() || '';
        let uniqueCharacters = [...new Set(characters)];
        let parsedWord = `${firstCharacter}${uniqueCharacters.length}${lastCharacter}`;
        sentence = sentence.replace(new RegExp(word), parsedWord)
    }

    return sentence;
};

module.exports = {
    simpleFunction
}
