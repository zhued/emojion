var emoji = require('node-emoji');

module.exports = function(app){

  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/api/emojify/:input', function(req, res) {
    var input = req.params.input;
    var ret = parse_line(input)
    res.send(emoji.get(ret));
  });

  function parse_line(line){
    // var words = line.split(" ");
    // var emojiText = [];
    // for (var i = 0; i < words.length; i++) {
    //   emojiText.push(emoji.get(words[i]));
    // };
    // res.send(emojiText.join(' '));
    return line
  };

};


// console.log(emoji.get('coffee')); // returns the emoji code for coffee (displays emoji on terminals that support it)
// console.log(emoji.which(emoji.get('coffee'))); // returns the string "coffee"
// console.log(emoji.get(':fast_forward:')); // `.get` also supports github flavored markdown emoji (http://www.emoji-cheat-sheet.com/)
// console.log(emoji.emojify('I :heart: :coffee:!')); // replaces all :emoji: with the actual emoji, in this case: returns "I ❤️ ☕️!"
