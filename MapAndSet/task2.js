function createLetterMap(word) {
    const letterMap = new Map();
    for (let char of word.toLowerCase()) {
        letterMap.set(char, (letterMap.get(char) || 0) + 1);
    }
    return letterMap;
}

function areMapsEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (map2.get(key) !== val) return false;
    }
    return true;
}

function aclean(arr) {
    const mapsArray = [];
    const uniqueWords = [];
    for (let word of arr) {
        const currentMap = createLetterMap(word);
        let isUnique = true;
        for (let existingMap of mapsArray) {
            if (areMapsEqual(currentMap, existingMap)) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            mapsArray.push(currentMap);
            uniqueWords.push(word);
        }
    }
    return uniqueWords;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
