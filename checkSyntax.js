module.exports = function(syntaxTest) {
    var anymatch = require('anymatch');
    //pattterns matching using regular expressions
    var matchers = [/\b(BI|bi|Bi)$/, /\b(BT|bt|Bt|bT)[ \t][0-9]{2,6}[\t][\w]{5,32}$/];
    return anymatch(matchers, syntaxTest, true);
}

// [ \t][0-9]{4}
// [ \t][\w.-]{32}s