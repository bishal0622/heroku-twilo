module.exports = function(syntaxTest) {
    var anymatch = require('anymatch');
    //pattterns matching using regular expressions
    var matchers = [/\b(BI|bi|Bi)$/, /\b(BT|bt|Bt|bT)[ \t]^[a-zA-Z0-9][\w\.]+[a-zA-Z0-9]$/];
    return anymatch(matchers, syntaxTest, true);
}

// [ \t][0-9]{4}
// [ \t][\w.-]{32}