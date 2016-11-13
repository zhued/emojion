var nodeemoji = require('node-emoji'),
    emojione = require('emojione'),
    defineWord = require('define-word'),
    jsonDic = require('./lib/dictionary_library.json');;

module.exports = function(app){

  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/api/emojify/:input', function(req, res) {
    var input = req.params.input;
    var ret = parse_line(input)
    res.send(ret);
  });

  function parse_line(line){
    var words = line.split(" ");
    var emojiText = [];
    for (var i = 0; i < words.length; i++) {
      emojiText.push(findEmoji(words[i]));
    };
    var emoji = nodeemoji.get(line);
    return emojiText.join(' ')

    // var def = getDefinition(words[0]);
    // var def = getSynonyms(words[0]);
    return def;
  };

  function getDictionary(text){

  }

  function getDefinition(text){
    var definit = require("define-word").define(text)
    var buff = "";
    buff += text + " is a " + definit.type + "\n"
    for (var i = 0; i < definit.definitions.length; i++) {
      buff += i + 1 + ". " + definit.definitions[i] + "\n"
    }
    return buff
  }

  function getSynonyms(text){
    return defineWord.synonyms(text)
  }

  function findEmoji(emojiShort){
    var emoji = nodeemoji.get(emojiShort);
    var output = emojione.toImage(emoji);
    return output;
  }

};


// console.log(emoji.get('coffee')); // returns the emoji code for coffee (displays emoji on terminals that support it)
// console.log(emoji.which(emoji.get('coffee'))); // returns the string "coffee"
// console.log(emoji.get(':fast_forward:')); // `.get` also supports github flavored markdown emoji (http://www.emoji-cheat-sheet.com/)
// console.log(emoji.emojify('I :heart: :coffee:!')); // replaces all :emoji: with the actual emoji, in this case: returns "I ❤️ ☕️!"
