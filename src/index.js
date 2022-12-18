"use strict";
exports.__esModule = true;
exports.converter = exports.NATO_PHONETIC_ALPHABET = void 0;
exports.NATO_PHONETIC_ALPHABET = {
    a: 'alpha',
    b: 'bravo',
    c: 'charlie',
    d: 'delta',
    e: 'echo',
    f: 'foxtrot',
    g: 'golf',
    h: 'hotel',
    i: 'india',
    j: 'juliet',
    k: 'kilo',
    l: 'lima',
    m: 'mike',
    n: 'november',
    o: 'oscar',
    p: 'papa',
    q: 'quebec',
    r: 'romeo',
    s: 'sierra',
    t: 'tango',
    u: 'uniform',
    v: 'victor',
    w: 'whiskey',
    x: 'x-ray',
    y: 'yankee',
    z: 'zulu'
};
function converter(text, alphabet) {
    if (alphabet === void 0) { alphabet = exports.NATO_PHONETIC_ALPHABET; }
    if (typeof text !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!text) {
        return [];
    }
    var output = [];
    var letters = text.toLowerCase().split('');
    for (var index = 0, len = letters.length; index < len; index++) {
        var letter = letters[index];
        var word = alphabet[letter];
        if (word) {
            output.push(word);
        }
    }
    return output;
}
exports.converter = converter;
if (process.argv.length > 2) {
    console.log(converter(process.argv[2]));
}
