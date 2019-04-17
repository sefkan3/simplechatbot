const patternDict = [{
    pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
    intent: 'Hello'
}, {
    pattern: '\\b(bye|exit|Cya)\\b',
    intent: 'Exit'
}];

module.exports = patternDict;