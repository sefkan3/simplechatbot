const patternDict = [{
    pattern: '\\b(Hi|Hello|Hey)\\b',
    intent: 'Hello'
}, {
    pattern: '\\b(bye|exit|Cya)\\b',
    intent: 'Exit'
}];

module.exports = patternDict;