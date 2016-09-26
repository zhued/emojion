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
    // var words = input.split(" ");
    // var emojiText = [];
    // for (var i = 0; i < words.length; i++) {
    //   emojiText.push(emoji.get(words[i]));
    // };
    // res.send(emojiText.join(' '));
    return line + " hello"
  };

};
